const renderBooks = async () => {
    const response = await fetch('/books')
    const data = await response.json()
    const mainContent = document.getElementById('main-content')
   
    if (data){
        html.setAttribute('data-theme' ,'dark')
        console.log("in data")
        data.map(book => {
            const card = document.createElement('article')
            card.className = 'card'
            const bottomContainer = document.createElement('div')
            bottomContainer.className = 'bottom-container'
            const topContainer = document.createElement('div')
            topContainer.className = 'top-container'
            topContainer.style.backgroundImage = `url(${book.image})`
            card.classList.add('cardLightShadow')

           

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
            link.classList.add('buttonDark')
            bottomContainer.appendChild(link)


             const inputBut = document.getElementById("inputBut")

            inputBut.addEventListener('click', function handleClick(event){
                if (inputBut.checked){
                    card.classList.remove('cardLightShadow')
                    card.classList.add('cardDarkShadow')
                    link.classList.remove('buttonDark')
                    link.classList.add('buttonLight')

                }
                else{
                   card.classList.remove('cardDarkShadow')
                    card.classList.add('cardLightShadow')
                    link.classList.remove('buttonLight')
                    link.classList.add('buttonDark')
                

                }
            })
                      

            card.appendChild(topContainer)
            card.appendChild(bottomContainer)
            mainContent.appendChild(card)                                                       

        
    

    })}
    else{
        const noBooks = document.createElement('h2')
        noBooks.textContent = "No Books Available 😞"
        mainContent.appendChild(noBooks)
    }
}

const renderBook = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())
    const response = await fetch('/books')
    const data = await response.json()
    const bookContent = document.getElementById('book-content')
    let book

    if (data){
         const html = document.querySelector('html')
         html.setAttribute('data-theme', 'dark')
        console.log(html.getAttribute('data-theme'));
        book =data.find(book => book.id === requestedID)
        if (book){
            document.getElementById('image').src = book.image
            document.getElementById('title').textContent = book.title
            document.getElementById('author').textContent = 'Author: ' + book.author
            document.getElementById('price').textContent = 'Price: ' + book.price
            document.getElementById('genre').textContent = 'Genre: ' + book.genre
            document.getElementById('fictionOrNonfiction').textContent = 'Fiction or Nonfiction: ' + book.fictionOrNonfiction
            document.getElementById('publicationDate').textContent = 'Publication Date: ' + book.publicationDate
            document.getElementById('description').textContent = book.description
            document.title = `DoomReading- ${book.title}`
            document.getElementById('buyHere').textContent = 'Buy Now'
            document.getElementById('buyHere').href = book.buyHere


        }
        else{
        const noBooks = document.createElement('h2')
        noBooks.textContent = "No Books Available 😞"
        bookContent.appendChild(noBooks)

        }
    }

}

const displayBook = async () => {
    const urlArray = window.location.href.split('/')
    console.log(urlArray)
    const requestedUrl= urlArray.pop()
    console.log("requested url: " + requestedUrl)
    const bookUrl = urlArray.pop()
    const response = await fetch('/books')
    const data = await response.json()
    const bookIds = data.map(item => item.id)
    console.log("bookIds: " + bookIds)

    if (!requestedUrl){
        renderBooks()
    }
    else if (bookUrl == 'books' && bookIds.includes(Number(requestedUrl))) {
        renderBook()
    }
    else{
        window.location.href = '../404.html'
    }

}
displayBook()
