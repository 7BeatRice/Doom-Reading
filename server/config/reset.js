//creates a database table for the books, and populates each entry with our data
import {pool} from './database.js'
import './dotenv.js'
import giftData from '../data/books.js'
import bookData from '../data/books.js'

const createBooksTable = async() => {
    const createTableQuery = `
    DROP TABLE IF EXISTS books;

    CREATE TABLE IF NOT EXISTS books(
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        author VARCHAR(255) NOT NULL,
        price VARCHAR(10) NOT NULL,
        genre VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        publicationDate VARCHAR(255) NOT NULL,
        buyHere text NOT NULL,
        fictionOrNonfiction VARCHAR(10) NOT NULL
    )
`
    try {
        const response = await pool.query(createTableQuery)
        console.log("Books table created sucessfully!")
    }
    catch(err){
        console.error("Error creating books table: ", err)
    }


}

const seedBookTable = async() => {
    await createBooksTable()
    bookData.forEach((book) => {
        const insertQuery = {
            text : 'INSERT INTO books (title, author, price, genre, image, description, publicationDate, buyHere, fictionOrNonfiction) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)'
        }
        const values = [
            book.title,
            book.author,
            book.price,
            book.genre,
            book.image,
            book.description,
            book.publicationDate,
            book.buyHere,
            book.fictionOrNonfiction
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err){
                console.error("Error inserting book: ", err)
                return
            }
            console.log(`${book.title} added successfully!`)
            
         
    })

        
    }

    )
}

seedBookTable()