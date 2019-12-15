// 这里的node代码，会用babel-loader处理
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath, Route } from 'react-router-dom'
import express from 'express'
import routes from '../src/App'
import { Provider } from 'react-redux'
import { getServerStore } from '../src/store/store'  // 获取服务端的store
import Header from '../src/component/Header'
import axios from 'axios'
const proxy = require('http-proxy-middleware')

const app = express()
const store = getServerStore()
app.use(express.static('public'))
app.use('/api/*', proxy({ target: 'http://localhost:8082', changeOrigin: true }));

// 使用 /api/*监听所有api请求，也可以用 http-proxy-middleware中间件进行请求转发
/*
app.get('/api/*', (req, res) => {
  axios.request({
    method: req.method.toLocaleLowerCase(),
    baseURL: 'http://localhost:8082',
    url: req.url,
    data: req.body
  }).then(r => {
    res.send(r.data)
  }).catch(e => {
    console.log(e)
  })
})
*/

// 使用*监听所有路由
app.get('*', (req, res) => {
  // 获取根据路由渲染出的组件，并且拿到loadData方法获取数据
  let promises = []  // 存储网络请求
  routes.some(route => {
    // const match = matchPath(req.url, route);
    // if (match && route.component.loadData) {
    //   promises.push(route.component.loadData(store))
    // }

    // 取消客户端拉取数据的行为，全部由服务端拉取
    if (route.component.loadData) {
      promises.push(route.component.loadData(store))
    }
  })

  // 等待所有网络请求结束以后再渲染
  Promise.all(promises).then(ret => {
    // 解析成html字符串
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url}>
          <Header />
          {routes.map(route => <Route {...route}></Route>)}
        </StaticRouter>
      </Provider>
    );
    res.send(`
      <html>
        <head>
        <meta charset="utf-8">
        <title>react ssr</title>
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
})