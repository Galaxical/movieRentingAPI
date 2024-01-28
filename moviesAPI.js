class Movie { //first class "movie"
  constructor(title, genre, stock) {
    this.title = title;
    this.genre = genre;
    this.stock = stock;
  }

  //rent a movie method
  rentMovie() {
    if (this.stock > 0) {
      this.stock--;
      console.log(`${this.title} has been rented. Remaining stock: ${this.stock}`);
    } else {
      console.log(`${this.title} is out of stock.`);
    }
  }

}

//class customer
class Customer {
  constructor(name) {
    this.name = name;
    this.rentedMovies = [];
  }

   rentMovie(movie) {
    if (movie.stock > 0) {
      this.rentedMovies.push(movie.title);
      movie.rentMovie();
      console.log(`${this.name} has rented ${movie.title}.`);
    } else {
      console.log(`${movie.title} is out of stock.`);
    }
  }

   returnMovie(movie) {
    const index = this.rentedMovies.indexOf(movie.title);
    if (index !== -1) {
      this.rentedMovies.splice(index, 1);
      movie.returnMovie();
      console.log(`${this.name} has returned ${movie.title}.`);
    } else {
      console.log(`${this.name} did not rent ${movie.title}.`);
    }
  }
}


const movie1 = new Movie("Inception", "Sci-Fi", 5);
const movie2 = new Movie("Peaky Blinders", "Crime", 3);

const customer1 = new Customer ("Alice");
const customer2 = new Customer ("John");
