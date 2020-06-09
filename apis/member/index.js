const express = require('express')
const router = express.Router()
module.exports = router

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

router.all('/list', (req, res, next) => {
  res.status(200),
  res.json(questions)
})
