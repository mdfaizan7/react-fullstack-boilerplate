import express from 'express'
import * as path from 'path'

const app = express()
const port = process.env.PORT || 3000

const DIST_DIR = path.join(__dirname, '../dist')
const HTML_FILE = path.join(DIST_DIR, 'index.html')

app.use(express.static(DIST_DIR))

app.get('/', (req, res) => {
    res.sendFile(HTML_FILE)
})

app.listen(port, () => {
    console.log("App is running on port:", port)
})
