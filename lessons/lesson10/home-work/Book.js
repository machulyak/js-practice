import chalk from 'chalk';

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new TypeError('Title must be a non-empty string.');
    }
    this._title = value.trim();
  }

  get author() {
    return this._author;
  }

  set author(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new TypeError('Author must be a non-empty string.');
    }
    this._author = value.trim();
  }

  get year() {
    return this._year;
  }

  set year(value) {
    if (!Number.isInteger(value) || value <= 0) {
      throw new TypeError('Year must be a positive integer.');
    }
    this._year = value;
  }

  static findOldestBook(books) {
    if (!Array.isArray(books) || books.length === 0) {
      throw new TypeError('Books must be a non-empty array.');
    }
    if (!books.every((book) => book instanceof Book)) {
      throw new TypeError(
        'Every item must be an instance of Book or its subclass.',
      );
    }

    return books.reduce((oldestBook, book) =>
      book.year < oldestBook.year ? book : oldestBook,
    );
  }

  printInfo(number) {
    console.log(
      `${chalk.green(`${number}. Title:`)} ${chalk.yellow(this.title)}, ` +
        `${chalk.green('Author:')} ${chalk.yellow(this.author)}, ` +
        `${chalk.green('Year:')} ${chalk.yellow(this.year)}`,
    );
  }
}

export default Book;

const books = [
  new Book('Lisova Pisnia', 'Lesia Ukrainka', 1911),
  new Book('Zakhar Berkut', 'Ivan Franko', 1883),
  new Book('Toreadory z Vasiukivky', 'Vsevolod Nestaiko', 1964),
];

console.log(chalk.redBright('//////// Book information ////////'));
books.forEach((book, index) => {
  const text = `Book number ${index + 1}`;
  book.printInfo(text);
});
