const bodyParser = require('body-parser')
const express = require('express')

const routes = require('./routes/routes')

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/private/stonktrader', routes)

app.listen(port, async () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
