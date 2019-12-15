import { connect } from 'react-redux'
import { getUserInfo } from '../store/user'
import React, { useState, useEffect } from 'react'
function User({ userinfo, getUserInfo }) {
    useEffect(() => {
        // 如果首屏不是这个页面，则需要进行客户端数据的获取
        if (Object.keys(userinfo) == 0) {
            getUserInfo()
        }
    },[])
    return (
        <div>
            <h1>User页面</h1>
            您好,{userinfo.title}
        </div>
    )
}
// 获取数据，用于服务端渲染
User.loadData = (store) => {
    return store.dispatch(getUserInfo())
}

export default connect(
    state => ({ userinfo: state.user.userinfo }),
    { getUserInfo }
)(User)