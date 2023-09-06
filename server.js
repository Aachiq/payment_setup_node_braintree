const express = require('express')
const app = express()
const braintreeRoutes = require('./routes/braintreeRoute');

app.use('/',braintreeRoutes)

app.listen(9000, () => {
  console.log(`Example app listening on port ${9000}`)
})