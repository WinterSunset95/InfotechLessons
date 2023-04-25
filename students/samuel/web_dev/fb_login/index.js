// Importing the required modules
const express = require('express')
const fs = require('fs')
const cors = require('cors')
const path = require('path')

// Initialize express
const app = express()
// Declare the port.. other examples are 3000, 8080, 4444 etc
const PORT = 5050

// Cors is needed for HTTP POST method to work properly
app.use(cors())

// Serve the 'public' directory
app.use('/', express.static(path.join(__dirname, 'public')))

app.post('/post', (req,res) => {
    let uname = req.body ? req.body.username : null
    let upass = req.body ? req.body.userpassword : null
    let data = {
        name: uname,
        pass: upass
    }
    console.log(data)
})

app.get('/api', (req,res) => {
    let uname = req.query.username
    let upass = req.query.userpassword
    let data = {
        name: uname,
        pass: upass
    }
    //fs.writeFile('results.json', JSON.stringify({name: uname, pass: upass}), 'utf8', () => console.log('done'))
})

app.listen(PORT, (error) => {
    if(!error) {
        console.log('Server is running')
    } else {
        console.log("Server could not start at port: " + PORT)
    }
})