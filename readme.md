Introduction
The Online Music Streaming Platform is a web-based application that allows users to stream music, create playlists, and follow their favorite artists. The system supports role-based access for Admins, Artists, and Listeners, ensuring proper management of content and users.

This project is designed for academic purposes and demonstrates core concepts of web development, database management, and role-based systems.

🎯 Project Objectives
● Provide an online music streaming service

● Enable artists to upload and manage music

● Allow listeners to create playlists and follow artists

● Allow administrators to manage users and approve music

● Track music performance such as streams and likes


👥 User Roles and Responsibilities
   
Admin

Manage users and assign roles

Approve or reject music uploaded by artists

Manage system settings

Monitor platform activity

Artist

Upload music content

Manage uploaded songs

Track performance (streams and likes)

Interact with fans

Listener

Stream approved music

Create and manage playlists

Follow favorite artists

View listening history

⚙️ Functional Features

Admin Functionalities

User management (add, update, delete users)

Music content approval

System configuration management

Artist Functionalities

Upload music

View music performance

Manage uploaded content

Listener Functionalities

Stream music

Create playlists

Follow artists

🛠️ Technology Stack

Backend

Node.js

Express.js

SQLite Database

Frontend

React.js

HTML, CSS, JavaScript

📁 Project Structure

music-streaming-platform/

│

├── backend/

│   ├── server.js

│   ├── db.js

│   ├── routes/

│   │   ├── admin.js

│   │   ├── artist.js

│   │   └── listener.js

│   └── package.json

│

├── frontend/

│   ├── src/

│   │   ├── App.js

│   │   ├── api.js

│   │   ├── pages/

│   │   │   ├── AdminDashboard.js

│   │   │   ├── ArtistDashboard.js

│   │   │   └── ListenerDashboard.js

│   └── package.json

│

└── README.md

▶️ How to Run the Project

Step 1: Start Backend Server

cd backend

npm install

node server.js

Backend runs on: http://localhost:5000

Step 2: Start Frontend Application

cd frontend

npm install

npm start

Frontend runs on: http://localhost:3000

📊 Dashboards Overview

Admin Dashboard

User management panel

Music approval system

Platform overview

Artist Dashboard

Uploaded music list

Performance statistics

Upload history

Listener Dashboard

Music streaming section

Playlist management

Followed artists list

🚀 Future Enhancements

User authentication and login system

Advanced music recommendations

Charts and analytics dashboard

Real-time fan interactions

Cloud storage for music files

📄 Conclusion

The Online Music Streaming Platform provides a structured and efficient system for managing music streaming services with distinct user roles. It fulfills all core requirements and serves as a strong foundation for further development.

👨‍💻 Developed By

Your Name- Irfan Ahmed Ansari

Course / Department- B-Tech(AI&ML)

Institution Name- Galgotias University
