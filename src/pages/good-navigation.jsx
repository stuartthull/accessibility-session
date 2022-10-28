import React, { Fragment } from 'react';

function BadNavigation() {
    return (
        <Fragment>
            <h1 aria-hidden="true">Good Navigation</h1>
            <nav aria-labelledby="mainmenulabel" role="navigation" aria-hidden="false">
                <h2 id="mainmenulabel" className="visuallyhidden">Main Menu</h2>
                <ul role="menu">
                    <li role="none">
                        <a href="#" role="menuitem">Home</a>
                    </li>
                    <li role="none">
                        <a href="#" role="menuitem">About us</a>
                    </li>
                    <li role="none">
                        <a href="#" role="menuitem">Products</a>
                    </li>
                    <li role="none">
                        <a href="#" role="menuitem">Contact us</a>
                    </li>
                </ul>
            </nav>

            <h2>Some text</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quam tellus, congue id orci id, vestibulum
                ultrices turpis. Sed tempor iaculis nulla, quis interdum elit ullamcorper quis. Aliquam eget purus
                tincidunt, finibus odio et, pellentesque nibh. Mauris id justo pulvinar, egestas dui a, finibus odio.
                Maecenas quis sem a nulla condimentum tristique. Nam auctor, felis vel consequat fringilla, augue nibh
                porta libero, eu porta sem est et ipsum. Maecenas pharetra semper lectus. Aliquam ac massa at lorem
                semper gravida. Morbi tristique, lorem ac euismod blandit, felis nisl fringilla diam, sit amet euismod
                nulla mi sed urna. Duis id iaculis libero. Vestibulum ut congue sapien. Duis pellentesque nunc sed nibh
                fringilla ornare. Sed eu nunc sed est aliquet congue a eget lorem. Sed id risus ullamcorper tortor
                rutrum interdum.</p>
        </Fragment>
    );
}

export default BadNavigation;