var express = require('express')
var app = express()
var port = 4000
var data = require('./document.json')
var cors = require('cors')

app.use(cors())
app.get('/data', function(request, response) {
   return response.send(data)
})

app.listen(port, function(err) {
    if (err) {
        return console.log('something bad happened', err)
    }
    return console.log('server is listening on ', port)
})