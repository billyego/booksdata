# BooksData Backend JSON Server

This document provides an overview and usage guide for the `booksdata` backend JSON server. The server is designed to manage book data, including operations such as fetching, creating,  and deleting books.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- Basic understanding of RESTful APIs and JSON.

### Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies by running `npm install`.

## Usage

### API Endpoints

#### Fetch All Books

- **Endpoint**: `/books`
- **Method**: `GET`
- **Description**: Retrieves a list of all books.
- **Response**: An array of book objects in JSON format.

#### Create a New Book

- **Endpoint**: `/books`
- **Method**: `POST`
- **Description**: Creates a new book.
- **Request Body**: A JSON object representing the book.
- **Response**: The newly created book object in JSON format.

#### Update a Book

- **Endpoint**: `/books/:id`
- **Method**: `PUT`
- **Description**: Updates an existing book.
- **Path Parameters**: `id` - The ID of the book to update.
- **Request Body**: A JSON object with the updated book details.
- **Response**: The updated book object in JSON format.

#### Delete a Book

- **Endpoint**: `/books/:id`
- **Method**: `DELETE`
- **Description**: Deletes a book.
- **Path Parameters**: `id` - The ID of the book to delete.
- **Response**: A confirmation message indicating the book has been deleted.
