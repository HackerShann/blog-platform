// Import required packages
const express = require('express');
const cors = require('cors');

// Create Express app
const app = express();
const PORT = 5000;

// Middleware - these help process requests
app.use(cors()); // Allow frontend to connect
app.use(express.json()); // Parse JSON data from requests

// Temporary storage for blog posts (we'll use a database later)
let blogPosts = [
  {
    id: 1,
    title: "My First Blog Post",
    content: "This is the content of my first blog post!",
    author: "John Doe",
    createdAt: new Date().toISOString()
  }
];

// Counter for generating new IDs
let nextId = 2;

// ===== API ROUTES (ENDPOINTS) =====

// GET all blog posts
app.get('/api/posts', (req, res) => {
  res.json(blogPosts);
});

// GET single blog post by ID
app.get('/api/posts/:id', (req, res) => {
  const post = blogPosts.find(p => p.id === parseInt(req.params.id));
  
  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }
  
  res.json(post);
});

// POST - Create new blog post
app.post('/api/posts', (req, res) => {
  const { title, content, author } = req.body;
  
  // Validate input
  if (!title || !content || !author) {
    return res.status(400).json({ message: 'Title, content, and author are required' });
  }
  
  const newPost = {
    id: nextId++,
    title,
    content,
    author,
    createdAt: new Date().toISOString()
  };
  
  blogPosts.push(newPost);
  res.status(201).json(newPost);
});

// PUT - Update existing blog post
app.put('/api/posts/:id', (req, res) => {
  const { title, content, author } = req.body;
  const post = blogPosts.find(p => p.id === parseInt(req.params.id));
  
  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }
  
  // Update post fields
  if (title) post.title = title;
  if (content) post.content = content;
  if (author) post.author = author;
  post.updatedAt = new Date().toISOString();
  
  res.json(post);
});

// DELETE blog post
app.delete('/api/posts/:id', (req, res) => {
  const postIndex = blogPosts.findIndex(p => p.id === parseInt(req.params.id));
  
  if (postIndex === -1) {
    return res.status(404).json({ message: 'Post not found' });
  }
  
  blogPosts.splice(postIndex, 1);
  res.json({ message: 'Post deleted successfully' });
});

// Root route - just to test server is running
app.get('/', (req, res) => {
  res.json({ message: 'Blog API is running! Use /api/posts to access blog posts.' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});