# 📝 Blog Platform

A full-stack blog application built with Node.js and React, demonstrating modern web development practices and RESTful API design.

## 🚀 Features

- **Create, Read, Update, Delete (CRUD)** blog posts
- RESTful API architecture
- Clean and intuitive user interface
- Responsive design
- Real-time data management

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for building APIs
- **CORS** - Cross-Origin Resource Sharing middleware

### Frontend (Coming Soon)
- **React** - UI library
- **CSS3** - Styling

## 📁 Project Structure

```
blog-platform/
├── backend/
│   ├── server.js          # Main server file with API endpoints
│   ├── package.json       # Backend dependencies
│   └── node_modules/      # Installed packages
├── frontend/              # React app (coming soon)
└── README.md             # Project documentation
```

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/posts` | Get all blog posts |
| GET | `/api/posts/:id` | Get a single post by ID |
| POST | `/api/posts` | Create a new blog post |
| PUT | `/api/posts/:id` | Update an existing post |
| DELETE | `/api/posts/:id` | Delete a post |

### Example API Request

**Create a new post:**
```json
POST /api/posts
Content-Type: application/json

{
  "title": "My Awesome Post",
  "content": "This is the content of my blog post.",
  "author": "John Doe"
}
```

**Response:**
```json
{
  "id": 2,
  "title": "My Awesome Post",
  "content": "This is the content of my blog post.",
  "author": "John Doe",
  "createdAt": "2025-11-08T10:30:00.000Z"
}
```

## 🏃 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/blog-platform.git
   cd blog-platform
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Test the API**
   - Open your browser and navigate to `http://localhost:5000`
   - Visit `http://localhost:5000/api/posts` to see all posts

## 🧪 Testing the API

You can test the API using:
- **Browser** - For GET requests (e.g., `http://localhost:5000/api/posts`)
- **Postman** - For all request types
- **cURL** - Command line tool
- **Thunder Client** (VS Code extension)

### Example cURL commands:

**Get all posts:**
```bash
curl http://localhost:5000/api/posts
```

**Create a new post:**
```bash
curl -X POST http://localhost:5000/api/posts \
  -H "Content-Type: application/json" \
  -d '{"title":"Test Post","content":"Test content","author":"Jane Doe"}'
```

## 🎯 Roadmap

- [x] Build RESTful API with Node.js and Express
- [ ] Create React frontend
- [ ] Connect frontend to backend
- [ ] Add database integration (MongoDB/PostgreSQL)
- [ ] Implement user authentication
- [ ] Add image upload functionality
- [ ] Deploy to production (Heroku/Vercel)
- [ ] Add comments system
- [ ] Implement search functionality

## 📚 What I Learned

- Building RESTful APIs with Express.js
- Implementing CRUD operations
- Using middleware in Node.js
- API routing and request handling
- Working with JSON data
- Understanding client-server architecture

## 🤝 Contributing

This is a learning project, but suggestions and feedback are welcome! Feel free to open an issue or submit a pull request.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/your-profile)

## 🙏 Acknowledgments

- Built as part of my journey to learn full-stack web development
- Thanks to the Node.js and Express.js communities for excellent documentation

---

⭐ If you found this project helpful, please consider giving it a star!
