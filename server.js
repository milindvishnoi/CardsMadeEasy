'use strict';
const log = console.log
log('Express server')

const express = require('express')
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/pub')))

app.get('/', (req, res) => {
	//sending some HTML
	res.sendFile(path.join(__dirname, './pub/examples.html'))
})

const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`Listening on port ${port}...`)
})