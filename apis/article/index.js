const express = require('express')
const router = express.Router()
module.exports = router

const config = require('../../mysql/config')
const mysql = require('mysql')
const conn = mysql.createConnection(config)

router.all('/list', (req, res, next) => {
  const id = req.body.id || req.query.id
  const sql = 'SELECT * FROM article ' + (id ? 'WHERE id = ?' : '')

  conn.query(sql, id, (error, result) => {
    res.status(200)

    if (error) {
      return res.json({
        code: 404,
        list: '',
        error: '获取失败'
      })
    } else {
      res.json({
        code: 200,
        list: result
      })
    }
  })
})

router.all('/add', (req, res, next) => {
  const post = req.body || req.query
  const sql = 'INSERT INTO article SET ?'

  conn.query(sql, post, (error, result) => {
    res.status(200)

    if (error) {
      return res.json({
        code: 404,
        data: '',
        error: '添加失败'
      })
    } else {
      res.json({
        code: 200,
        data: result
      })
    }
  })
})

router.all('/update', (req, res, next) => {
  const post = req.body || req.query
  const id = req.body.id || req.query.id
  const sql = 'UPDATE article SET ? WHERE id = ?'

  conn.query(sql, [post, id], (error, result) => {
    res.status(200)

    if (error) {
      return res.json({
        code: 404,
        data: '',
        error: '修改失败'
      })
    } else {
      res.json({
        code: 200,
        data: result
      })
    }
  })
})

router.all('/delete', (req, res, next) => {
  const id = req.body.id || req.query.id
  const sql = 'DELETE FROM article WHERE id = ?'

  conn.query(sql, id, (error, result) => {
    res.status(200)

    if (error) {
      return res.json({
        code: 404,
        data: '',
        error: '删除失败'
      })
    } else {
      res.json({
        code: 200,
        data: result
      })
    }
  })
})