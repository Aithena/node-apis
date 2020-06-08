const express = require('express')
const app = express()

// 设置跨域访问
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', '3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

let questions = []

function createRandomItem(id) {
  let heroes = ['张三', '李四', '王五', '赵六', '钱七', '路人甲', '路人乙', 'bruse Lee']
  return {
    id: id,
    name: heroes[Math.floor(Math.random() * 7)],
    age: Math.floor(Math.random() * 1000),
    saved: Math.floor(Math.random() * 10000)
  }
}

for (let i = 0; i < 10; i++) {
  questions.push(createRandomItem(i))
}

// 写个接口list
app.get('/list', function (req, res) {
  res.status(200),
  res.json(questions)
})

// 登录
app.post('/api/user/login', (req, res) => {
  let query = ''
  req.on('data', (chunk) => {
    query += chunk
  })
  req.on('end', () => {
    console.log(query)
    let params = JSON.parse(query)
    if (!params.username) {
      res.status(200)
      res.json({
        code: 301,
        error: '用户名不能为空'
      })
    } else if (!params.password) {
      res.status(200)
      res.json({
        code: 301,
        error: '密码不能为空'
      })
    } else if (params.username !== 'admin' || params.password !== '123456') {
      res.status(200)
      res.json({
        code: 302,
        error: '用户名和密码不匹配'
      })
    } else if (params.username === 'admin' && params.password === '123456') {
      res.status(200)
      res.json({
        code: 200,
        data: {
          userName: 'liqingyun',
          nickName: '李青云',
          group: 'admin',
          avatar: 'https://vole.oss-cn-shenzhen.aliyuncs.com/vue-admin-lite/img/1001.jpg',
          token: 'fTYWhTBsp7d3hO1j4_ejfnkB55Obm5aLRohJpA5qq5jDh3r3jksD-Rte43U26ny0hvcB'
        }
      })
    }
  })
})

// 配置服务端口
const server = app.listen(3000, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port)
})
