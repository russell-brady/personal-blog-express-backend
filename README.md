# Personal Blog

### Set up

You may wish to fork this repository or remove my remote origin and add your own. 

1. To download the repository and install dependencies, run the following commands:

```bash
git clone https://github.com/russell-brady/personal_blog.git
npm install
```

2. Then, head on to MongoDB atlas and create an account there. [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) will let you use a free 500 MB of MongoDB database and use it remotely. It is also hosted in the cloud. After setting up your account, log into your account. Follow the steps prompted by the website in creating your own cluster. Get the connection string of your database.

3. Next, you should create a .env file in the root directory. To do this, run:

cp app.env .env
and set values as follows:

```bash
DATABASE_URL=MONGODB_LOCATION
PORT=3003
```

where MONGODB_LOCATION is the connection string from your mongodb cluster. 

# Backend Application

In the project directory, you can run:

### `npm start`

This command runs start.js which runs the app in the development mode.<br>
Open [http://localhost:3003](http://localhost:3003) to view it in the browser.

### `npm test`

This command runs the backend test suite. This suite contains tests which run using Jest and SuperTest and they test the Express routes of the Application. 
