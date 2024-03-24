const router = require('express').Router();
const db = require('../models');

router.get('/', (req, res) => {
    db.Place.find()
        .then((places) => {
            res.render('places/index', { places });
        })
        .catch(err => {
            console.error(err);
            res.render('error404');
        });
});

router.get('/new', (req, res) => {
    res.render('places/new');
});

router.post('/', (req, res) => {
    db.Place.create(req.body)
        .then(() => {
            res.redirect('/places');
        })
        .catch(err => {
            console.error('Error creating place:', err);
            res.render('error404');
        });
});

router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
        .then(place => {
            res.render('places/show', { place });
        })
        .catch(err => {
            console.error('Error showing place:', err);
            res.render('error404');
        });
});

router.get('/:id/edit', (req, res) => {
    db.Place.findById(req.params.id)
        .then(place => {
            res.render('places/edit', { place });
        })
        .catch(err => {
            console.error('Error loading edit form:', err);
            res.render('error404');
        });
});

router.put('/:id', (req, res) => {
    db.Place.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(() => {
            res.redirect(`/places/${req.params.id}`);
        })
        .catch(err => {
            console.error('Error updating place:', err);
            res.render('error404');
        });
});

router.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect('/places');
        })
        .catch(err => {
            console.error('Error deleting place:', err);
            res.render('error404');
        });
});

router.post('/:id/rant', (req, res) => {
    db.Place.findById(req.params.id)
        .then(place => {
            place.rants.push(req.body); 
            return place.save();
        })
        .then(() => {
            res.redirect(`/places/${req.params.id}`);
        })
        .catch(err => {
            console.error('Error adding rant:', err);
            res.render('error404');
        });
});

router.delete('/:id/rant/:rantId', (req, res) => {
    db.Place.findById(req.params.id)
        .then(place => {
            res.redirect(`/places/${req.params.id}`);
        })
        .catch(err => {
            console.error('Error deleting rant:', err);
            res.render('error404');
        });
});

module.exports = router;
