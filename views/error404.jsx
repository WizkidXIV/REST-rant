// views/error404.jsx
const React = require('react');
const Def = require('./default'); // Assuming you have a default layout

function Error404() {
    return (
        <Def>
            <main>
                <h1>404: Page Not Found</h1>
                <p>Oops, we can't seem to find the page you're looking for.</p>
            </main>
        </Def>
    );
}

module.exports = Error404;
