class StubAPI {
    constructor() {
        this.watchlistMovies = [];
    }

    add(movie) {
        this.watchlistMovies.push(movie);
    }

    getAll() {
        return this.watchlistMovies;
    }
}

export default new StubAPI();