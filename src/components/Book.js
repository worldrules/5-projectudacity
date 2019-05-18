import React, {Component} from "react"
import {update} from "../BooksAPI"


export default class Book extends Component {
  handleChange = async e => {
    e.persist()
    try {
      const book = this.props;
      const shelf = e.target.value;
      const result = await update(book,shelf);
      this.props.moveBook(book,shelf,result);

    } catch(e) {
      console.log(e);
      
    }
  }; 
     
    render(){


        return (<li>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, 
                height: 193, 
                backgroundImage:`url(${this.props.imageLinks ? this.props.imageLinks.thumbnail : ""})` 
                }}
                />
                <div className="book-shelf-changer">
                  <select onChange={this.handleChange} value={this.props.shelf}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{this.props.title}</div>
              <div className="book-authors">{this.props.authors ? this.props.authors[0] : "No Author" }</div>
            </div>
          </li>)
    }
}
