const React = require('react');
const Def = require('./default'); 

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
