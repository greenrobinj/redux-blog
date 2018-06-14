import React from 'react'
import {connect} from 'react-redux'
import {getBlogs} from '../actions/blogs'


class Blogs extends React.Component {
  // componentDidMount() {
  //   this.props.dispatch(getBlogs())
  // }


  render() {
    return(
      <div>
        <h1> BLOGS </h1>
      </div>
    )
  }
}

export default connect() (Blogs);