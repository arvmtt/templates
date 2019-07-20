'use strict'

/** Imports */
const http = require('http')

/** Environment variables */
const port = process.env.SERVER_PORT || 3000

/** HTTP Server */
try {
  http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('Hello World!')
    res.end()
  }).listen(port)
  console.log('\u001b[34m', `~> HTTP server listening on port: ${port}`)
} catch (error) {
  console.log('\u001b[31m', error)
  process.exit(1)
}

/** Error handling */
process.on('unhandledRejection', error => {
  console.log(error)
  process.exit(1)
})