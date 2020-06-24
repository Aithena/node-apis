const express = require('express')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const router = express.Router()
module.exports = router

const { secretkey } = require('../../db/mysql.config')
const mysql = require('../../db/mysql')

router.all('/login', (req, res, next) => {
  const { userName, password } = req.body || req.query
  
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
    const sql = 'SELECT * FROM node_admin ' + (userName ? 'WHERE user_name = ?' : '')
    mysql.query(sql, userName, (result) => {
      if (!result.length) {
        res.json({
          code: 301,
          error: '用户不存在'
        })
      } else if (result[0].user_password === crypto.createHash('md5').update(password).digest('hex')) {
        const token = jwt.sign({
          id: result[0].id,
          userName: result[0].user_name
        }, secretkey, {
          expiresIn: '8h'
        })
        res.json({
          code: 200,
          data: '登陆成功',
          authorization: token
        })
      } else {
        res.json({
          code: 301,
          error: '密码错误'
        })
      }
    })
  }
})

router.get('/getInfo', (req, res, next) => {
  const { authorization: token } = req.headers

  jwt.verify(token, secretkey, (error, decode) => {
    if (error) {
      res.json({
        code: 400,
        error: error
      })
    } else {
      const { id } = decode
      const sql = 'SELECT * FROM node_admin ' + (id ? 'WHERE id = ?' : '')
      mysql.query(sql, id, (result) => {
        if (!result.length) {
          res.json({
            code: 301,
            error: '用户不存在'
          })
        } else {
          let data = result[0]
          delete data.user_password
          data.user_roles = [data.user_roles]
          res.json({
            code: 200,
            data: data
          })
        }
      })
    }
  })
})

router.all('/logout', (req, res, next) => {
  res.json({
    code: 200,
    data: '',
    message: '正常退出'
  })
})