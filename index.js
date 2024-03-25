require('dotenv').config()
const express = require('express')
const app = express()

const router = require('./routes/api')
app.use('/api/v1', router)
app.listen(3000, () => console.log('Server started and listening on port 3000'))