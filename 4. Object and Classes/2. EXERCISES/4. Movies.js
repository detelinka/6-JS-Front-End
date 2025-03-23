function movies(arr) {
    let movies = [];

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let movie = {};

        if (current.includes('addMovie')) {
            let name = current.split('addMovie ')[1];
            movie.name = name;
            movies.push(movie);
            
        } else if (current.includes('directedBy')) {
            let [name, director] = current.split(' directedBy ');
            movies.forEach((movie) => {
                if (movie.name === name) {
                    movie.director = director;
                }
            });
        } else if (current.includes('onDate')) {
            let [name, date] = current.split(' onDate ');
            movies.forEach((movie) => {
                if (movie.name === name) {
                    movie.date = date;
                }
            });
        }
    }

    movies.forEach((movie) => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    });
}