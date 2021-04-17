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

// To serve the static files
app.use(express.static(path.join(__dirname, '/pub')))

const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`Listening on port ${port}...`)
})