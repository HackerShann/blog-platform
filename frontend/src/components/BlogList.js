import React from 'react';
import PostItem from './PostItem';

function BlogList({ posts, onEdit, onDelete }) {
  if (posts.length === 0) {
    return (
      <div className="no-posts">
        <h2>No posts yet!</h2>
        <p>Click "Create New Post" to write your first blog post.</p>
      </div>
    );
  }

  return (
    <div className="blog-list">
      <h2>All Posts ({posts.length})</h2>
      <div className="posts-container">
        {posts.map(post => (
          <PostItem 
            key={post.id}
            post={post}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default BlogList;
