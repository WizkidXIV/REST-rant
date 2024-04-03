require('dotenv').config()
const express = require('express');
const methodOverride = require('method-override');
const app = express();
const path = require('path');
const placesRouter = require('./controllers/places');


// Set up override for put/delete methods 
app.use(methodOverride('_method'));

// Set up to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Set up static files
app.use(express.static(path.join(__dirname, 'public')));

// Set the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Use the places router for all requests starting with '/places'
app.use('/places', placesRouter);

// Define a root route handler
app.get('/', (req, res) => {
    res.render('home'); 
});

app.get('*', (req, res) => {
    res.render('error404');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

module.exports = app;
