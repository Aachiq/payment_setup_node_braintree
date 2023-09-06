const express = require('express')
const app = express()
const port = 9000
const braintreeRoutes = require('./routes/braintreeRoute');

// Routes Middlewares
app.use('/',braintreeRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})