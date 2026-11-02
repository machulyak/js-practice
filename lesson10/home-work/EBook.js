import chalk from 'chalk';
import Book from './Book.js';

class EBook extends Book {
    constructor(title, author, year, format = 'PDF') {
        super(title, author, year);
        this.format = format;
    }

    get format() {
        return this._format;
    }

    set format(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new TypeError('Format must be a non-empty string.');
        }
        this._format = value.trim();
    }

    static fromBook(book, format) {
        if (!(book instanceof Book)) {
            throw new TypeError('Book must be an instance of Book.');
        }

        return new EBook(book.title, book.author, book.year, format);
    }

    printInfo() {
        console.log(
            `${chalk.green(`Title:`)} ${chalk.yellow(this.title)}, ` +
            `${chalk.green('Author:')} ${chalk.yellow(this.author)}, ` +
            `${chalk.green('Year:')} ${chalk.yellow(this.year)}, ` +
            `${chalk.green('Format:')} ${chalk.yellow(this.format)}`
        );
    }
}

export default EBook;

const ebook1 = new EBook('Lisova Pisnia', 'Lesia Ukrainka', 1911, 'PDF');
const ebook2 = new EBook('Zakhar Berkut', 'Ivan Franko', 1883, 'EPUB');
const ebook3 = new EBook('Toreadory z Vasiukivky', 'Vsevolod Nestaiko', 1964);
const ebook4 = new EBook('Kobzar', 'Taras Shevchenko', 1840, 'MOBI');

console.log(chalk.redBright('//////// EBook information ////////'));
ebook1.printInfo();
ebook2.printInfo();
ebook3.printInfo();
ebook4.printInfo();

const bookToConvert = new Book('Kaidash Family', 'Ivan Nechuy-Levytsky', 1879);
const convertedEBook = EBook.fromBook(bookToConvert, 'EPUB');
const books = [
    bookToConvert,
    ebook1,
    ebook2,
    ebook3,
    ebook4
];
const oldestBook = Book.findOldestBook(books);

console.log(chalk.redBright('//////// Oldest book ////////'));
oldestBook.printInfo();

console.log(chalk.redBright('//////// Converted e-book ////////'));
convertedEBook.printInfo();
