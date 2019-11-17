# Personal Blog

### Set up

You may wish to fork this repository or remove my remote origin and add your own. 

1. To download the repository and install dependencies, run the following commands:

```bash
git clone https://github.com/russell-brady/personal_blog.git
cd blog-backend
npm install
cd ..
cd blog-frontend
npm install
```

2. Then, head on to MongoDB atlas and create an account there. [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) will let you use a free 500 MB of MongoDB database and use it remotely. It is also hosted in the cloud. After setting up your account, log into your account. Follow the steps prompted by the website in creating your own cluster. After setting up your account, log into your account. Get the connection string of your database.

3. Next, you should create a .env file in the root directory. To do this, run:

cp app.env .env
and set values as follows:

```bash
DATABASE_URL=MONGODB_LOCATION
PORT=3003
```

where MONGODB_LOCATION is the connection string from your mongodb cluster. 

# Backend Application

## Available Scripts

First, change directory into blog-backend:

### `cd blog-backend`

In the project directory, you can run:

### `npm start`

This command runs start.js which runs the app in the development mode.<br>
Open [http://localhost:3003](http://localhost:3003) to view it in the browser.

### `npm test`

This command runs the backend test suite. This suite contains tests which run using Jest and SuperTest and they test the Express routes of the Application. 


# Frontend Application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

First, change directory into blog-frontend:

### `cd blog-frontend`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run deploy`

I also have this application set up to deploy to github pages - See their docs to see how easily this can be set up. 