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
1. Login Button<br/>
![image](https://user-images.githubusercontent.com/74079285/117594255-b7b85680-b10b-11eb-8bb9-d605cfedaa69.png)<br/>
2. Redirect to login form<br/>
![image](https://user-images.githubusercontent.com/74079285/117594337-ed5d3f80-b10b-11eb-869d-247bbec62600.png)
<br/>
3. Redirect to protected page after login<br/>
![image](https://user-images.githubusercontent.com/74079285/117594617-7aa09400-b10c-11eb-875d-d39a08cf4154.png)
<br/>
(logout button will redirect you to first login button screen)


### Create

Once logged in, you can add an account with the add account form (by expanding the 'Add Account +' in the UI), adding an account will also add a transaction <br />
![image](https://user-images.githubusercontent.com/74079285/117594586-678dc400-b10c-11eb-976e-8e9d2efeda0e.png)


### Retrieve

All accounts retrieved <br />
![image](https://user-images.githubusercontent.com/74079285/117594705-ab80c900-b10c-11eb-89fe-95fabef389a5.png)
<br />
All transactions retrieved<br/>
![image](https://user-images.githubusercontent.com/74079285/117594745-c5221080-b10c-11eb-99b1-690f17fa7dba.png)


### Edit/Update

When you expand the 'Depotit/Withdrawal +' you will see a form where you can deposit or withdrawal the typed amount. Clicking the button will update the UI/Database accordingly
<br />
![image](https://user-images.githubusercontent.com/74079285/117594887-22b65d00-b10d-11eb-9db7-c6d8310f05c7.png)
<br/>
Clicking the the edit icon on the top right of the account card will allow a user to change the name/balance. The DB and UI both get updated according to the changes.<br/>
![image](https://user-images.githubusercontent.com/74079285/117594997-83459a00-b10d-11eb-9ced-9cac0ce8239f.png)



### Delete

Clickink the X in the top right corner of the account card will delete the account <br />
![image](https://user-images.githubusercontent.com/74079285/117595120-de778c80-b10d-11eb-8bbc-d5ffb5e05195.png)


## Postman

### Create

Account<br/><br/>
![image](https://user-images.githubusercontent.com/74079285/117595444-d9ffa380-b10e-11eb-8984-32d6081d0fd9.png)
<br/>

Transaction<br/><br/>
![image](https://user-images.githubusercontent.com/74079285/117595390-b2104000-b10e-11eb-8028-c5de182e43ff.png)


### Retrieve

Accounts <br /><br/>
![image](https://user-images.githubusercontent.com/74079285/117595170-1979c000-b10e-11eb-8255-64e6d3b75592.png)
<br />
Transactions <br /><br/>
![image](https://user-images.githubusercontent.com/74079285/117595213-344c3480-b10e-11eb-8b1c-44309337e3de.png)


### Edit/Update

Account <br/><br/>
![image](https://user-images.githubusercontent.com/74079285/117595797-bdb03680-b10f-11eb-8cc3-afd7a1d5dcef.png)
<br/><br/>

Transaction<br/><br/>
![image](https://user-images.githubusercontent.com/74079285/117595759-a96c3980-b10f-11eb-89a4-510303cb6f8a.png)


### Delete

Account <br/><br/>
![image](https://user-images.githubusercontent.com/74079285/117595584-382c8680-b10f-11eb-9e22-bb9151b2c840.png)<br/><br/>

Transaction <br/><br/>
![image](https://user-images.githubusercontent.com/74079285/117595642-64480780-b10f-11eb-9d22-561c93de5e7a.png)


