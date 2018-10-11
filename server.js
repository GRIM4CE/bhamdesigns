var express = require('express')
var app = express()
var path = require('path')
var history = require('connect-history-api-fallback')

app.use(history())
app.use(express.static('dist'))

app.listen(8080)
