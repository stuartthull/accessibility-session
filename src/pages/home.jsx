import React from 'react';
import {Link} from "react-router-dom";
import '../App.css';

function Home() {
    return (
        <ul>
            {/*<li style={{marginBottom:'16px'}}>*/}
            {/*    <Link to="/">Home</Link>*/}
            {/*</li>*/}

            <li>
                <Link to="/bad-page">Accessibility Test Page</Link>
            </li>

            <li>
                <Link to="/good-page">Good</Link>
            </li>

            {/*<li style={{marginBottom:'16px'}}>*/}
            {/*    <Link to="/adaptable">Adaptable Content</Link>*/}
            {/*</li>*/}

            {/*<li>*/}
            {/*    <Link to="/bad-headers">Bad Headers</Link>*/}
            {/*</li>*/}


            {/*<li>*/}
            {/*    <Link to="/bad-navigation">Bad Navigation</Link>*/}
            {/*</li>*/}

            {/*<li>*/}
            {/*    <Link to="/bad-form">Bad Form</Link>*/}
            {/*</li>*/}

            {/*<li>*/}
            {/*    <Link to="/bad-list">Bad List</Link>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*    <Link to="/bad-describeby">Bad DescribeBy</Link>*/}
            {/*</li>*/}
            {/*<li style={{marginBottom:'16px'}}>*/}
            {/*    <Link to="/bad-table">Bad Table</Link>*/}
            {/*</li>*/}

            {/*<li>*/}
            {/*    <Link to="/good-headers">Good Headers</Link>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*    <Link to="/good-navigation">Good Navigation</Link>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*    <Link to="/good-form">Good Form</Link>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*    <Link to="/good-list">Good List</Link>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*    <Link to="/good-table">Good Table</Link>*/}
            {/*</li>*/}
            {/*<li style={{marginBottom:'16px'}}>*/}
            {/*    <Link to="/good-describeby">Good DescribeBy</Link>*/}
            {/*</li>*/}

            {/*<li>*/}
            {/*    <Link to="/new-window">New Window</Link>*/}
            {/*</li>*/}
            </ul>
    );
}

export default Home;