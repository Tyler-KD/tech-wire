# tech-wire

![GitHub License](https://img.shields.io/badge/license-MIT-default.svg)

## Description

Tech Wire is a full-stack application where developers can publish blog posts and comments on other developers' posts as well.  This project was built from scratch to follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.  It solves the problem of wanting a CMS-style blog site so that articles, blog posts, and thoughts or opinions can be published.  Some things learned throughout Tech Wire were seeing the multitude of ways for targeting ids within handlers, understanding how handlers can collect values from the body of handlebars and send requests to API endpoints, finding how built-in helpers can display pages only if logged in, and recognizing that MVC provides for a better division of labor and improved maintenance through "separation of concerns" between the software's business logic and display.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Video](#video)
* [Deployed Site](#deployed-site)
* [Credits](#credits)
* [Contributing](#contributing)
* [License](#license)
* [Tests](#tests)
* [Features](#features)
* [Questions](#questions)

## Installation

Within the .env file, enter 'root' for DB_USER='' and 'MySQL Root Password' for DB_PASSWORD='.'  This will pprotect the database, MySQL username, and MySQL password to an environmental variable file and connect to a database using Sequelize.  For installing dependencies, run "npm i' within the terminal of the main directory.  Create the schema from the MySQL shell by running "mysql -u root -p" within the termainal.  Enter 'MySQL ROOT Password' for "Enter password:."  Once connected, source the schema.sql with "source db/schema.sql;" inside of MySQL.  This will create the development database.  Enter "Quit" to end the MySQL connection.  Then, seed the database by running "npm run seed."  This will allow routes to be tested within Insomnia.

## Usage

To run this application from the terminal, enter "npm start" to start the server.  The message "tech wire app listening at http://localhost:3001" will display within the console.  Follow the link to open up the URL.  Once the page opens, the homepage displays all blog posts with content, the user, and date created.  In the upper right are navigation links for "Home," "Dashboard," and "Login."  "Home" will redirect back to the homepage.  "Dashboard" will open up a page for logged-in users to create new blogs and see a list of their current blogs.  If logged-out, then clicking "Dashboard" will redirect to the "Login" page.  "Login" will open up a Login and Signup page.  After making a username and password with at least 8 characters, the user's information will be saved to the database and log in the user.  From the "Dashboard," create a new blog by entering text within the text boxes for Title and Content.  Click "Create" to create the the new blog post.  In the right column, Current Blogs will populate with each blog created by the logged-in user.  Click one of the user's blogs underneath Current Blogs to open up an Edit Blog page.  Here, the title and content can be updated by entering new text within Title and Content.  Click "Update" to update the blog.  Click "DELETE" to delete the blog.  Back in the homepage, click on one of the blog posts from the list of all users to open up that blog post.  Within, the title, content, user, and date created will display as well as all of the Comment History.  Add a comment by entering text within the Add a comment field.  Click "Submit" and the comment will be saved and rendered underneath Comment History with the comment, user, and date created.  If logged out or the cookie session has expired, an alert will display "Failed to create comment" and the user will be redirected to the "Login."  Non logged-in users are allowed to view each blog post.  But they will be redirected to the "Login" if attempting to create a comment, create a blog post, update a blog, or delete a blog.

For running this application within Heroku, open the deployed application URL and follow previous instructions from the homepage.

## Video

N/A

## Deployed Site



## Credits

[Session Management using express-session](https://www.geeksforgeeks.org/session-management-using-express-session-module-in-node-js/)

[Cookie and Session (II)](https://medium.com/@alysachan830/cookie-and-session-ii-how-session-works-in-express-session-7e08d102deb8)

[Built-in Helpers](https://handlebarsjs.com/guide/builtin-helpers.html#if)

[Validations & Constraints | Sequelize](https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/)

[textarea: Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)

[Spacing * Bootstrap](https://getbootstrap.com/docs/4.0/utilities/spacing/)

[JS Window Location](https://www.w3schools.com/js/js_window_location.asp)

[Location: pathname property](https://developer.mozilla.org/en-US/docs/Web/API/Location/pathname)

[JS String split() Method](https://www.w3schools.com/jsref/jsref_split.asp)

[Optional chaining (?.) - JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

[HTML Special Character Codes - Search Emojis](https://html-css-js.com/html/character-codes/)

[HTML Emojis](https://www.w3schools.com/Html/html_emojis.asp)

Code taken from Module #14 Activities: 20-Stu_Middleware and 28-Stu_Mini-Project: Crowdfunding App

## Contributing

N/A

## License

MIT License

Copyright (c) 2024 Tyler-KD

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

* (https://choosealicense.com/licenses/mit/)

## Tests

N/A

## Features

Node.js, npm (node package manager), bcrypt 5.1.1, connect-session-sequelize 7.1.7, dotenv 16.4.5, express.js 4.18.2, express-handlebars 7.1.2, express-session 1.18.0, handlebars 4.7.8, MySQL2 3.9.1, nodemon 3.1.0, sequelize 6.37.1, Insomnia Core 8.6.1, bootstrap 5.3.3

## Questions

If you have any questions, please visit [GitHub/Tyler-KD](https://github.com/Tyler-KD) or submit questions to tyler.kd.knapp@gmail.com.