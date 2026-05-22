const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send(`
    <h1>E-Commerce Store</h1>
    <ul>
      <li>Laptop - $1200</li>
      <li>Phone - $800</li>
    </ul>
  `)
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})