import React, {Component} from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return(
      <li
        key={book.title}
        className="list-group-item"
        onClick={() => {this.props.selectBook(book)}}
      >
        {book.title}
      </li>
      )
    })
  }

  render(){
    return(
      <ul className="list-group col-sm-4 fullwidth">
        {this.renderList()}
      </ul>
  )}
}

function mapStateToProps(state){
  //What ever is returned here will show up as BookList's props
  return {
    books: state.books
  }
}

function mapDispatchToProps(dispatch){
  //this will run the action object in the action creator through all the reducers
  return bindActionCreators({selectBook: selectBook}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)
