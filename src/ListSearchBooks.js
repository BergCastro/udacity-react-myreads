import React, { Component } from 'react'
import Book from './Book'
import * as BooksAPI from './BooksAPI'
import escapeRegExp from 'escape-string-regexp'



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

    updateQuery = (query) => {

        this.setState({ query: '' })

    }

    render() {
        let { query, searching, onAtualizaBooks } = this.props

        //if(this.updatedBooks){
        //   searching = false
        // }
        let showBooks = []
        showBooks = this.state.books


        //console.log('searchin: '+searching)
        if (this.updatedBooks) {
            searching = false
            this.updatedBooks = false
        }
        console.log('query: ' + query)
        if (query !== '') {
            if (searching) {

                let booksMyReads = []
                let booksUnique = []
                BooksAPI.getAll().then(booksMy => {
                    booksMyReads = booksMy.filter((book) => match.test(book.title))
                })

                let booksSearchs = []
                const match = new RegExp(escapeRegExp(query), 'i')
                BooksAPI.search(query, 12).then(books => {
                    booksSearchs = books
                    if (booksSearchs.length >= 1) {
                        for (const bookS of booksSearchs) {

                            for (const bookM of booksMyReads) {
                                if (bookS.title === bookM.title) {
                                    booksSearchs.splice(booksSearchs.indexOf(bookS), 1)
                                }
                            }

                        }
                        booksUnique = [...booksSearchs, ...booksMyReads]
                    }
                    this.updatedBooks = true

                    this.setState({ books: booksUnique })


                    // console.log('componentDentrorender: ' + this.state.books)
                    console.log('booksMyReads: ' + booksMyReads)
                    console.log('booksSearch: ' + booksSearchs)

                })
            }
        } else {
            showBooks = []
        }


        console.log('showbooks ' + showBooks)
        if (showBooks.length >= 1) {
            showBooks = showBooks.filter(book => book.imageLinks)
        }
        return (

            <ol className="books-grid">

                {showBooks.length >= 1 ? showBooks.map((book, index) => (
                    <li key={book.id}>
                        <Book book={book} onAtualizaBooks={onAtualizaBooks} />
                    </li>

                )) : (<h4>Nenhum resultado encontrado</h4>)

                }


            </ol>

        )
    }
}

export default ListSearchBooks