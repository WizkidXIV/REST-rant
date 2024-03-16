const React = require('react');
const Def = require('./default'); 

function Home() {
    return (
        <Def>
            <main>
                <h1>Welcome Home</h1>
                <p>This is the home page.</p>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    );
}

module.exports = Home;


