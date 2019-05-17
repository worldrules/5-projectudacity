import React, {Component} from "react"
import Shelf from '../components/Shelf'
import Fab from '../components/Fab'
import {getAll} from '../BooksAPI'

export default class Home extends Component {
    
    async componentDidMount() {
        
        try {
            const books = await getAll();

            this.props.addBooks(books);

        } catch(e) {
            console.log(e)
        }
    }
    
    
    render(){
        return ( <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          
            <Shelf title="Currently Reading" books={this.props.currentlyReading} moveBook={this.props.moveBook} />             
            <Shelf title="Want to Read" books={this.props.wantToRead} moveBook={this.props.moveBook} />              
            <Shelf title="Read" books={this.props.read}/>             
          
        </div>
        <Fab />
      </div>)
    }
}