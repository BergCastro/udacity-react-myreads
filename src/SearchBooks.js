import React, { Component } from 'react'
import InputSearch from './InputSearch'
import ListSearchBooks from './ListSearchBooks'
import * as BooksAPI from './BooksAPI'



class SearchBooks extends Component {
  constructor(props) {
    super(props)
    this.state = { query: '' }
    
    
    this.searching = false
    
  }

  componentDidMount(){
    this.searching = true
  }


  updateQuery = (query) => {

    if (query !== '') {
     // console.log('query pesquisada: ' + query)
      this.setState({ query: query.trim() })
      this.queryUpdate = query.trim()
      this.searching = true
      //console.log('query no state: ' + this.queryUpdate)
    } else {
      this.setState({ query: '' })
    }

  }

  

  clearQuery = () => {
    this.setState({ query: '' })
  }
  atualizaBooks = (book, shelf) => {
    BooksAPI.update(book, shelf).then((shelf) =>{
      
    })

  }


  render() {
    
    
   // console.log("Atualizou pesquisa")
    return (
      <div className="search-books">

        <InputSearch updateQuery={this.updateQuery} query={this.state.query} />

        <div className="search-books-results">

          <ListSearchBooks query={this.queryUpdate} onAtualizaBooks={this.atualizaBooks} searching={this.searching} />

        </div>


      </div>
    )
  }
}

export default SearchBooks