import React, { Fragment } from 'react';

function BadDescribe() {
    return (
        <Fragment>
            <div className={'banner'} aria-hidden={'true'}>
                <p>What do think is missing from the markup?</p>
            </div>
            <h1 aria-hidden="true">Described by</h1>

            <div>
                <p>Expiration date:</p>
                <span>
                  <input type="text" />
                  <p>Use this format MM/YYYY</p>
                </span>
            </div>
            <div>
                <button>X</button>

                <p>Closing this window will discard any information entered and
                    return you back to the main page</p>

            </div>

        </Fragment>
    );
}

export default BadDescribe;