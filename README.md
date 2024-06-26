# 🛋️ Modern Furniture E-Commerce App

Welcome to the Modern Furniture E-Commerce App! This project is a complete e-commerce application for modern furniture. It features a React frontend, Java Spring Boot backend, and a MySQL database.

## App Screenshots
- <img width="1440" alt="Screenshot 2024-06-25 at 11 34 50 PM" src="https://github.com/AimanK/ecommerce/assets/22192993/5dad8103-8916-4a69-9fe7-1be2df0a4ac6">
- <img width="1440" alt="Screenshot 2024-06-25 at 11 35 10 PM" src="https://github.com/AimanK/ecommerce/assets/22192993/fd4b6276-bee3-4582-9cda-55f90476cd03">
- <img width="1435" alt="Screenshot 2024-06-25 at 11 34 34 PM" src="https://github.com/AimanK/ecommerce/assets/22192993/45127d09-cbe8-4e5c-927f-e8c4c2355795">

## 📋 Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## ✨ Features

- **User Authentication**: Secure user authentication with JWT.
- **Product Management**: CRUD operations for products.
- **Shopping Cart**: Add, update, and remove items from the cart.
- **Order Management**: Place and view orders.
- **Responsive Design**: Fully responsive design for all devices.
- **Search & Filter**: Powerful search and filter options for products.

## 🛠 Technologies

- **Frontend**: React, Redux, Material-UI
- **Backend**: Spring Boot, Spring Security, JWT
- **Database**: MySQL
- **Other Tools**: Maven, Docker

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [Java JDK](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) (v11 or later)
- [Maven](https://maven.apache.org/)
- [MySQL](https://www.mysql.com/)
- [Docker](https://www.docker.com/) (optional, for running MySQL database)

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/modern-furniture-ecommerce.git
    cd modern-furniture-ecommerce
    ```

2. **Backend Setup**:
    ```bash
    cd ecommerce-backend
    mvn clean install
    ```

3. **Frontend Setup**:
    ```bash
    cd ecommerce-frontend
    npm install
    ```

### Running the App

1. **Database Setup**:
    - **Using Docker**:
        ```bash
        docker run --name mysql-db -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=furniture -p 3306:3306 -d mysql:latest
        ```
    - **Manually**: Create a MySQL database named `furniture`.

2. **Backend**:
    ```bash
    cd ecommerce-backend
    mvn spring-boot:run
    ```

3. **Frontend**:
    ```bash
    cd ecommerce-frontend
    npm start
    ```

    The frontend should now be running at `http://localhost:3000` and the backend at `http://localhost:8080`.

## 📖 Usage

1. **Register** or **Login** to access the app.
2. Browse the **Modern Furniture** collection.
3. Use the search bar or filters to find specific items.
4. Add desired items to the **Cart**.
5. Proceed to **Checkout** and place your order.
6. View your **Order History** and manage your account settings.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a Pull Request.

Please make sure your code follows the project's coding standards and includes appropriate tests.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## 📧 Contact

For any inquiries, please contact:

- **Name**: AimanK
- **Email**: kayadcodes@gmail.com
- **LinkedIn**: [Your LinkedIn](https://www.linkedin.com/in/aiman-kayad/)

---

Thank you for checking out the Modern Furniture E-Commerce App! Happy coding! 🛋️✨
