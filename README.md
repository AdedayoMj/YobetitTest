## Introduction
This is a single application with JWT for validation, rest countries API and slot machine. The project uses the foillowing technology:
* [React](https://reactjs.org/) and [React Router](https://www.npmjs.com/package/react-router) for the frontend,
* [Express](https://expressjs.com/) and [Mongoose](https://mongoosejs.com/docs/) for the backend,
* [MongoDB](https://www.mongodb.com/) for the Database,
* Protecting routes/endpoints with [JWT](https://jwt.io/introduction/) (JSON Web Tokens) and
* Using [Redux](https://redux.js.org/) for app state management

## Quick Start
Include a `.env` file in the `server` directory with the following environment variables
(credentials will be included because it is a test mongodb atlas databse).
```diff
PORT=5000
MONGODB_URl =mongodb+srv://test123:test123@test123-93jtg.mongodb.net/test?retryWrites=true&w=majority
JWT_Secret=Yobetit!!!
```
server can be downloaded [here](https://github.com/AdedayoMj/YobetitTestServer)
#### Install dependencies for server and client
`npm install`

#### Run the Express server only
`nodemon`

#### Run the React client only
`npm start`



## Screenshot
![](screenshots/image1)
