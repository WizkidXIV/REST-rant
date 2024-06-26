const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def>
            <head>
                <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
            </head>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/chia-drink.jpg" alt="Chia Fruit Shake" />
                    Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home
