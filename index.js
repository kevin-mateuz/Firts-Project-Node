const express = require('express')
const morgan = require('morgan')
const cors= require('cors')
const bodyParser = require('body-Parser')
const order =[]
const routes = require('./config/routes')


const port = 3000
const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended:false}))
app.use(express.json())
app.use(cors())
app.use(routes)



app.listen(port,() => {
    console.log(`🚀Server started on port ${port} `)
})