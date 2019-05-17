import React, {Component} from "react"
import {Link} from 'react-router-dom';

export default class Fab extends Component {
    render(){
        return (<div className="open-search">
         <Link to={"/search"}><button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button></Link>
        
      </div>)
    }
}