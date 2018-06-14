

const blogs = (state = [], action) => {
  switch(action.type) {
    case 'BOLGS':
      return action.blogs
    case 'ADD_BLOGS':
      return [action.blog, ...state];
    default:
      return state
  }
}

export default blogs