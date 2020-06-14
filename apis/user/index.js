const express = require('express')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const router = express.Router()
module.exports = router

const { config, secretkey } = require('../../utils/mysql')
const mysql = require('mysql')
const conn = mysql.createConnection(config)

router.all('/login', (req, res, next) => {
  const { userName, password } = req.body || req.query
  res.status(200)

  if (!userName) {
    res.json({
      code: 301,
      error: '用户名不能为空'
    })
  } else if (!password) {
    res.json({
      code: 301,
      error: '密码不能为空'
    })
  } else {
    const sql = 'SELECT * FROM admin ' + (userName ? 'WHERE userName = ?' : '')
    conn.query(sql, userName, (error, result) => {
      if (error) {
        return res.json({
          code: 301,
          list: '',
          error: '系统错误'
        })
      } else if (!result.length) {
        return res.json({
          code: 301,
          error: '用户不存在'
        })
      } else {
        if (result[0].password === crypto.createHash('md5').update(password).digest('hex')) {
          const token = jwt.sign({
            id: result[0].id,
            userName: result[0].userName
          }, secretkey, {
            expiresIn: '8h'
          })
          return res.json({
            code: 200,
            data: '登陆成功',
            authorization: token
          })
        } else {
          return res.json({
            code: 301,
            error: '密码错误'
          })
        }
      }
    })
  }
})

router.get('/getInfo', (req, res, next) => {
  const { authorization: token } = req.headers
  res.status(200)
  
  jwt.verify(token, secretkey, (error, decode) => {
    if (error) {
      res.json({
        code: 500,
        error: error
      })
    } else {
      const { id } = decode
      const sql = 'SELECT * FROM admin ' + (id ? 'WHERE id = ?' : '')
      conn.query(sql, id, (error, result) => {
        if (error) {
          return res.json({
            code: 400,
            list: '',
            error: '数据库错误'
          })
        } else if (!result.length) {
          return res.json({
            code: 301,
            error: '用户不存在'
          })
        } else {
          let user = result[0]
          delete user.password
          user.roles = [user.roles]
          return res.json({
            code: 200,
            data: user
          })
        }
      })
    }
  })
})

router.all('/logout', (req, res, next) => {
  res.status(200)
  res.json({
    code: 200,
    data: '',
    message: '正常退出'
  })
})