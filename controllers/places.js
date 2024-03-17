// controllers/places.js

const express = require('express');
const router = express.Router();

// POST route for form submission
router.post('/', (req, res) => {
    console.log(req.body); // Here you would add your logic to save the data
    // For now, let's just redirect to the GET '/places' route
    res.redirect('/places');
});

// GET route to display the form for a new place
router.get('/new', (req, res) => {
    res.render('places/new'); // Make sure you have a 'new.jsx' view in your 'views/places' directory
});

// GET route for the main list of places
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/Wakuda.jpg'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/Gordon-Ramsay.jpg'
    }];
    res.render('places/index', { places }); // Make sure you have an 'index.jsx' view in your 'views/places' directory
});

module.exports = router;
