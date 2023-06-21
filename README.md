# Flight Management System

The Flight Management System is a web application developed using Angular for the frontend and Spring Boot for the backend. This system allows users to manage flights, airlines, airports, and bookings.

## Features

- User Registration and Authentication: Users can create an account and log in to access the system.
- Flight Management: CRUD operations for flights, including creating, updating, and deleting flights.
- Airline Management: Manage airlines, including adding, editing, and removing airlines.
- Airport Management: CRUD operations for airports, allowing users to add, update, and delete airports.
- Booking Management: Users can search for available flights and make bookings.
- Role-based Access Control: Different roles such as admin and user with different permissions.
- Data Validation: Input validation to ensure data integrity and prevent errors.
- Error Handling: Proper handling of exceptions and errors with informative error messages.
- User-friendly Interface: A clean and intuitive user interface for easy navigation and interaction.

## Prerequisites

Make sure you have the following software installed:

- Node.js and npm - [Download here](https://nodejs.org)
- Angular CLI - Install globally using npm: `npm install -g @angular/cli`
- Java Development Kit (JDK) 8 or later - [Download here](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- Apache Maven - [Download here](https://maven.apache.org/download.cgi)

## Getting Started

### Frontend Setup

1. Clone the repository:

```shell
git clone https://github.com/your-username/flight-management-system.git
```

2. Navigate to the frontend directory:

```shell
cd flight-management-system/frontend
```

3. Install the dependencies:

```shell
npm install
```

4. Start the development server:

```shell
ng serve
```

5. Open your browser and access the application at `http://localhost:4200`.

### Backend Setup

1. Navigate to the backend directory:

```shell
cd flight-management-system/backend
```

2. Build the project using Maven:

```shell
mvn clean install
```

3. Run the Spring Boot application:

```shell
mvn spring-boot:run
```

The backend server will start running on `http://localhost:8080`.

## Configuration

### Backend Configuration

The backend configuration file is located at `flight-management-system/backend/src/main/resources/application.properties`. Update the following properties according to your environment:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/flight_management_system
spring.datasource.username=root
spring.datasource.password=password
```

Replace the `spring.datasource.url` with your MySQL database URL, and update the `spring.datasource.username` and `spring.datasource.password` with your MySQL credentials.

### Frontend Configuration

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080' // Update with your backend URL
};
```

Replace `http://localhost:8080` with the URL where your backend server is running.

## Usage

Once the application is set up and running, you can access it through your browser. Use the provided user registration functionality to create an account and log in.

As an admin, you will have access to manage flights, airlines, and airports. Regular users can search for available flights and make bookings.

## Contributing

Contributions are welcome! If you want to contribute to this project, please follow these steps:

1. Fork this repository.
2. Create a new branch: `git checkout -b my-new-feature`.
3. Make

 your changes and commit them: `git commit -am 'Add some feature'`.
4. Push to the branch: `git push origin my-new-feature`.
5. Submit a pull request.


## Acknowledgments

- [Angular](https://angular.io/)
- [Spring Boot](https://spring.io/projects/spring-boot)
- [MySQL](https://www.mysql.com/)
