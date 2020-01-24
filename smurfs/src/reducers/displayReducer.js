export const displayReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POST':
       return action.posts;
  
    default:
      return state;
  }
}
