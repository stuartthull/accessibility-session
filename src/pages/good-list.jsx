import React, { Fragment } from 'react';

function GoodList() {
    return (
        <Fragment>
            <h1 aria-hidden="true">Well created lists</h1>
            <h2>The most popular types of cheese are:</h2>
            <ul>
                <li>Mozzarella</li>
                <li>Parmesan</li>
                <li>Cheddar</li>
                <li>Brie</li>
                <li>Swiss</li>
                <li>Gruyere</li>
                <li>Feta</li>
                <li>Gouda</li>
                <li>Provolone</li>
                <li>Monterey jack</li>
            </ul>
            <p><a href="/">Click to see more cheese</a></p>
        </Fragment>
    );
}

export default GoodList;