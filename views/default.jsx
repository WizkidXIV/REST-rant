const React = require('react');

function Def(props) {
    return (
        <html>
            <head><title>My App</title></head>
            <body>{props.children}</body>
        </html>
    );
}

module.exports = Def;
