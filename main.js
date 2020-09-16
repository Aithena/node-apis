const express = require('express')
const app = express()
const port = 9501
const host = 'localhost'
app.listen(port, host, () => console.log('Example app listening at http://%s:%s', host, port))
app.use(require('body-parser').json())
app.use(require('body-parser').urlencoded({
  extended: false
}))

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', '3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  res.header('Access-Control-Allow-Credentials', true)
  req.method.toUpperCase() === 'OPTIONS' ? res.sendStatus(200) : next()
})

app.use('/api/user', require('./api/user'))
app.use('/api/article', require('./api/article'))