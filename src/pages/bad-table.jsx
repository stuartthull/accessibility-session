import React, { Fragment } from 'react';

function BadTable() {
    return (
        <Fragment>
            <div className={'banner'} aria-hidden={'true'}>
                <p>Use arrow keys to move between cells, what do you notice?</p>
            </div>
            <h1 aria-hidden="true">Bad Table</h1>

            <table border="1" cellPadding="8">
                <tr>
                    <td>SUV</td>
                    <td>0-60 MPH Time (Seconds)</td>
                    <td>Fuel Efficiency (MPG)</td>
                </tr>
                <tr>
                    <td>2011 Jeep Compass</td>
                    <td>11.5</td>
                    <td>32</td>
                </tr>
                <tr>
                    <td>2010 Cadillac Escalade</td>
                    <td>6.7</td>
                    <td>12</td>
                </tr>
            </table>
        </Fragment>
    );
}

export default BadTable;