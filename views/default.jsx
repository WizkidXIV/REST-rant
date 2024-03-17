const React = require('react');

function Def({ children }) {
    return (
        <html>
            <head>
                <title>Title</title>
                {/* Include Bootstrap CSS from CDN */}
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3pQir5bZr7+UdhAXP9v+O5y5auF6TX5Qp6L+gAoMwIlgIeYwUOaE5YJnX" crossorigin="anonymous" />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}

module.exports = Def;
