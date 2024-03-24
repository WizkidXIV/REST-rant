const React = require('react');
const Def = require('../default.jsx');

function edit_form(data) {
    const actionPath = `/places/${data.place.id}?_method=PUT`;

    return (
        <Def>
            <main>
                <h1>Edit Place</h1>
                <form method="POST" action={actionPath}>
                    <input type="hidden" name="_method" value="PUT" />
                    <div className="form-group">
                        <label htmlFor="name">Place Name</label>
                        <input
                            className="form-control"
                            id="name"
                            name="name"
                            defaultValue={data.place.name}
                            required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic">Place Picture</label>
                        <input
                            className="form-control"
                            id="pic"
                            name="pic"
                            defaultValue={data.place.pic || ''}
                            type="text" />  
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input
                            className="form-control"
                            id="city"
                            name="city"
                            defaultValue={data.place.city || ''}
                            type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input
                            className="form-control"
                            id="state"
                            name="state"
                            defaultValue={data.place.state || ''}
                            type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input
                            className="form-control"
                            id="cuisines"
                            name="cuisines"
                            defaultValue={data.place.cuisines}
                            required
                            type="text" />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Save Changes" />
                </form>
            </main>
        </Def>
    );
}

module.exports = edit_form;
