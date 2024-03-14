// views/home.jsx
const React = require('react');
const Def = require('./default'); // Assuming you have a default layout

function Home() {
    return (
        <Def>
            <main>
                <h1>Welcome Home</h1>
                <p>This is the home page.</p>
            </main>
        </Def>
    );
}

module.exports = Home;
