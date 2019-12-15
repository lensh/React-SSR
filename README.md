##  React SSR
SSR解决的问题有两个：
* SEO，由于搜索引擎爬虫抓取工具可以直接查看完全渲染的页面。
* 加速首屏加载，解决首屏白屏问题

react-dom提供了服务端渲染的api ```renderToString```，负责把React组件解析成html。
这里比vue的ssr多了一个细节，就是node不支持jsx，需要bable的支持。一个同构应用，需要两个入口，分别编译client和server的代码。
针对服务端渲染代码，我们可以剔除node_modules，从而大幅减少服务端代码生成耗时。使用babel-loader，在node层面解析jsx。

服务端渲染：renderToString、renderToStaticMarkup——>string 

客户端渲染：render——>HTML结构

![image](https://user-gold-cdn.xitu.io/2019/12/15/16f07b21df90b665?w=636&h=253&f=png&s=69339)

### hydrate介绍
在React16.x中，在客户端渲染的render的方法的基础上，增加了一个新的方法hydrate.
简单来说，如果在仅在客户端呈现内容，那么使用render方法就已经足够，如果客户端要在服务端的基础上进行渲染，那么可以使用hydrate. 
使用的方法和render一样：
```js
import {hydrate} from 'react-dom';
hydrate(<HomePage/>,document.getElementById('app'));
```
## 实现步骤
项目目录结构

![image](https://user-gold-cdn.xitu.io/2019/12/15/16f07b25263bd770?w=1222&h=383&f=png&s=43604)
### 1、webpack配置
根目录下新建webpack.server.js 和 webpack.client.js。
```js
// webpack.server.js
const path = require('path')
const nodeExternals = require('webpack-node-externals')  // 排除node模块
// 服务端的webpack
module.exports = {
    target: "node", // 服务端
    mode: "development",
    entry: './server/index.js',
    externals: [nodeExternals()],
    output: {
        file: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                // 才能支持import，支持jsx
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-react', '@babel/preset-env']
                }
            }
        ]
    }
}
```
webpack.client.js
```js
// webpack.client.js
const path = require('path')
module.exports = {
    mode: "development",
    entry: './client/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                // 才能支持import，支持jsx
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-react', '@babel/preset-env']
                }
            }
        ]
    }
}
```
### 2、服务端打包入口 （server/index.js）
用renderToString将组件转换成字符串。
```jsx
// 这里的node代码，会用babel-loader处理
import React from 'react'
import { renderToString } from 'react-dom/server'
import express from 'express'
import App from '../src/App'

const app = express();

app.get('/', (req, res) => {
    const page = <App title="zls" />
    const content = renderToString(page);
    res.send(`
      <html>
        <head>
         <meta charset="utf-8">
         <title>react ssr</title>
        </head>
        <body>
          <div id="root">${content}</div>
        </body>
      </html>
    `)
})

app.listen(9001, () => {
    console.log('监听9001端口');
})
```
### 3、客户端打包入口（client/index.js）
```js
import React from 'react'
import ReactDom from 'react-dom'
import App from '../src/App'

// 注水
ReactDom.hydrate(App, document.getElementById("root"))
```
### 4、App组件入口 (src/App.js)
```jsx
import React, { useState } from 'react'

function App(props) {
    const [count, setCount] = useState(1)
    return <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>累加</button>
    </div>
}
export default App
```
### 5、package.json配置
package.json
```js
{
  "name": "ssr",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "concurrently \"npm run dev:client\" \"npm run dev:server\" \"npm run dev:start\"",
    "dev:client": "webpack --config webpack.client.js --watch",
    "dev:server": "webpack --config webpack.server.js --watch",
    "dev:start": "nodemon --watch build --exec node \"./build/bundle.js\""
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@babel/core": "^7.7.5",
    "@babel/preset-env": "^7.7.6",
    "@babel/preset-react": "^7.7.4",
    "babel-loader": "^8.0.6",
    "concurrently": "^5.0.1",
    "express": "^4.17.1",
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.10",
    "webpack-node-externals": "^1.7.2"
  }
}
```
start 使用concurrently同时运行多条命令

dev:client 是对客户端的代码进行打包生成 public/bundle.js

dev:server 是对服务端的代码进行打包生成 build/bundle.js

dev:start 服务端 启动build/bundle.js
### 6、使用StaticRouter支持多页面的SSR
服务端用StaticRouter、客户端用BrowserRouter
#### （1）修改server/index.js
```js
// 这里的node代码，会用babel-loader处理
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'  // 引入StaticRouter
import express from 'express'
import App from '../src/App'

const app = express();
app.use(express.static('public'))

// 使用*监听所有路由
app.get('*', (req, res) => {
  const content = renderToString(
    <StaticRouter location={req.url}>
      {App}
    </StaticRouter>
  );
  res.send(`
      <html>
        <head>
         <meta charset="utf-8">
         <title>react ssr</title>
        </head>
        <body>
          <div id="root">${content}</div>
          <script src="/bundle.js"></script>
        </body>
      </html>
    `)
})

app.listen(9001, () => {
  console.log('监听9001端口');
})
```
#### （2）修改client/index.js
```js
import React from 'react'
import ReactDom from 'react-dom'
import App from '../src/App'
import { BrowserRouter } from 'react-router-dom'

// 注水
const page = <BrowserRouter>{App}</BrowserRouter>
ReactDom.hydrate(page, document.getElementById("root"))
```
#### （3）修改src/App.js
```js
import React from 'react'
import { Route } from 'react-router-dom'
import Index from './container/index' // 引入两个react组件
import About from './container/about'

export default (
    <div>
        <Route path="/" exact component={Index}></Route>
        <Route path="/about" exact component={About}></Route>
    </div>
)
```
### 7、SSR支持数据流
首屏的时候，服务端要先请求好数据并把数据存储window.__store里面，然后客户端从window.__store里面获取服务端请求到的数据
#### 异步数据获取思路
##### （1）组件内加一个loadData方法
```js
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getIndexList } from '../store/index'

function Index({ list, getIndexList }) {
    const [count, setCount] = useState(1)
    // 先注释掉，换成在服务端获取数据
    // useEffect(() => {
    //     if (!list.length) {
    //         getIndexList()
    //     }
    // }, [])
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>累加</button>
            <ul>{
                list.map(item => {
                    return <li key={item.id}>{item.name}</li>
                })
            }</ul>
        </div>
    )
}
// 获取数据，用于服务端渲染
Index.loadData = (store) => {
    return store.dispatch(getIndexList())
}

export default connect(
    state => ({ list: state.index.list }),
    { getIndexList }
)(Index)
```
##### （2）路由配置改成js的配置，才能获取组件
```js
import React from 'react'
import { Route } from 'react-router-dom'
import Index from './container/index' // 引入两个react组件
import About from './container/about'

// export default (
//     <div>
//         <Route path="/" exact component={Index}></Route>
//         <Route path="/about" exact component={About}></Route>
//     </div>
// )

// 换成js的配置，这样服务端才能拿到配置
export default [
    {
        path: '/',
        key: 'index',
        component: Index,
        exact: true
    },
    {
        path: '/about',
        key: 'about',
        component: About,
        exact: true
    }
]
```
##### （3）修改src/store/store.js
区分服务端的store和客户端的store
```js
// 存储入口
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { indexReducer } from './index'

// 创建store
// const store = createStore(combineReducers({
//     index: indexReducer
// }), applyMiddleware(thunk))
// export default store

// 获取客户端的store
export const getClientStore = () => {
    // 通过window对象来获取服务端获取到数据
    const defaultStore = window.__store ? window.__store : {};
    console.log('defaultStore', defaultStore);
    return createStore(combineReducers({
        index: indexReducer
    }), defaultStore, applyMiddleware(thunk))
}
// 获取服务端的store
export const getServerStore = () => {
    return createStore(combineReducers({
        index: indexReducer
    }), applyMiddleware(thunk))
}
```
##### （4）修改client/index.js
```js
import React from 'react'
import ReactDom from 'react-dom'
import routes from '../src/App'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { getClientStore } from '../src/store/store'

const store = getClientStore();
// 注水
const page =
    <Provider store={store}>
        <BrowserRouter>
            {routes.map(route => <Route {...route}></Route>)}
        </BrowserRouter>
    </Provider>
ReactDom.hydrate(page, document.getElementById("root"))
```
##### （5）修改server/index.js
服务端根据请求的url，利用react-router-dom的matchPath，根据路由拿到对应的组件，然后调用这个组件的loadData方法。
```js
// 这里的node代码，会用babel-loader处理
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath, Route } from 'react-router-dom'
import express from 'express'
import routes from '../src/App'
import { Provider } from 'react-redux'
import { getServerStore } from '../src/store/store'  // 获取服务端的store

const app = express()
app.use(express.static('public'))
const store = getServerStore()

// 使用*监听所有路由
app.get('*', (req, res) => {
  // 获取根据路由渲染出的组件，并且拿到loadData方法获取数据
  const promises = []  // 存储网络请求
  routes.some(route => {
    const match = matchPath(req.url, route);
    if (match && route.component.loadData) {
      promises.push(route.component.loadData(store))
    }
  })
  // 等待所有网络请求结束以后再渲染
  Promise.all(promises).then(ret => {
    // 解析成html字符串
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url}>
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
  })
})

app.listen(9001, () => {
  console.log('监听9001端口');
})
```
## 8、异常处理和请求转发
### 异常处理
header页面接口报错，其它页面也能显示正常。解决方案：在axios里面需要捕获错误
```js
export const getUserInfo = () => {
    return (dispatch) => {
        return axios.get(`${host}/api/user/info`).then(res => {
            const { data } = res.data
            dispatch({ type: USER_INFO, userinfo: data })
        }).catch(e => {
            // 在这里需要捕获错误，才不会出现所有页面都挂了的情况
            console.log(e)
        })
    }
}
```
### 请求转发
每次让服务端请求数据（转发），不需要客户端去请求数据,避免跨域。解决方案：使用```http-proxy-middleware```
```js
// 使用http-proxy-middleware进行请求转发，防止出现跨域的问题
const proxy = require('http-proxy-middleware')
app.use('/api/*', proxy({ target: 'http://localhost:8082', changeOrigin: true }));

// const match = matchPath(req.url, route);
// if (match && route.component.loadData) {
//   promises.push(route.component.loadData(store))
// }

// 取消客户端拉取数据的行为，全部由服务端拉取
if (route.component.loadData) {
  promises.push(route.component.loadData(store))
}
```