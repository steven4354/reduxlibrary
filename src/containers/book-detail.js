import React, {Component} from 'react'
import { connect } from 'react-redux'

class BookDetail extends Component {
  render(){
    if(!this.props.book){
      return(
        <div>Select a book to get started</div>
      )
    }

    return(
      <div>
        <h3>Details for</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
        <div><a href={this.props.book.link}>Buy it Now on Amazon</a></div>
        <div>Cover:</div>
        <div><img src={this.props.book.image}></img></div>
      </div>
    )
  }
}

function mapStateToProps(state){
  //What ever is returned here will show up as BookList's props
  return {
    book: state.activebook
  }
}

export default connect(mapStateToProps)(BookDetail)
