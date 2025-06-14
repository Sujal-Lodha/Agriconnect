# Agriconnect

## Overview

AgriConnect is a digital platform built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) that connects farmers with nearby machinery providers and laborers. It addresses the lack of visibility and connection, allowing farmers to find services easily and at competitive rates. By leveraging a modern tech stack, AgriConnect enhances user experience, reduces costs, increases efficiency, and improves farmers' overall profitability

## Getting Started


1. **Install dependencies:**

   Navigate to client directory and install frontend dependencies using yarn

   ```
   npm or yarn install
   ```

   Similary navigate to api folder and install backend dependencies

   ```
   npm or yarn install
   ```

2. **ENV variables:**

   - create .env file in the client folder and add these variables

     #### VITE_BASE_URL= http://localhost:4000

     #### VITE_GOOGLE_CLIENT_ID= your google client id

   - create .env file in the api folder and add these variables

     #### PORT= 4000

     #### DB_URL= your db url

     #### JWT_SECRET= your secret (string)

     #### JWT_EXPIRY= 20d

     #### COOKIE_TIME= 7

     #### SESSION_SECRET= your secret session (string)

     #### CLOUDINARY_NAME= your secret session

     #### CLOUDINARY_API_KEY= your cloudinary key

     #### CLOUDINARY_API_SECRET= your cloudinary api secret

     #### CLIENT_URL= http://localhost:5173

3. **Run project:**
   - Open terminal, navigate to client directory and run below command to start frontend
   ```
       npm or yarn run dev
   ```
   - Open another terminal, navigate to api directory and run this command to start backend server
   ```
       npm or yarn start
   ```



## Technologies Used

- **MongoDB:** NoSQL database for storing user data, listings.
- **Express.js:** Web application framework for building the backend server.
- **React.js:** JavaScript library for building the user interface.
- **Node.js:** JavaScript runtime environment for executing server-side code.
- **Tailwind CSS:** A utility-first CSS framework
- **Shadcn:** UI library for styling based on Tailwind CSS
- **JWT:** JSON Web Tokens for secure user authentication.
- **Cloudinary:** Cloud-based image management for storing and serving images.
- **Google Cloud:** For gmail based authentication
