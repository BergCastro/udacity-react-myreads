import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import EstanteBook from './EstanteBook'

class MyReadsBooks extends Component {

  render() {
    const { books , onAtualizaBooks} = this.props
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
              <EstanteBook key={shelf.param} shelf={shelf} books={books} onAtualizaBooks={onAtualizaBooks} />
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