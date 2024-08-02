# Notes REST API with Express.js and MongoDB - by Mahdi Behoftadeh

This is a REST API for managing notes. It uses Express.js for the server and MongoDB for the database.

## Features

- Create, read, update, and delete notes.
- API routes are under `/api/v1`.
- Data is stored in MongoDB.

## Getting Started

1. **Install dependencies**:
    ```bash
    npm install
    ```

2. **Set up environment variables**:
    Copy `.env.example` file in the root directory and paste it with a new name `.env` and configure its values with yours:
    ```
    API_ROUTE_PREFIX='/api/v1'
    DATABASE_CONNECTION_STRING='mongodb://localhost:27017'
    ```

3. **Start the server**:
    ```bash
    npm start
    ```
    For development with auto-reloading:
    ```bash
    npm run dev
    ```

The server will run on port 3000 by default.

## API Endpoints

### Notes

- **Get all notes**
    - `GET /api/v1/notes`
    - Returns a list of all notes.

- **Get a note by ID**
    - `GET /api/v1/notes/:id`
    - Returns a note by its ID.

- **Create a note**
    - `POST /api/v1/notes`
    - **Body**:
      ```json
      {
        "title": "string",
        "text": "string"
      }
      ```
    - Creates a new note.

- **Update a note**
    - `PATCH /api/v1/notes/:id`
    - **Body**:
      ```json
      {
        "title": "string",
        "text": "string"
      }
      ```
    - Updates an existing note by its ID.

- **Delete a note**
    - `DELETE /api/v1/notes/:id`
    - Deletes a note by its ID.
 

## Error Handling

- `400 Bad Request`: For invalid data or errors with the request.
- `404 Not Found`: When a note is not found.
- `500 Internal Server Error`: For server or database issues.

## Dependencies

- **Dependencies**:
  - `body-parser`: Parses request bodies.
  - `express`: Server framework.
  - `mongoose`: MongoDB object modeling.

- **DevDependencies**:
  - `dotenv`: Loads environment variables.
  - `nodemon`: Auto-reloads server during development.

## Links

- **Repository**: [GitHub Repo](https://github.com/MahdiBehoftadeh/expressjs-notepad-rest-api)
- **Issues**: [Issue Tracker](https://github.com/MahdiBehoftadeh/expressjs-notepad-rest-api/issues)
- **Homepage**: [Project Homepage](https://github.com/MahdiBehoftadeh/expressjs-notepad-rest-api#readme)
