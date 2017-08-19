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
      this.setState({ query: ''})
      
    } else {
      this.setState({ query: ''})
    }

  }

  clearQuery = () => {
    this.setState({ query: '' })
  }

  

  render() {
   
    const { query } = this.state
  

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