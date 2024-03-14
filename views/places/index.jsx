let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'http://placekitten.com/250/250'
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'http://placekitten.com/250/250'
}];


app.get('/', (req, res) => {
    res.render('places/index', { places: places });
});


const React = require('react');
const Def = require('../../default'); 

function Index(props) {
    let placesFormatted = props.places.map((place, index) => {
        return (
            <div key={index}>
                <h2>{place.name}</h2>
                <p>{place.city}, {place.state} - {place.cuisines}</p>
                <img src={place.pic} alt={place.name} />
            </div>
        );
    });

    return (
        <Def>
            <main>
                <h1>Places Index Page</h1>
                {placesFormatted}
            </main>
        </Def>
    );
}

module.exports = Index;
