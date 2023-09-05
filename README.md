# Tech-Blog

# Description
Writing about tech can be just as important as making it.

# Table of Contents
  * [Development](#Development)
  * [Acceptance Criteria](Acceptance-Criteria)
  * [Installation](Installation)
  * [Screen Recording](#Screen-Recording)
  * [Questions](#Questions)
  * [Application](#Application)

# Development

The frontend of this project was already provided in our initial setup environment.

This application is hosted and deployed on [Heroku](https://www.heroku.com). For the database, I used [Sequelize](https://sequelize.org/master/).

For server development we used [Express](https://expressjs.com/). 

For development this project used [dotenv package](https://www.npmjs.com/package/dotenv) for environment variables, the [bcrypt package](https://www.npmjs.com/package/bcrypt) to hash passwords, and the [express-session](https://www.npmjs.com/package/express-session) and [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) packages to add authentication.


# Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the page for more than a set time
THEN I am automatically signed out of the site 
```

# Installation 

Fork this project to run on your local browser.

Inside the package.json, you will see the necessary dependancies you need to install.

To do so, run:
### `npm install`

The models, and routes will be set up in their respective folders. You will just need to seed the database.

To seed the database, run the script 
### `npm run seed`

After the database is seeded, run the sctipt 
### `npm run start` 

This will start the server for your browser to use. The console should display:

### `Now listening` 


# Screen Recording

Example of how deployed application should run:


# Application
Deploy:



# Model-View-Controller-MVC-Challenge-Tech-Blog
