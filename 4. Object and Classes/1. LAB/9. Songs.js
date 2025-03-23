function songs (input) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];
    let n = input.shift();
    let type = input.pop();

    for (let i = 0; i < n; i++) {
        let [type, name, time] = input[i].split('_');
        let song = new Song(type, name, time);
        songs.push(song);
    }

    if (type === 'all') {
        songs.forEach((song) => console.log(song.name));
    } else {
        let filtered = songs.filter((song) => song.type === type);
        filtered.forEach((song) => console.log(song.name));
    }
}