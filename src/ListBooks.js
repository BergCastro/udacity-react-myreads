import React, { Component } from 'react'
import Book from './Book'
import * as BooksAPI from './BooksAPI'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'


class ListBooks extends Component {
    state = {

        books: []

    }

    atualizaBooks = (book, shelf) => {
        BooksAPI.update(book, shelf).then((shelf) => {
            BooksAPI.getAll().then((books) => {
                this.setState({ books })
            })
        })

    }
    componentDidMount() {
        BooksAPI.getAll().then((books) => {

            this.setState({ books })

        })
    }
    render() {
        const { query, shelf, searching } = this.props
        let showBooks
        if (searching) {
            
            const match = new RegExp(escapeRegExp(query), 'i')
            BooksAPI.search(match, 12).then(books) => {

            }
            console.log('query: ' + query)
            console.log('showBooks: '+showBooks)
            //showBooks = showBooks.filter((book) => match.test(book.title+' '+book.authors))
        }
        else {
            console.log('entrou no else :'+shelf.param)
            showBooks = this.state.books.filter((book) => book.shelf === shelf.param)
          }
        return (

            <ol className="books-grid">
                {showBooks.map((book) => (
                    <li key={book.id}>
                        <Book book={book} onAtualizaBooks={this.atualizaBooks} />
                    </li>
                ))}

            </ol>

        )
    }
}

export default ListBooks