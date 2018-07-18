// Object of protos
const bookProtos = {
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
  getAge() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  },
};

// create object
const book1 = Object.create(bookProtos);
book1.title = 'Book One';
book1.author = 'John Doe';
book1.year = '2013';

// other way
const book2 = Object.create(bookProtos, {
  title: { value: 'Book Two' },
  author: { value: 'Jane Doe' },
  year: { value: '2016' },
});

console.log(book1.getSummary());
console.log(book2.getSummary());
