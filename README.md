# 🌍 WanderLust – Travel Listing Web Application

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express.js](https://img.shields.io/badge/Express.js-Framework-lightgrey)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![Mongoose](https://img.shields.io/badge/Mongoose-ODM-red)
![EJS](https://img.shields.io/badge/EJS-Templating-yellow)
![Bootstrap](https://img.shields.io/badge/Bootstrap-UI-purple)
![License](https://img.shields.io/badge/License-MIT-blue)

![Repo Size](https://img.shields.io/github/repo-size/Shubham-css/WanderLust)
![Stars](https://img.shields.io/github/stars/Shubham-css/WanderLust?style=social)
![Forks](https://img.shields.io/github/forks/Shubham-css/WanderLust?style=social)

---

## 📌 Overview

WanderLust is a full-stack web application inspired by platforms like Airbnb. It allows users to explore travel destinations, create listings, and share their experiences through reviews and ratings.

This project demonstrates real-world implementation of CRUD operations, authentication, authorization, and full-stack integration using modern web technologies.

---

## 🚀 Features

- 🏡 Create, edit, and delete travel listings  
- 🔍 Browse and explore listings  
- 📸 Upload images for listings  
- 👤 User authentication (Register/Login)  
- 🔐 Authorization (only owners can modify listings)  
- ⭐ Reviews and ratings system  
- 📱 Fully responsive design  

---

## 🛠️ Tech Stack

### 🔹 Frontend
- HTML5  
- CSS3  
- JavaScript  
- EJS (Embedded JavaScript Templates)  
- Bootstrap  

### 🔹 Backend
- Node.js  
- Express.js  

### 🔹 Database
- MongoDB  
- Mongoose  

### 🔹 Other Tools & Libraries
- Cloudinary (Image storage)  
- Multer (File uploads)  
- Passport.js (Authentication)  
- Express-session  
- Connect-flash  

---

## 📂 Project Structure


WanderLust/
│
├── models/ # Mongoose schemas
├── routes/ # Express routes
├── controllers/ # Business logic
├── views/ # EJS templates
├── public/ # Static files (CSS, JS, images)
├── utils/ # Utility functions
├── app.js # Main application file
├── package.json
└── .env # Environment variables


---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Shubham-css/WanderLust.git
cd WanderLust
2️⃣ Install dependencies
npm install
3️⃣ Setup environment variables

Create a .env file in the root directory and add:

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_key
CLOUDINARY_SECRET=your_secret
DB_URL=your_mongodb_connection_string
SESSION_SECRET=your_secret
4️⃣ Run the application
node app.js

or (for development)

nodemon app.js
5️⃣ Open in browser
http://localhost:3000


🎯 Learning Outcomes
Understanding full-stack application architecture
Implementation of RESTful APIs
Authentication & authorization using Passport.js
Image handling with Cloudinary and Multer
Database design using MongoDB
🚀 Future Enhancements
🔎 Advanced search and filtering
📍 Map integration (Google Maps)
❤️ Wishlist / Favorites feature
💳 Payment gateway integration
📊 Admin dashboard
🤝 Contributing

Contributions are welcome!

Fork the repository
Create a new branch (feature-name)
Commit your changes
Push to your branch
Open a Pull Request
📄 License

This project is licensed under the MIT License.

👨‍💻 Author

Shubham Fulwani

GitHub: https://github.com/Shubham-css
⭐ Support

If you like this project:

⭐ Star this repository
🍴 Fork it
🛠️ Contribute
💡 Inspiration

Inspired by modern travel platforms like Airbnb to build a real-world full-stack travel listing application.
