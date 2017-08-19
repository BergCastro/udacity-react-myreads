import React from 'react'
import { Route } from 'react-router-dom'
import MyReadsBooks from './MyReadsBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  


  render() {
   console.log(BooksAPI.getAll())
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <MyReadsBooks />
        )} />
        <Route exact path='/search' render={() => (
          <div className="search-books">
            <SearchBooks />
          </div>

        )} />
      </div>
    )

  }
}

export default BooksApp
