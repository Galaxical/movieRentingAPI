class Movie {
  constructor(title, genre, stock) {
    this.title = title;
    this.genre = genre;
    this.stock = stock;
  }

  rentMovie() {
    if (this.stock > 0) {
      this.stock--;
      console.log(`${this.title} has been rented. Remaining stock: ${this.stock}`);
    } else {
      console.log(`${this.title} is out of stock.`);
    }
  }
}

const movie1 = new Movie("Inception", "Sci-Fi", 5);
const movie2 = new Movie("The Shawshank Redemption", "Drama", 3);