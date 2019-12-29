// 这里的node代码，会用babel-loader处理
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath, Route } from 'react-router-dom'
import express from 'express'
import routes from '../src/App'
import { Provider } from 'react-redux'
import path from 'path'
import fs from 'fs'
import open from 'opn'
import config from './config'
import { getServerStore } from '../src/store/store'  // 获取服务端的store
import Header from '../src/component/Header'
import axios from 'axios'
const proxy = require('http-proxy-middleware')

const app = express()
const store = getServerStore()
app.use(express.static('public'))
app.use('/api/*', proxy({ target: 'http://localhost:8082', changeOrigin: true }));

function csrRender(res) {
  const filePath = path.resolve(process.cwd(), 'public/index.csr.html');
  return res.send(fs.readFileSync(filePath, 'utf-8'));
}

// 使用*监听所有路由
app.get('*', (req, res) => {
  //如果开启了客户端渲染
  if (config.csr) {
    console.log('csr参数开启')
    return csrRender(res);
  }
  // 获取根据路由渲染出的组件，并且拿到loadData方法获取数据
  let promises = []  // 存储网络请求
  routes.some(route => {
    const match = matchPath(req.url, route);
    if (match) {
      const { loadData } = route.component;
      if (loadData) {
        // 规避报错
        const promise = new Promise((resolve, reject) => {
          loadData(store).then(resolve).catch(resolve)
        });
        promises.push(promise);
      }
    }

    // 取消客户端拉取数据的行为，全部由服务端拉取
    // if (route.component.loadData) {
    //   promises.push(route.component.loadData(store))
    // }
  })

  // 等待所有网络请求结束以后再渲染
  Promise.all(promises).then(ret => {
    const context = {
      css: []
    };
    // 解析成html字符串
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <Header />
          {routes.map(route => <Route {...route}></Route>)}
        </StaticRouter>
      </Provider>
    );
    // 状态码
    if (content.statusCode) {

    }
    const css = context.css.join('\n');
    res.send(`
      <html>
        <head>
        <meta charset="utf-8">
        <title>react ssr</title>
        <style>${css}</style>
        </head>
        <body>
          <div id="root">${content}</div>
          <script>
           window.__store= ${JSON.stringify(store.getState())}
          </script>
          <script src="/bundle.js"></script>
        </body>
      </html>
    `)
  }).catch(err => {
    console.log('err', err)
    res.send('报错页面')
  })
})
app.listen(8081, () => {
  console.log('监听8081端口');
  //open("http://localhost:8081");
})