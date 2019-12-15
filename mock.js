const express = require('express')
const app = express()

app.get('/api/course/list', (req, res) => {
    // res.setHeader('Access-Control-Allow-Origin','*')
    // res.setHeader('Access-Control-Allow-Methods','GET,POST,DELETE,PUT')
    // res.setHeader('Content-Type','application/json')

    res.json({
        code: 0,
        list: [
            { name: 'http权威指南', id: 1 },
            { name: 'JS高级编程', id: 2 },
            { name: '算法', id: 3 },
            { name: '网络编程', id: 4 }
        ]
    })
})
app.get('/api/user/info1', (req, res) => {
    // res.setHeader('Access-Control-Allow-Origin','*')
    // res.setHeader('Access-Control-Allow-Methods','GET,POST,DELETE,PUT')
    // res.setHeader('Content-Type','application/json')

    res.json({
        code: 0,
        data: { title: 'web小白', best: '小白' }
    })
})
// 端口在8082，前端请求8081端口
app.listen(8082, () => {
    console.log('mock启动成功')
})