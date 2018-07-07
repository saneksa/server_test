var express = require('express')
var app = express()
var port = process.env.PORT || 4000
var data = require('./document.json')

app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();
});

app.get('/', function(request, response) {
   return response.json({dsf: 'dffdfd'})
})

app.listen(port, function(err) {
    if (err) {
        return console.log('something bad happened', err)
    }
    return console.log('server is listening on ', port)
})