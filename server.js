'use strict';
const log = console.log
log('Express server')

const express = require('express')
const app = express();
app.use(express.static(__dirname))

const path = require('path');

app.get('/', (req, res) => {
	//sending some HTML
	res.sendFile(path.join(__dirname, './example.html'))
})

const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`Listening on port ${port}...`)
})