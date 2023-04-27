// server code
// express app
const express = require('express')
const app = express()
const fs = require("fs")
const PORT = 5000

app.use('/', express.static(__dirname + '/public'))

app.get('/api', (req, res) => {
    let query = req.query
    fs.writeFile('results.json', JSON.stringify(query), 'utf8', () => console.log('done'))
    console.log(query)
})

app.listen(PORT, (error) => {
    if(!error) {
        console.log("Server listening on port: ", PORT)
    } else {
        console.log(error)
    }
})