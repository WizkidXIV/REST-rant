const React = require('react');

function Def({ children }) {
    return (
        <html>
            <head>
                <title>Title</title>
                {/* Include Bootstrap CSS from CDN */}
                <link
                    rel="stylesheet"
                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
                    integrity="sha384-JcKb8q3pQir5bZr7+UdhAXP9v+O5y5auF6TX5Qp6L+gAoMwIlgIeYwUOaE5YJnX"
                    crossOrigin="anonymous"
                />
                <link rel="stylesheet" href="/css/style.css" />
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/places">Places</a>
                        </li>
                        <li>
                            <a href="/places/new">Add Place</a>
                        </li>
                    </ul>
                </nav>
                {children}
            </body>
        </html>
    );
}

module.exports = Def;
