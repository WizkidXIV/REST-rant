// views/default.jsx
const React = require('react');

function Def(html) {
    return (
        <html>
            <head>
                <title>My App</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    );
}

module.exports = Def;
