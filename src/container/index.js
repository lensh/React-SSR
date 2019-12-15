import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getIndexList } from '../store/index'

function Index({ list, getIndexList }) {
    const [count, setCount] = useState(1)
    useEffect(() => {
        // 如果首屏不是这个页面，则需要进行客户端数据的获取
        if (!list.length) {
            getIndexList()
        }
    }, [])
    return (
        <div>
            <h1>Index页面</h1>
            {count}
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