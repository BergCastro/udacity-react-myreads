import React, { Component } from 'react'
import Book from './Book'
import * as BooksAPI from './BooksAPI'



class ListSearchBooks extends Component {

    constructor(props) {
        super(props)
        this.state = { books: {} }
        this.updatedBooks = false

    }

    updateList = (query) => {
        let results
        results = BooksAPI.search(query, 12).then()
        return results

    }
    atualizabooks = (query) => {
        try {
            BooksAPI.search(query, 20).then((books) => {
                this.books = books
            })
        } catch (error) {
            console.log('Ocorreu um erro')
        }


    }
    atualizabooks2 = (query) => {
        try {
            BooksAPI.getAll().then() 
            BooksAPI.search(query, 20).then((books) => {
                this.books = books
            })
        } catch (error) {
            console.log('Ocorreu um erro')
        }


    }
    updateQuery = (query) => {

        this.setState({ query: '' })

    }

    render() {
        let { query, searching, onAtualizaBooks } = this.props

        //if(this.updatedBooks){
        //   searching = false
        // }
        let showBooks = this.state.books


        //console.log('searchin: '+searching)
        if (this.updatedBooks) {
            searching = false
            this.updatedBooks = false
        }
        if (searching) {
            BooksAPI.search(query, 12).then(books => {

                this.updatedBooks = true
                this.setState({ books })


                // console.log('componentDentrorender: ' + this.state.books)
            })
        }


        // console.log('showbooks '+showBooks)
        if (showBooks >= 1) {
            showBooks = showBooks.filter(book => book.imageLinks)
        }
        return (

            <ol className="books-grid">

                {showBooks.length >= 1 ? showBooks.map((book) => (
                    <li key={book.id}>
                        <Book book={book} onAtualizaBooks={onAtualizaBooks} />
                    </li>

                )) : (<h4>Nenhum Resultado Encontrado</h4>)

                }


            </ol>

        )
    }
}

export default ListSearchBooks