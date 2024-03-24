const express = require('express');
const router = express.Router();
const places = require('../models/places.js');

if (!places.every(place => place.hasOwnProperty('id'))) {
    places.forEach((place, index) => {
        place.id = index + 1;
    });
}

function findPlace(req, res, next) {
    const id = parseInt(req.params.id, 10); 
    if (isNaN(id) || id < 0 || id >= places.length) {
        return res.render('error404'); 
    }
    res.locals.place = places[id];
    next();
}

router.post('/', (req, res) => {
    let newId = places.length > 0 ? Math.max(...places.map(place => place.id)) + 1 : 1;
    let newPlace = {
        id: newId,
        name: req.body.name,
        pic: req.body.pic || 'images/sushi-cat.jpg',
        city: req.body.city || 'Anytown',
        state: req.body.state || 'USA',
        cuisines: req.body.cuisines
    };
    places.push(newPlace);
    res.redirect('/places');
});

router.get('/new', (req, res) => {
    res.render('places/new');
});

router.get('/', (req, res) => {
    res.render('places/index', { places });
});

router.get('/:id', findPlace, (req, res) => {
    res.render('places/show', { place: res.locals.place, id: req.params.id });
});

router.get('/:id/edit', findPlace, (req, res) => {
    res.render('places/edit', { place: res.locals.place });
});

router.put('/:id', findPlace, (req, res) => {
    const id = parseInt(req.params.id, 10);
    const index = places.findIndex(place => place.id === id);
    if (index !== -1) {
        places[index] = { ...places[index], ...req.body };
        res.redirect(`/places/${id}`);
    } else {
        res.render('error404');
    }
});

router.delete('/:id', findPlace, (req, res) => {
    const id = parseInt(req.params.id, 10);
    const index = places.findIndex(place => place.id === id);
    if (index !== -1) {
        places.splice(index, 1);
        res.redirect('/places');
    } else {
        res.render('error404');
    }
});

module.exports = router;