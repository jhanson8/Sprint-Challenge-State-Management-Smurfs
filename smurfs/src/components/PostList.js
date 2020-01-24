import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import { deletePost } from '../actions';




function PostList({ posts }) {
  if(!posts.length) {
    return (
      <div>
        No Posts
      </div>
    )
  }
  return (
    <div>
      {posts.map(post => {
        return (
          <Post post={ post }  key={ post._id } />
        );
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deletePost(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
