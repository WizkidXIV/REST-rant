// controllers/places.js

const express = require('express');
const router = express.Router();
const places = require('../models/places.js')

router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
        // Default image if one is not provided
        req.body.pic = 'images/sushi-cat.jpg'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
})


// GET route to display the form for a new place
router.get('/new', (req, res) => {
    res.render('places/new'); 
});

// GET route for the main list of places
router.get('/', (req, res) => {
    res.render('places/index', { places });
});

module.exports = router;
