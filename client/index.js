import React from 'react'
import ReactDom from 'react-dom'
import routes from '../src/App'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { getClientStore } from '../src/store/store'
import Header from '../src/component/Header'

const store = getClientStore();
// 注水 客户端入口
const page =
    <Provider store={store}>
        <BrowserRouter>
            <Header />
            {routes.map(route => <Route {...route}></Route>)}
        </BrowserRouter>
    </Provider>

if (window.__store) {
    ReactDom.hydrate(page, document.getElementById("root"))
} else {
    ReactDom.render(page, document.getElementById("root"))
}
