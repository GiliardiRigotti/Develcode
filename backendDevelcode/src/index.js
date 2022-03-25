const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'users',
    password: '',
    port: 5432,
})


app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/user', (req, res) => {
    res.send('Hello World!')
})

app.listen('/user', (req, res) => {
    res.send('Hello World!')
})

app.post('/user', (req, res) => {
    res.send('Hello World!')
})

app.put('/user', (req, res) => {
    res.send('Hello World!')
})

app.delete('/user', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})