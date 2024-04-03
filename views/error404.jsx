const React = require('react');
const Def = require('./default');

function Error404() {
    return (
        <Def>
            <head>
                <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
            </head>
            <main>
                <h1>404: Page Not Found</h1>
                <p>Oops, we can't seem to find the page you're looking for.</p>
                <div>
                    <img src="/images/404-cat.jpg" alt="A sleeping cat" />
                </div>
            </main>
        </Def>
    );
}

module.exports = Error404;
