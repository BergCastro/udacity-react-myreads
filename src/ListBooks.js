import React, { Component } from 'react'
import Book from './Book'



function ListBooks(props) {
    const { books, onAtualizaBooks } = props
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



export default ListBooks