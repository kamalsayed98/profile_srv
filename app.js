const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const data = require('./data')

 
app.get('/data', data.fetchData)
 
app.listen(process.env.PORT || 1790) 