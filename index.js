require('dotenv').config();
const express = require('express');
const app = express();

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use('/places', require('./controllers/places'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('*', (req, res) => {
    res.render('error404');
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
