const mysql = require('mysql')
const { mysqlkey } = require('./mysql.config')

module.exports = {
  query: (sql, params, callback) => {
    var connection = mysql.createConnection(mysqlkey)
    connection.connect((error) => {
      if (error) {
        console.log('数据库链接失败')
        throw error
      }
      connection.query(sql, params, (error, results, fields) => {
        if (error) {
          console.log('数据操作失败')
          throw error
        }
        callback && callback(results, fields)
        connection.end((error) => {
          if (error) {
            console.log('关闭数据库连接失败')
            throw error
          }
        })
      })
    })
  }
}