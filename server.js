// Dependencies
// Import path module
const path = require('path');
// Import Express.js
const express = require('express');

const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Import routes
const routes = require('./controllers');
// Import sequelize connection
const sequelize = require('./config/connection');
// Import the custom helper methods
const helpers = require('./utils/helpers');

// Initialize an instance of Express.js
const app = express();
// Specify which port the Express.js server will run.
// process.env.PORT stores the port number on which a web server should listen for incoming connections.
const PORT = process.env.PORT || 3001;

// Setting the session middleware.
// Server creates a session for tracking the user, including the data in the requests and responses between the client and server.
const sess = {
  // It holds the secret key for session
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  // Forces the session to be saved back to the session store
  // It will not rewrite the req.session.cookie object.  The initial req.session.cookie remains as it is.
  resave: false,
  // Forces a session that is "uninitialized" to be saved to the store
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// Session Setup
app.use(session(sess));

// Incorporate the custom helper methods
const hbs = exphbs.create({ helpers });

// Set Handlebars as the default template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Turn on routes
app.use(routes);

// Sync sequelize models to the database, then turn on the server
// listen() method is responsible for listening for incoming connections on the specified port
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening at Port 3001'));
});