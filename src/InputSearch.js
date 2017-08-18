import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class InputSearch extends Component {
 
    render() {
        const {updateQuery, query} = this.props
        return (
            <div className="search-books-bar">
                <Link to='/' className='close-search'></Link>
                <div className="search-books-input-wrapper">

                    <input type="text" placeholder="Search by title or author"
                        value={query}
                        onChange={(event) => updateQuery(event.target.value)} />

                </div>
            </div>


        )
    }
}

export default InputSearch