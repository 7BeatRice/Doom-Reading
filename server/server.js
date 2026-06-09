import express from 'express'
import booksRouter from './routes/books.js'
const app = express()

app.use('./public', express.static('./public'))
app.use('/scripts', express.static('./public/scripts'))

//route for root url
app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Doom-Reading API</h1>')
}
)

//starts a server on a port
const PORT = process.env.PORT || 3001
app.listen(PORT, () =>{
    console.log(`Server lisitening on http://localhost:${PORT}`)
})

app.use('/books', booksRouter)