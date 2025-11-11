import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import BlogList from './components/BlogList';
import CreatePost from './components/CreatePost';

function App() {
  const [posts, setPosts] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingPost, setEditingPost] = useState(null);

  // Fetch all posts when component loads
  useEffect(() => {
    fetchPosts();
  }, []);

  // Function to get all posts from backend
  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
      alert('Failed to fetch posts. Make sure the backend is running!');
    }
  };

  // Function to create a new post
  const createPost = async (postData) => {
    try {
      const response = await axios.post('http://localhost:5000/api/posts', postData);
      setPosts([response.data, ...posts]); // Add new post to the beginning
      setShowCreateForm(false);
      alert('Post created successfully!');
    } catch (error) {
      console.error('Error creating post:', error);
      alert('Failed to create post');
    }
  };

  // Function to update an existing post
  const updatePost = async (id, postData) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/posts/${id}`, postData);
      setPosts(posts.map(post => post.id === id ? response.data : post));
      setEditingPost(null);
      alert('Post updated successfully!');
    } catch (error) {
      console.error('Error updating post:', error);
      alert('Failed to update post');
    }
  };

  // Function to delete a post
  const deletePost = async (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await axios.delete(`http://localhost:5000/api/posts/${id}`);
        setPosts(posts.filter(post => post.id !== id));
        alert('Post deleted successfully!');
      } catch (error) {
        console.error('Error deleting post:', error);
        alert('Failed to delete post');
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>📝 My Blog Platform</h1>
        <p>Full-stack blog built with Node.js & React</p>
      </header>

      <main className="App-main">
        <div className="button-container">
          <button 
            className="create-button"
            onClick={() => {
              setShowCreateForm(!showCreateForm);
              setEditingPost(null);
            }}
          >
            {showCreateForm ? '❌ Cancel' : '➕ Create New Post'}
          </button>
        </div>

        {showCreateForm && (
          <CreatePost 
            onSubmit={createPost}
            onCancel={() => setShowCreateForm(false)}
          />
        )}

        {editingPost && (
          <CreatePost 
            post={editingPost}
            onSubmit={(data) => updatePost(editingPost.id, data)}
            onCancel={() => setEditingPost(null)}
            isEditing={true}
          />
        )}

        <BlogList 
          posts={posts}
          onEdit={setEditingPost}
          onDelete={deletePost}
        />
      </main>

      <footer className="App-footer">
        <p>Built with ❤️ using Node.js, Express, and React</p>
      </footer>
    </div>
  );
}

export default App;
