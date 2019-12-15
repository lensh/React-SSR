// 存储入口
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { indexReducer } from './index'
import { userReducer } from './user'

const reducers = combineReducers({
    index: indexReducer,
    user: userReducer
})
// 创建store
// const store = createStore(combineReducers({
//     index: indexReducer
// }), applyMiddleware(thunk))
// export default store

// 获取客户端的store
export const getClientStore = () => {
    // 通过window对象来获取服务端获取的数据
    const defaultStore = window.__store ? window.__store : {};
    console.log('客户端defaultStore', defaultStore);
    return createStore(reducers, defaultStore, applyMiddleware(thunk))
}
// 获取服务端的store
export const getServerStore = () => {
    return createStore(reducers, applyMiddleware(thunk))
}
