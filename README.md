### deployed link https://plum-agile-kitten.cyclic.app/
# Todo Backend with User Login Authentication

This repository contains a simple Todo backend application with user login authentication. This backend is built using [Express.js](https://expressjs.com/) for the server framework and [MongoDB](https://www.mongodb.com/) as the database. User authentication is implemented using [Passport.js](http://www.passportjs.org/).

## Features

- **Todo Management:** Create, read, update, and delete todos.
- **User Authentication:** Secure user registration and login using Passport.js.
- **Token-based Authentication:** JWT (JSON Web Tokens) are used for token-based authentication.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed.
- MongoDB server installed and running.
- (Optional) A tool like [Postman](https://www.postman.com/) for testing API endpoints.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/shanukajain/todo.git

2. ## Install Dependencies

Make sure you have Node.js and npm installed before proceeding. Then, install the project dependencies using the following command:

   ```bash
   cd todo-backend
   npm install

Set up Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```env
PORT=3000
MONGODB_URI=enter-your-url
SECRET_KEY=your-secret-key

 Start the Server

To start the server:

   npm start 
