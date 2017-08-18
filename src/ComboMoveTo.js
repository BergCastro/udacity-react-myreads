import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class ComboMoveTo extends Component {

    //   constructor(props) {
    //   super(props);
    //   this.state = {value: 'none'};
    //
    //   this.handleChange = this.handleChange.bind(this);

    //  }
    

    handleChange(book, shelf){
        
        BooksAPI.update(book, shelf).then((shelf)=>{
            this.setState({ shelf })
        })
    }
    

    render() {
        const { book, shelf } = this.props
        
        return (
            <div className="book-shelf-changer">
                <select value={shelf} onChange={(event) => this.handleChange(book, event.target.value)}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )

    }
}

export default ComboMoveTo