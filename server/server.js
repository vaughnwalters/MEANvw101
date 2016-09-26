'use strict'

const express = require('express')
const mongoose = require('mongoose')

// set up database and name it meanchat
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/meanchat'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('client'))

// everything in mongoose is created in models, so we need to create a model we can grab our mesasges from
const Message = mongoose.model('message', {
  author: String,
  content: String,
})

// want the title 'MEAN 101'  to come from node
// set up a route and then when route gets hit, it sends the title

app.get('/api/title', (req, res) =>
  res.json({ title: 'MEAN Chat' })
)

// HARDCODE FIRST, THEN REPLACE WITH DYNAMIC CONTENT FROM DB
// app.get('/api/messages', (req, res) =>
//   res.json({
//     messages: [
//       {
//         author: 'John',
//         content: 'YO SUP',
//       },
//       {
//         author: 'Anonymous',
//         content: 'SUP COHORT 14',
//       }
//     ]
//   })
// )

app.get('/api/messages', (req, res, err) =>
  Message
    .find()
    .then(messages => res.json({ messages }))
    .catch(err)
)

mongoose.Promise = Promise
// make sure mongoose is connected before we listen
mongoose.connect(MONGODB_URL, () =>
  app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
)
