import express from 'express'

const app = express()

const port = process.env.PORT || 3000

app.get('/api/greet', (req, res) => {
  res.status(200).json({ greet: 'React' })
})

app.listen(port, () => {
  console.log('App is running on port:', port)
})
