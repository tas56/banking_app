# Banking application

## About this repository

This is a full-stack banking application. This application is built in React/Redux (with Bootstrap) for the front-end with a Node.js API that connects to a MySql database. 
This application allows a user to Add, Edit, and Delete Accounts, as well as adjust their balance. Keeping a log of all changes to the account balance with a separate transactions table. This application also has user signup / login using Auth0 and has an API that uses JWT to authorize API requests.

## How to run this project

### Step 1. Clone repository `git clone https://github.com/tas56/banking_app/`

Then, in the project directory, you can run:

### Step 2. Run docker `docker-compose up`

Builds the database in a docker container environment.<br/><br/>
If docker is not available on your machine you can instead run `npm run server`, this script will start a local JSON server which is available for testing. (if running JSON server, skip step 3). If you do this you will have to navigate to the _accountActions.js_ and _transactionActions.js_ and change the API calls to http://localhost:8000/ _(accounts or transactions)_

### Step 3. Start server `npm run dev`

Runs the server to create connections to the SQL database/API

### Step 4. Start UI `npm run start`

Runs the UI in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Branches

### master

This is the branch has all of the implementation for the React UI and a merge of all other branches

### server

Node.js server/API implementation

### Auth0

Auth0 implementation

### JWT

JWT implementation

# Screenshots

## UI

### Auth0

### Create

### Retrieve

### Edit/Update

### Delete

## Postman

### Auth0

### Create

### Retrieve

### Edit/Update

### Delete



