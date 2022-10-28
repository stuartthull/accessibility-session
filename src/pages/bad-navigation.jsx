import React, { Fragment } from 'react';
/* eslint no-use-before-define: 0 */
function BadNavigation() {
    return (
        <Fragment>
            <h1 aria-hidden="true">Bad Navigation</h1>
            <p><a href="#">Home</a></p>

            <p><a href="#">About us</a></p>

            <p><a href="#">Products</a></p>

            <p><a href="#">Contact us</a></p>
            <h2>Some text</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quam tellus, congue id orci id, vestibulum ultrices turpis. Sed tempor iaculis nulla, quis interdum elit ullamcorper quis. Aliquam eget purus tincidunt, finibus odio et, pellentesque nibh. Mauris id justo pulvinar, egestas dui a, finibus odio. Maecenas quis sem a nulla condimentum tristique. Nam auctor, felis vel consequat fringilla, augue nibh porta libero, eu porta sem est et ipsum. Maecenas pharetra semper lectus. Aliquam ac massa at lorem semper gravida. Morbi tristique, lorem ac euismod blandit, felis nisl fringilla diam, sit amet euismod nulla mi sed urna. Duis id iaculis libero. Vestibulum ut congue sapien. Duis pellentesque nunc sed nibh fringilla ornare. Sed eu nunc sed est aliquet congue a eget lorem. Sed id risus ullamcorper tortor rutrum interdum.</p>
        </Fragment>
    );
}

export default BadNavigation;