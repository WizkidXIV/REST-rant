// app.js or index.js

const express = require('express');
const app = express();
const path = require('path');
const placesRouter = require('./controllers/places'); // Adjust the path to your places router file

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

// Define other routes...

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
