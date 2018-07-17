// constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}
// getSummary
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};
// getAge
Book.prototype.getAge = function () {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
};
// revise / change year
Book.prototype.revise = function (newYear) {
  this.year = newYear;
  this.revised = true;
};

// instatiate an object
const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane Doe', '2016');
console.log(book1);
console.log(book2);
console.log(book1.getSummary());
console.log(book1.getAge());

book1.revise('2017');
console.log(book1.getAge());
console.log(book1);
