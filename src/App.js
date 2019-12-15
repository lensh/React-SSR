import React from 'react'
import { Route } from 'react-router-dom'
import Index from './container/index' // 引入两个react组件
import About from './container/about'
import User from './container/user'
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
        // exact: true
    },
    {
        path: '/about',
        key: 'about',
        component: About,
        exact: true
    },
    {
        path: '/user',
        key: 'user',
        component: User,
        exact: true
    }
]