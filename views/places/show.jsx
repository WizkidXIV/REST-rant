const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                <div>
                    <h2>Rating</h2>
                </div>
                <div>
                    Currently unrated
                </div>
                <div>
                    <h2>Comments</h2>
                </div>
                <div>
                    No comments yet
                </div>
                <a href={`/places/${data.id}/edit`} className="btn btn-danger">
                    Edit
                </a>     
                <form method="POST" action="">
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>         
            </main>
        </Def>
    )
}

module.exports = show
