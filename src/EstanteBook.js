import React, { Component } from 'react'
import ListBooks from './ListBooks'


class EstanteBook extends Component {

    render() {
        const { shelf, books , onAtualizaBooks} = this.props
        const booksFiltered = books.filter((book) => book.shelf === shelf.param)
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf.title}</h2>
                <div className="bookshelf-books">
                    <ListBooks books={booksFiltered} onAtualizaBooks={onAtualizaBooks}/>
                </div>
            </div>
        )
    }
}

export default EstanteBook