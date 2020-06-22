const express = require('express')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const router = express.Router()
module.exports = router

const { secretkey } = require('../../db/mysql.config')
const mysql = require('../../db/mysql')

router.get('/list', (req, res, next) => {
  const { authorization: token } = req.headers
  const { id, title, page } = req.query
  
  let sql = 'SELECT * FROM node_article'
  let params = []

  if (id) {
    sql += ' WHERE id = ?'
    params.push('%' + id + '%')
  }
  if (title) {
    sql += ' WHERE article_title LIKE ?'
    params.push('%' + title + '%')
  }
  if (page) {
    let current = page
    let pageSize = 2
    sql += ' limit ?, ?'
    params.push((current-1) * pageSize, parseInt(pageSize))
  }
  
  jwt.verify(token, secretkey, (error, decode) => {
    mysql.query(sql, params, (result, fields) => {
      res.json({
        code: 200,
        list: result
      })
    })
  })
})

router.all('/add', (req, res, next) => {
  const post = req.body || req.query
  const sql = 'INSERT INTO node_article SET ?'

  mysql.query(sql, post, (error, result) => {
    if (error) {
      res.json({
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
  const sql = 'UPDATE node_article SET ? WHERE id = ?'

  mysql.query(sql, [post, id], (error, result) => {
    if (error) {
      res.json({
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
  const { id } = req.body || req.query
  const sql = 'DELETE FROM node_article WHERE id = ?'

  mysql.query(sql, id, (error, result) => {
    if (error) {
      res.json({
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