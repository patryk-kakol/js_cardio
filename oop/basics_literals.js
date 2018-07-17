const s1 = 'Hello';
console.log(`${s1}: ${typeof s1}`);

const s2 = new String('Hello');
// linter screams to not use String as a constructor
console.log(`${s2}: ${typeof s2}`);

const book1 = {
  title: 'Book One',
  author: 'John Doe',
  year: '2013',
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};


const book2 = {
  title: 'Book Two',
  author: 'Jane Doe',
  year: '2016',
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

console.log(book1.getSummary());
console.log(Object.keys(book2));
console.log(Object.values(book2));
