class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  set isCheckedOut(boolean) {
    this._isCheckedOut = boolean;
  }
  getAverageRating() {
    let ratingSum= this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);

    return ratingSum/this._ratings.length;
  }
  toggleCheckOutStatus() {
    return (this._isCheckedOut = !this._isCheckedOut);
  }
  addRating(value) {
    this._ratings.push(value)
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
  this._author=author
  this._pages=pages
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime, ratings) {
    super(title, ratings);
    this._director = director;
    this._runTime = runTime;
    this._isCheckedOut = false;
  }
}
class CD extends Media {
  constructor(artist, title, ratings, songs) {
    super(title, ratings);
    this.artist = artist;
    this.songs = songs;
    this._isCheckedOut = false;
  }
}

let book1 = new Book("H.K.Tolkien", "dfd", "101");
let c = (prop) => {
  console.log(prop);
};
book1.isCheckedOut = true;
book1.isCheckedOut = false;
book1.toggleCheckOutStatus();
book1.addRating(10)
book1.addRating(2)

c(book1.isCheckedOut);
c(book1.getAverageRating());
