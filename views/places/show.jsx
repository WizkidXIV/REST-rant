const React = require('react');
const Def = require('../default');

function show(data) {
    const actionPath = `/places/${data.place.id}/comment`;

    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    );
    if (data.place.comments.length) {
        comments = data.place.comments.map((c, index) => (
            <div key={index} className="border">
                <h2 className={c.rant ? 'text-danger' : 'text-success'}>{c.rant ? 'Rant!' : 'Rave!'}</h2>
                <h4>{c.content}</h4>
                <h3>
                    <strong>- {c.author}</strong>
                </h3>
                <h4>Rating: {c.stars}</h4>
            </div>
        ));
    }

    return (
        <Def>
            <main>
                <div className="row">
                    <div className="col-sm-6">
                        <img src={data.place.pic} alt={data.place.name} className="img-fluid" />
                        <h3>Located in {data.place.city}, {data.place.state}</h3>
                    </div>
                    <div className="col-sm-6">
                        <h2>Description</h2>
                        <h3>{data.place.showEstablished()}</h3>
                        <h4>Serving {data.place.cuisines}</h4>
                    </div>
                </div>
                <h1>{data.place.name}</h1>
                <div>
                    <h2>Rating</h2>
                    Currently unrated
                </div>
                <div>
                    <h2>Comments</h2>
                    {comments}
                </div>
                <h2>Leave a comment!</h2>
                <form action={actionPath} method="POST" className="form">
                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input type="text" className="form-control" id="author" name="author" placeholder="Anonymous" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <textarea className="form-control" id="content" name="content" rows="3" required></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="stars">Star Rating</label>
                        <input type="number" className="form-control" id="stars" name="stars" step="0.5" min="1" max="5" required />
                    </div>
                    <div className="form-check">
                        <input type="radio" class="form-check-input" id="rant" name="commentType" value="rant" required />
                        <label class="form-check-label" for="rant">Rant</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" class="form-check-input" id="rave" name="commentType" value="rave" />
                        <label class="form-check-label" for="rave">Rave</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">Edit</a>
                <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
                    <input type="hidden" name="_method" value="DELETE" />
                    <button type="submit" className="btn btn-danger">Delete</button>
                </form>
            </main>
        </Def>
    );
}

module.exports = show;
