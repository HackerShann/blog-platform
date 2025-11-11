import React from 'react';

function PostItem({ post, onEdit, onDelete }) {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="post-item">
      <div className="post-header">
        <h3>{post.title}</h3>
        <div className="post-actions">
          <button className="edit-button" onClick={() => onEdit(post)}>
            ✏️ Edit
          </button>
          <button className="delete-button" onClick={() => onDelete(post.id)}>
            🗑️ Delete
          </button>
        </div>
      </div>
      
      <div className="post-meta">
        <span className="author">By {post.author}</span>
        <span className="date">{formatDate(post.createdAt)}</span>
      </div>
      
      <div className="post-content">
        <p>{post.content}</p>
      </div>
      
      {post.updatedAt && (
        <div className="post-updated">
          <small>Last updated: {formatDate(post.updatedAt)}</small>
        </div>
      )}
    </div>
  );
}

export default PostItem;
