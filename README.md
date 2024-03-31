# PG-Rental

## Overview

PG-Rental is a user-friendly, full-stack web application that efficiently connects PG owners with seekers, managed by admins. Owners can easily advertise their accommodations, while seekers find and rent spaces conveniently. With its advanced features, PG-Rental ensures a seamless experience for all users.

## Key Features

- **User SignUp/SignIn:** Seamlessly create or access user accounts to explore PG listings.
- **PGs Search, Sort, Filter:** Effortlessly search, sort, and filter PG accommodations based on preferences.
- **Location Based PG:** Find PG accommodations based on the user's current location or specified location.
- **PG Payment:** Securely process payments for renting PG accommodations.
- **PG Rent Agreement & Its Payment:** Designated users process the rent agreement along with its associated fees payment.
- **Admin SignIn:** Separate panel for admin login.
- **Admin View/Add/Delete PGs:** Admins manage PG listings by viewing, adding, or deleting them as necessary.
- **Contact Admin:** PG owners provide PG details to admins for PG listings.
- **PG Feedback:** Provide valuable feedback on PG accommodations to admins.

## Technical Details

The PG-Rental is built using the following technologies:
- MongoDB
- Express.js
- React.js
- Node.js
- Bootstrap

## Setup Instructions

### Prerequisites

Before getting started with PG-Rental, ensure you have the MERN prerequisites installed.

### Getting Started

1. **Clone the Repository:** Clone the PG-Rental repository to your local machine using the following command:

    ```
    https://github.com/Ashish01296/PG-Rental-System.git
    ```

2. **Fill out links:**
    - Provide the link of the MongoDB Url in the specified files.
    - Provide the API link of the Stripe payment.
    - Provide the API link of the Cloudinary.
    - Provide the API link of the Formspree.
    - Provide the API link of the GoogleOAuthProvider Client Id.
    - Provide the links for the relevant Images and GIFs.

3. **Fill out details:**
    - Write demo details (name, address, charge, contact number) in specified files.
    - Write email and password details for authentication.

4. **Install dependencies using npm:** Run the following command in each directory where `package.json` is present:

    ```
    npm install
    ```

5. **Start the server using nodemon:**

    ```
    nodemon server
    ```

6. **Start the client using npm:**

    ```
    cd client
    npm start
    ```

### Accessing PG-Rental

Once both the backend and frontend are running, you can access PG-Rental by navigating to `localhost:3000` in your web browser.

