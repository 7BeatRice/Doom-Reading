const searchBooks = async() => {
    const response = await fetch('/books')
    const data = await response.json()

    const searchSuggest = document.getElementById("suggestionBox");


        // function that adds all the book name from the book database to the page
        function addNameToBox(books) {

            // loop over each item in the data
            for (let i=0; i < books.length; i++){
                const li = document.createElement("li");
                li.innerHTML = books[i].title;
                searchSuggest.append(li);
            }
        }
        addNameToBox(data);
    
    const searchBar = document.getElementById("searchBar")
    //display suggestions if they match input
    // Filter list based on user input
    searchBar.addEventListener("input", () => {
        const search = searchBar.value.toLowerCase();
        const listItems = suggestionBox.querySelectorAll("li");

        listItems.forEach(li => {
            const text = li.textContent.toLowerCase();
            li.style.display = text.includes(search) ? "block" : "none"; 
        });
    })

    const searchItems = suggestionBox.querySelectorAll("li");
    searchItems.forEach(li => {
    li.addEventListener("click", function () {
        const bookTitleSearched = li.textContent;

        const book =data.find(book => book.title === bookTitleSearched)
        window.location.href = `http://localhost:5173/books/${book.id}` 

        console.warn("No matching game card found for:", bookTitleSearched);
    });
})

}

searchBooks()