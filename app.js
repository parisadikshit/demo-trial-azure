const express = require('express')

const app = express()

app.get('/', (req,res) => {
    res.send("Hello world!")
})

app.listen(3000, () => {
    console.log("My REST API is running at port 3000")
})