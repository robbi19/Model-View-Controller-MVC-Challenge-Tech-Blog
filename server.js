const express = require("express");
const path = require("path");
const controller = require("./controllers");
const exphbs = require("express-handlebars");
const session = require("express-session");
const SequlizeStore = require("connect-session-sequelize")(session.Store);
const helpers = require('./utils/helpers');
const { sequelize } = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

(async () => {
  try {
    // Ensure the database connection is established
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');

    // Configure session
    const sess = {
        secret: 'super secret secret',
        cookie: {
            maxAge: 60 * 60 * 1000, // Session expires in 1 hour (adjust as needed)
            httpOnly: true,
            secure: false, // Set to 'true' if you use HTTPS
            sameSite: 'strict',
        },
        resave: false,
        saveUninitialized: true,
        store: new SequlizeStore({
            db: sequelize,
        }),
    };

    // Middleware
    app.use(session(sess));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.static(path.join(__dirname, 'public')));

    // Use your controllers/routes
    app.use(controller);

    // Configure Handlebars as the view engine
    const hbs = exphbs.create({ helpers });
    app.engine('handlebars', hbs.engine);
    app.set('view engine', 'handlebars');

    // Start the server
    sequelize.sync({ force: false }).then(() => {
        app.listen(PORT, () => {
            console.log(`Now listening on port ${PORT}`);
        });
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1); // Terminate the application on a database connection error
  }
})();
