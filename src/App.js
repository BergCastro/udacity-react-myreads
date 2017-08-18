import React from 'react'
import { Route } from 'react-router-dom'
import MyReadsBooks from './MyReadsBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {

    books: []

  }


  componentWillMount() {
    BooksAPI.getAll().then((books) => {
     
      this.setState({ books })
      
    })
  }



  atualizaBooks = (book, shelf) => {
    BooksAPI.update(book, shelf).then((shelf) => {
      BooksAPI.getAll().then((books) => {
        this.setState({ books })
      })
    })

  }


  render() {
   console.log(BooksAPI.getAll())
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <MyReadsBooks books={this.state.books} onAtualizaBooks={this.atualizaBooks} />
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
