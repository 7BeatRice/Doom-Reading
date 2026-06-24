import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import bookData from '../data/books.js'
import BookController from '../controllers/books.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

//gets the book data as a json
router.get('/', (req, res) => {
  res.status(200).json(bookData)
})

//gets the indivudal book detail page 
router.get('/:bookId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../../client/public/book.html'))
})

router.get('/', BookController.getBooks)

export default router 