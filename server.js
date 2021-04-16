'use strict';
const log = console.log
log('Express server')

const express = require('express')
const app = express();
const path = require('path');

var md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true
});

app.use(express.static(path.join(__dirname, '/pub')))

app.get('/', (req, res) => {
	//sending some HTML
	res.sendFile(path.join(__dirname, './pub/pages/home.html'))
})

app.get('/examples', (req, res) => {
	//sending some HTML
	res.sendFile(path.join(__dirname, './pub/pages/examples.html'))
})

app.get('/getting-started', (req, res) => {
	//sending some HTML
	res.sendFile(path.join(__dirname, './pub/docs/getting-started.html'))
})

app.get('/docs', (req, res) => {
	//sending some HTML
	res.sendFile(path.join(__dirname, './pub/docs/docs.html'))
})

const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`Listening on port ${port}...`)
})