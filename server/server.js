'use strict'

const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.use(express.static('client'))

// want the title 'MEAN 101'  to come from node
// set up a route and then when route gets hit, it sends the title


app.get('/api/title', (req, res) =>
  res.send({ title: 'MEAN 101 from Node' })
)

app.listen(port, () => console.log(`Listening on port: ${port}`))