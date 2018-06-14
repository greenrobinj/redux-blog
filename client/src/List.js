import React from 'react';
import { connect } from 'react-redux';

const List = ({ blogs }) => (
  <ul>
    { blogs.map( (t) => {
      return (
        <li key={t.id}>
          {t.name}
        </li>
      )
     })
    }
  </ul>
)

const mapStateToProps = (state) => {
  return { blogs: state.blogs }
}

export default connect(mapStateToProps)(List)