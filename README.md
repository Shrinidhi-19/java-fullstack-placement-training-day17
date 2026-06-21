# Spring Boot CRUD API using JPA and PostgreSQL

## Overview

This project was developed as part of Java Full Stack Development Placement Training to understand the implementation of CRUD (Create, Read, Update, Delete) operations using Spring Boot, Spring Data JPA, and PostgreSQL.

The application follows a layered architecture consisting of:

- Controller Layer
- Service Layer
- Repository Layer
- Database Layer

The project demonstrates how Spring Boot applications interact with databases using JPA repositories and REST APIs.

---

## Technologies Used

### Backend

- Java
- Spring Boot
- Spring Data JPA
- Hibernate
- PostgreSQL
- Maven

### API Testing

- Postman

---

## Project Architecture

Client

↓

REST API Endpoints

↓

Controller Layer

↓

Service Layer

↓

Repository Layer

↓

PostgreSQL Database

---

## Concepts Covered

### Spring Boot

- Spring Boot Project Setup
- Dependency Management
- Application Configuration
- REST API Development

### Spring Data JPA

- JpaRepository Interface
- Database Operations
- Entity Management
- Automatic Query Generation

### PostgreSQL

- Database Connectivity
- Table Creation
- Data Persistence

### REST APIs

- GET Request
- POST Request
- PUT Request
- DELETE Request

### Layered Architecture

- Controller Layer
- Service Layer
- Repository Layer
- Entity Layer

---

## Project Components

### Main Application

The Spring Boot application starts using the main application class.

Responsibilities:

- Bootstraps the Spring application
- Loads all configured beans
- Starts the embedded server

---

### Entity Layer

The Entity class represents the database table structure.

Features:

- Table Mapping
- Primary Key Configuration
- Data Representation

Example Attributes:

- ID
- Name
- Additional User Fields

---

### Repository Layer

The repository layer extends JpaRepository to perform database operations without writing SQL queries.

Features:

- Save Records
- Retrieve Records
- Update Records
- Delete Records

Concept Practiced:

- JpaRepository Interface
- Generic Type Parameters
- Built-in CRUD Methods

---

### Service Layer

The service layer contains business logic and acts as a bridge between the controller and repository.

Responsibilities:

- Process Requests
- Handle Business Logic
- Communicate with Repository Layer

---

### Controller Layer

The controller exposes REST API endpoints to clients.

Responsibilities:

- Receive HTTP Requests
- Invoke Service Methods
- Return Responses

Supported Operations:

- Create Record
- Read Record
- Update Record
- Delete Record

---

## CRUD Operations Implemented

### Create

Adds new records into the database.

Method:

POST

Example Use Case:

- Add a new user
- Insert new data into PostgreSQL

---

### Read

Retrieves records from the database.

Method:

GET

Example Use Case:

- View all records
- View specific records

---

### Update

Updates existing records.

Method:

PUT

Example Use Case:

- Modify user details
- Update existing data

---

### Delete

Removes records from the database.

Method:

DELETE

Example Use Case:

- Remove unwanted records
- Delete existing entries

---

## Features

✔ RESTful API Design

✔ CRUD Operations

✔ PostgreSQL Integration

✔ Spring Data JPA

✔ Layered Architecture

✔ Dependency Injection

✔ Repository Pattern

✔ Entity Mapping

✔ API Testing with Postman

---

## Learning Outcomes

Through this project, I learned:

- Building REST APIs using Spring Boot
- Implementing CRUD operations
- Connecting Spring Boot with PostgreSQL
- Using JpaRepository for database interaction
- Designing layered applications
- Managing entities using JPA
- Testing APIs using Postman
- Understanding real-world backend architecture

---

## Training Details

**Placement Training:** Java Full Stack Development

**Day:** 17

**Topic:** Spring Boot CRUD Operations using JPA

### Concepts Learned

- Spring Boot
- Spring Data JPA
- JpaRepository
- CRUD Operations
- REST APIs
- PostgreSQL
- Controller Layer
- Service Layer
- Repository Layer
- Entity Mapping

---

## Project Structure

src/main/java

├── TestSaturdayApplication.java

├── ModelClass.java

├── ControllerClass.java

├── ServiceClass.java

└── RepositoryClass.java

---

## Future Enhancements

- Input Validation
- Exception Handling
- Pagination
- Sorting
- Search Functionality
- Swagger Documentation
- Authentication & Authorization

---

## Author

**Shrinidhi Dhamodharan**

Aspiring Java Full Stack Developer

Currently learning Spring Boot, React.js, REST APIs, JPA, Hibernate, PostgreSQL, and Full Stack Development through hands-on projects and placement training.

---

## Here are the screenshot of this to-do list project
<img width="691" height="225" alt="image" src="https://github.com/user-attachments/assets/a9493f27-7bb3-4158-a61e-8810ac2a66dd" />
<img width="1302" height="448" alt="image" src="https://github.com/user-attachments/assets/f4db85ea-f79b-4cf9-85c2-4bbdb3ad6e0f" />
<img width="902" height="480" alt="image" src="https://github.com/user-attachments/assets/8f6ee32f-22fb-4524-b383-f9a4854072c7" />
<img width="1151" height="591" alt="image" src="https://github.com/user-attachments/assets/36eb2a11-7656-4290-945e-8f390d62fb16" />
