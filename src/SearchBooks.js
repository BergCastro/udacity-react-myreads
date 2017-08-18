import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import InputSearch from './InputSearch'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {



  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
    if (query !== '') {
      
      BooksAPI.search(query, 12).then((books) => {
        this.setState({ query: query.trim(), books: books })
      })
    } else {
      this.setState({ query: '', books: [] })
    }

  }

  clearQuery = () => {
    this.setState({ query: '' })
  }

  

  render() {
    const { query } = this.state
    const books = this.state.books

    let showBooks
    if (query !=='' && books.length >= 1 ) {
      const match = new RegExp(escapeRegExp(query), 'i')
      console.log('query: ' + query)
      console.log('valor de matc: ' + match)
      showBooks = books.filter((book) => match.test(book.title+' '+book.authors))
      
      console.log(showBooks)
      showBooks.sort(sortBy('title'))
    } else {
      showBooks = books
    }


    return (
      <div className="search-books">

        <InputSearch updateQuery={this.updateQuery} query={this.state.query} />

        <div className="search-books-results">
          {books.length >= 1 ? (
          <ListBooks books={showBooks} />)
          :(<h4>Nenhum resultado encontrado</h4>) 
          }
        </div>

      </div>
    )
  }
}

export default SearchBooks