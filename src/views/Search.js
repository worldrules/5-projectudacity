import React, {Component} from "react"
import {Link} from "react-router-dom"
import {search} from '../BooksAPI';
export default class Search extends Component {
    constructor(props) {
      super(props);
      this.state = {
        query: ""
      }
    }
  
  
  
  handleChange = async e => {
      try {
        const query = e.target.value;
        this.setState({query})
        const results = await search(query)
        console.log(results);
        
      } catch (e) {

      }
    }


    render(){
        return (<div className="search-books">
        <div className="search-books-bar">
          <Link
          className="close-search" to={"/"} >Close
          
          </Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"
            onChange={this.handleChange}
            value={this.state.query}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>)
    }
}