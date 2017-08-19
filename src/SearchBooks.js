import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import PropTypes from 'prop-types'

import InputSearch from './InputSearch'
import ListBooks from './ListBooks'


class SearchBooks extends Component {



  state = {
    query: '',
    
  }

  updateQuery = (query) => {
    if (query !== '') {
<<<<<<< HEAD

      BooksAPI.search(query, 12).then((books) => {
        this.setState({ query: query.trim(), books: books })
      })
||||||| merged common ancestors
      
      BooksAPI.search(query, 12).then((books) => {
        this.setState({ query: query.trim(), books: books })
      })
=======
      this.setState({ query: ''})
      
>>>>>>> 234d1d3
    } else {
      this.setState({ query: ''})
    }

  }

  clearQuery = () => {
    this.setState({ query: '' })
  }

  

  render() {
   
    const { query } = this.state
<<<<<<< HEAD
    const books = this.state.books
    const booksShelfs = BooksAPI.getAll().then()
    console.log('booksShelfs: '+booksShelfs)
    let showBooks
    const teste = booksShelfs.map(book => (
      books.map(bookSearch => (
        showBooks.filter(showbook => bookSearch.title !== book.title)  
      ))
      
    ))
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

||||||| merged common ancestors
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

=======
  
>>>>>>> 234d1d3

    return (
      <div className="search-books">

        <InputSearch updateQuery={this.updateQuery} query={this.state.query} />

        <div className="search-books-results">
          
          <ListBooks query={this.state.query} searching={true}/>)
          
        </div>

      </div>
    )
  }
}

export default SearchBooks