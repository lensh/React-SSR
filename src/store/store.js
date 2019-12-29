// 存储入口
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'
import { indexReducer } from './index'
import { userReducer } from './user'

const reducers = combineReducers({
    index: indexReducer,
    user: userReducer
})

const serverAxios = axios.create({
    baseURL: 'http://localhost:8081'
})

const clientAxios = axios.create({
    baseURL: '/'
})

// 获取客户端的store
export const getClientStore = () => {
    // 通过window对象来获取服务端获取的数据
    const defaultStore = window.__store ? window.__store : {};
    console.log('客户端defaultStore', defaultStore);
    return createStore(reducers, defaultStore, applyMiddleware(thunk.withExtraArgument(clientAxios)))
}
// 获取服务端的store
export const getServerStore = () => {
    return createStore(reducers, applyMiddleware(thunk.withExtraArgument(serverAxios)))
}
