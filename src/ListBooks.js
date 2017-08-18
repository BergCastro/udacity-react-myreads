import React, { Component } from 'react'
import Book from './Book'


class ListBooks extends Component {

    render() {
        const { books, onAtualizaBooks } = this.props

        return (

            <ol className="books-grid">
                {books.map((book) => (
                    <li key={book.id}>
                        <Book book={book} onAtualizaBooks={onAtualizaBooks} />
                    </li>
                ))}

            </ol>

        )
    }
}

export default ListBooks