const axios = require('axios');

class BooksController {
    constructor(booksService) {
        this.booksService = booksService;
    }
}

module.exports = new BooksController;