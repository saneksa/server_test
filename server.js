const express = require('express')
const app = express()
const port = 4000
const data = require('./document.json')
var cors = require('cors')

app.use(cors())
app.get('/data', function(request, response) {
   return response.send(data)
})

app.listen(port, function(err) {
    if (err) {
        return console.log('something bad happened', err)
    }
    return console.log(`server is listening on ${port}`)
})