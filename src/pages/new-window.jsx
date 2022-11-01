import React, { Fragment } from 'react';

function NewWindow() {
    return (
        <Fragment>
            <h1 aria-hidden="true">New window warning</h1>
            <p>This is an
                <a className="info" href="index.html" target="_blank">
                    external link
                    <span className="visuallyhidden">This opens a new window</span>
                </a>
            </p>
        </Fragment>
    );
}

export default NewWindow;