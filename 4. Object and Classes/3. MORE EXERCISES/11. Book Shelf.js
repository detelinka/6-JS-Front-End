function bookshelf(input){
    let shelf = {};
    for (const line of input) {
        if(line.includes('->')){
            let [id, genre] = line.split(' -> ');
            if(!shelf.hasOwnProperty(id)){
                shelf[id] = {genre, books: []};
            }
        }else{
            let [title, bookInfo] = line.split(': ');
            let [author, genre] = bookInfo.split(', ');
            for (const key in shelf) {
                if(shelf[key].genre === genre){
                    shelf[key].books.push({title, author});
                }
            }
        }
    }
    let sortedShelf = Object.entries(shelf).sort((a, b) => b[1].books.length - a[1].books.length);
    for (const [id, data] of sortedShelf) {
        console.log(`${id} ${data.genre}: ${data.books.length}`);
        let sortedBooks = data.books.sort((a, b) => a.title.localeCompare(b.title));
        for (const book of sortedBooks) {
            console.log(`--> ${book.title}: ${book.author}`);
        }
    }
}