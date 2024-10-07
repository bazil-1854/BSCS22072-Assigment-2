# Node.js HTTP Server Assignment

## Overview

This project demonstrates the implementation of a simple HTTP server using Node.js. The server handles GET and POST requests to manage a professional profile, providing endpoints for greeting users and saving profile data.

## Features

1. **GET /hello/:name** - Returns a personalized greeting.
2. **POST /profile** - Receives a JSON object containing professional profile information, validates the object, and saves it to a file.
3. **GET /profiles** - Returns a list of all saved profiles.

## Technologies Used

- Node.js
- Express.js (optional for easier routing and middleware management)
- JSON for data handling

## Endpoints

### 1. GET /hello/:name

- **Description**: Returns a greeting message for the specified name.
- **Method**: GET
- **Response**: 
  - If successful: `Hello, {name}.`
  - Example: `GET /hello/amjad` returns `Hello, Amjad.`

### 2. POST /profile

- **Description**: Receives a JSON object containing professional profile information.
- **Method**: POST
- **Request Body**: 
  ```json
  {
    "Name": "Your Name",
    "Title": "Your Title",
    "Targeted Keywords": ["keyword1", "keyword2"],
    "Education": "Your Education",
    "Certification": "Your Certification",
    "Contact": "Your Contact Information"
  }
