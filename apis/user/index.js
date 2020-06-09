const express = require('express')
const router = express.Router()
module.exports = router

router.all('/login', (req, res, next) => {
  const params = req.body || req.query
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

router.all('/logout', (req, res, next) => {
  res.status(200)
  res.json({
    code: 200,
    data: '',
    message: '正常退出'
  })
})