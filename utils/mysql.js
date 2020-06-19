const mysql = require('mysql')
const con = mysql.createConnection({
  "host": "localhost",
  "port": "3306",
  "user": "root",
  "password": "root",
  "database": "node_apis"
})
con.connect()

function exec(sql) {
  const promise = new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if (err) {
        reject(err)
        return
      }
      resolve(result)
    })
  })
  return promise
}

module.exports = {
  exec
}