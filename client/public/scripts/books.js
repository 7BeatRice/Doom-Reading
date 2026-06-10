const renderBooks = async () => {
    console.log("in in async")
    const response = await fetch('/books')
    const data = await response.json()
    const mainContent = document.getElementById('main-content')
    if (data){
        console.log("in data")
        data.map(book => {
            const card = document.createElement('div')
            card.className = 'card'
            const bottomContainer = document.createElement('div')
            bottomContainer.className = 'bottom-container'
            const topContainer = document.createElement('div')
            topContainer.className = 'top-container'
            topContainer.style.backgroundImage = `url(${book.image})`

            const title = document.createElement('h3')
            title.textContent= book.title
            bottomContainer.appendChild(title)

            const author = document.createElement('p')
            author.textContent = 'Author: ' + book.author
            bottomContainer.appendChild(author)

            const pricePoint = document.createElement('p')
            pricePoint.textContent = 'Price: ' + book.price
            bottomContainer.appendChild(pricePoint)

            const genre = document.createElement('p')
            genre.textContent = 'Genre: ' + book.genre
            bottomContainer.appendChild(genre)

            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.setAttribute('role', 'button')
            link.href = `/books/${book.id}`
            bottomContainer.appendChild(link)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer)
            mainContent.appendChild(card)

        })

    }
    else{
        const noBooks = document.createElement('h2')
        noBooks.textContent = "No Books Available 😞"
        mainContent.appendChild(noBooks)
    }
}
renderBooks()