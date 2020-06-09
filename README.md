### 状态码

+ 200：成功
+ 301：缺少参数
+ 302：与数据库不匹配


### 重要

```js
// 全局express框架
const express = require('express')
const router = express.Router()
module.exports = router
```

``` js
// 查询数据（all方法支持POST、GET、PUT、PATCH、DELETE传参方式）
router.all('/list', (req, res, next) => {
  res.status(200),
  res.json(questions)
})
```

``` js
// 获取参数
const params = req.body || req.query
```