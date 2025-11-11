import React, { useState, useEffect } from 'react';

function CreatePost({ post, onSubmit, onCancel, isEditing }) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: ''
  });

  // If editing, populate form with existing post data
  useEffect(() => {
    if (post) {
      setFormData({
        title: post.title,
        content: post.content,
        author: post.author
      });
    }
  }, [post]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.title || !formData.content || !formData.author) {
      alert('Please fill in all fields!');
      return;
    }

    onSubmit(formData);
    
    // Reset form if creating new post
    if (!isEditing) {
      setFormData({
        title: '',
        content: '',
        author: ''
      });
    }
  };

  return (
    <div className="create-post-form">
      <h2>{isEditing ? '✏️ Edit Post' : '➕ Create New Post'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter post title..."
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Your name..."
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Write your post content..."
            rows="8"
            required
          />
        </div>

        <div className="form-buttons">
          <button type="submit" className="submit-button">
            {isEditing ? '💾 Update Post' : '📝 Publish Post'}
          </button>
          <button type="button" className="cancel-button" onClick={onCancel}>
            ❌ Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
