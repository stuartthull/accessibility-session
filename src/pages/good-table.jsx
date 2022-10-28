import React, { Fragment } from 'react';

function GoodTable() {
    return (
        <Fragment>
            <h1 aria-hidden="true">Good Table</h1>

            <table border="1" cellPadding="8">
                <thead>
                <tr>
                    <th>SUV</th>
                    <th>0-60 MPH Time (Seconds)</th>
                    <th>Fuel Efficiency (MPG)</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>2011 Jeep Compass</th>
                    <td>11.5</td>
                    <td>32</td>
                </tr>
                <tr>
                    <th>2010 Cadillac Escalade</th>
                    <td>6.7</td>
                    <td>12</td>
                </tr>
                </tbody>
            </table>
        </Fragment>
    );
}

export default GoodTable;