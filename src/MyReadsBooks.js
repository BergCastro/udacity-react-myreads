import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import EstanteBook from './EstanteBook'
import * as BooksAPI from './BooksAPI'


class MyReadsBooks extends Component {
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
    
    const shelfs = [
      { title: 'Currently Reading', param: 'currentlyReading' },
      { title: 'Want To Read', param: 'wantToRead' },
      { title: 'Read', param: 'read' }
    ]
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelfs.map((shelf) => (
              <EstanteBook key={shelf.param} books={this.state.books} shelf={shelf} onAtualizaBooks={this.atualizaBooks} />
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add book</Link>
        </div>
      </div>
    )
  }
}

export default MyReadsBooks