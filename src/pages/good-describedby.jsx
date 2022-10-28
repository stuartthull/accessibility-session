import React, { Fragment } from 'react';

function GoodDescribe() {
    return (
        <Fragment>
            <h1 aria-hidden="true">Described by</h1>
            <div>
                <label id="expLabel" htmlFor="expire">Expiration date:</label>
                <span>
                  <input type="text" name="expire" id="expire" aria-labelledby="expLabel" aria-describedby="expDesc"/>
                  <p id="expDesc">Use this format MM/YYYY</p>
                </span>
            </div>
            <div>
                <button aria-label="Close" aria-describedby="descriptionClose"
                        onClick="myDialog.close()">X
                </button>

                <div id="descriptionClose">Closing this window will discard any information entered and
                    return you back to the main page
                </div>
            </div>
        </Fragment>
    );
}

export default GoodDescribe;