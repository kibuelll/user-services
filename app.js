require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app =  express()
const port = 3001 || process.env.PORT
const routes = require('./router/index')
const handleErr = require('./middlewares/error')

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(routes)
app.use(handleErr)

app.listen(port,() => {
  console.log('app launching on port 3001')
})