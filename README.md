# Node - Basic node server

Basic server built with NodeJs. The API allows adding and managing countries.

## Installation

1. Clone the repository

```bash
https://github.com/Lspacedev/basic-node-server
```

2. Navigate to the project folder

```bash
cd basic-node-server

```

3.  Install all dependencies

```bash
npm install
```

4. Run the project

```bash
node server
```

## Usage

1. The server should run on PORT 3000, unless a port is specified.
2. Use http://localhost:3000, to test the API on Postman or any other tool.

## Routes:

- Get all countries.
- Get country.
- Add country.
- Update country.
- Delete country.

Endpoints

```python
    1. GET /  -  returns HTML Welcome Page.

    2. GET /add - returns HTML form used to add country.

    3. POST /add
        Inputs: country_name

    4. GET /delete - returns HTML form used to delete country.

    5. POST /delete
        Inputs: country_name

    6. GET /update - returns HTML form used to update country.

    7. POST /update
        Inputs: country_name
    5. GET /countries

```

## Tech Stack

- NodeJs
- Multer
