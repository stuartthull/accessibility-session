import React, { Fragment } from 'react';

function BadList() {
    return (
        <Fragment>
            <div className={'banner'} aria-hidden={'true'}>
                <p>Why is this list information not useful?</p>
            </div>
            <h1 aria-hidden="true">Poorly created lists</h1>
            <p>The most popular types of cheese are:</p>
            <p>Mozzarella <br />
                Parmesan <br />
                Cheddar <br />
                Brie <br />
                Swiss <br />
                Gruyere <br />
                Feta <br />
                Gouda <br />
                Provolone <br />
                Monterey jack <br />
            </p>
            <p><a href="/">More</a></p>

            <p>
                This could be some text about cheese, but what was the link above for?
            </p>
        </Fragment>
    );
}

export default BadList;