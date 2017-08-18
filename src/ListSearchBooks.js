import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'


class ListSearchBooks extends Component {


  render() {
    console.log('Renderizou')
    const { books } = this.props
    //console.log(books)

    return (
      <div className="search-books-results">
        {books.length >= 1 ? (
          <ol className="books-grid">

            {books.map((book) => (
              <li key={book.id}>
                <Book book={book} />
              </li>
            ))}

          </ol>
        ) : (<h4>Nenhum Resultado Encontrado</h4>)}
      </div>

    )
  }
}

export default ListSearchBooks