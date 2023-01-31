import React, { useState } from 'react';
import '../App.css';

import '../css/bootstrap.min.css';
import '../css/tiny-slider.css';
import '../css/glightbox.min.css';
import '../css/style.css';

import Logo from '../assets/white-logo.svg'
import AboutImage1 from '../assets/about-img1.jpg'
import HeroImage from '../assets/hero-image.jpg'
import Of1 from '../assets/pf1.jpg'
import Of2 from '../assets/pf2.jpg'
import Of3 from '../assets/pf3.jpg'

import Team1 from '../assets/team-1.jpg'
import Team2 from '../assets/team-2.jpg'
import Team3 from '../assets/team-3.jpg'


const GoodPage = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <span className="good-page">
            <section className="navbar-area navbar-nine sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg">
                                <a className="navbar-brand" href="https://www.autotrader.co.uk">
                                    <img src={Logo} alt="Our logo"/>
                                </a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarNine" aria-controls="navbarNine" aria-expanded="false"
                                        aria-label="Toggle navigation" onClick={() => setToggle(!toggle)}>
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                </button>
                                <div className={toggle ? 'show collapse navbar-collapse sub-menu-bar' :'collapse navbar-collapse sub-menu-bar'} id="navbarNine">
                                    <ul className="navbar-nav me-auto" role="menubar">
                                        <li className="nav-item" role="menuitem">
                                            <a className="page-scroll" href="#hero-area">Home</a>
                                        </li>
                                        <li className="nav-item" role="menuitem">
                                            <a className="page-scroll" href="#portfolio">Portfolio</a>
                                        </li>
                                        <li className="nav-item" role="menuitem">
                                            <a className="page-scroll" href="#team">Team</a>
                                        </li>
                                        <li className="nav-item" role="menuitem">
                                            <a className="page-scroll" href="#contact">Contact</a>
                                        </li>
                                    </ul>
                                </div>

                            </nav>

                        </div>
                    </div>

                </div>

            </section>

            <section id="hero-area" className="header-area header-eight">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="header-content">
                                <h1>Accessibility good page.</h1>
                                <p>
                                    We are a digital agency that helps brands to achieve their
                                    business outcomes. We see technology as a tool to create amazing
                                    things.
                                </p>
                                <div className="button">
                                    <a href="somelink.html" target="_blank" className="btn primary-btn">
                                        Get Started
                                        <span className="visuallyhidden">. This will open a new browser window tab</span>
                                    </a>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="header-image">
                                <img src={HeroImage} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="about-area about-five">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12">
                            <div className="about-image-five">
                                <img src={AboutImage1} alt="Laptop on a work desk"/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="about-five-content">
                                <p className="small-title text-lg">OUR STORY</p>
                                <h2 className="main-title fw-bold">Our team comes with the experience and knowledge</h2>
                                <div className="about-five-tab">
                                    <div className="tab-content" id="nav-tabContent">
                                        <div className="tab-pane fade show active" id="nav-who">
                                            <p>It is a long established fact that a reader will be distracted by the
                                                readable content of a page
                                                when
                                                looking at its layout. The point of using Lorem Ipsum is that it has a
                                                more-or-less normal
                                                distribution of letters, look like readable English.</p>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the
                                                majority have in some
                                                form,
                                                by injected humour.</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


            <section id="portfolio" className="portfolio-area portfolio-three">

                <div className="section-title-five">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="content">
                                    <p>Our Portfolio</p>
                                    <h2 className="fw-bold">Our Recent Works</h2>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available,
                                        but the majority have suffered alteration in some form.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="container">
                    <div className="row grid">
                        <div className="col-lg-4 col-sm-6 branding-3 planning-3" data-filter="branding">
                            <div className="portfolio-style-three">
                                <div className="portfolio-image">
                                    <img src={Of1} alt="Jenny and Joan looking at their laptop"/>

                                </div>
                                <div className="portfolio-text">
                                    <h3 className="portfolio-title">
                                        <a href="somelink1.html">Graphics Design</a>
                                    </h3>
                                    <p className="text">
                                        Short description for the ones who look for something new.
                                        Awesome!
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 col-sm-6" data-filter="research">
                            <div className="portfolio-style-three">
                                <div className="portfolio-image">
                                    <img src={Of2} alt="Man and woman using a point of sale device"/>

                                </div>
                                <div className="portfolio-text">
                                    <h3 className="portfolio-title">
                                        <a href="somelink2.html">Web Development</a>
                                    </h3>
                                    <p className="text">
                                        Short description for the ones who look for something new.
                                        Awesome!
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 col-sm-6" data-filter="marketing">
                            <div className="portfolio-style-three">
                                <div className="portfolio-image">
                                    <img src={Of3} alt="One of our app developers using a laptop"/>

                                </div>
                                <div className="portfolio-text">
                                    <h3 className="portfolio-title">
                                        <a href="somelink3.html">App Development</a>
                                    </h3>
                                    <p className="text">
                                        Short description for the ones who look for something new.
                                        Awesome!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="team" className="team-area">

                <div className="section-title-five">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="content">
                                    <p>Our Team</p>
                                    <h2 className="fw-bold">Our Creative Team</h2>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available,
                                        but the majority have suffered alteration in some form.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="team-style-six text-center">
                                <div className="team-image">
                                    <img src={Team1} alt="Our art director Jeffery Riley"/>
                                </div>
                                <div className="team-content">
                                    <div className="team-social">

                                    </div>
                                    <h3 className="team-name">Jeffery Riley</h3>
                                    <span className="sub-title">Art Director</span>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="team-style-six text-center">
                                <div className="team-image">
                                    <img src={Team2} alt="Our web developer Riley Beata"/>
                                </div>
                                <div className="team-content">
                                    <div className="team-social">

                                    </div>
                                    <h3 className="team-name">Riley Beata</h3>
                                    <span className="sub-title">Web Developer</span>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="team-style-six text-center">
                                <div className="team-image">
                                    <img src={Team3} alt="Our UX designer Mark Alone"/>
                                </div>
                                <div className="team-content">
                                    <div className="team-social">

                                    </div>
                                    <h3 className="team-name">Mark Alone</h3>
                                    <span className="sub-title">UX Designer</span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </section>


            <section id="contact" className="call-action">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-9">
                            <div className="inner-content">
                                <h2>We love to make perfect <br/>solutions for your business</h2>
                                <table border="1" cellPadding="8" className='dark-table'>
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
                                <p>
                                    Why I say old chap that is, spiffing off his nut cor blimey
                                    guvnords geeza<br/>
                                    bloke knees up bobby, sloshed arse William cack Richard. Bloke
                                    fanny around chesed of bum bag old lost the pilot say there
                                    spiffing off his nut.
                                </p>
                                <div className="light-rounded-buttons">
                                    <a href="somelink4.html" className="btn primary-btn-outline">Get Started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="pizza" className="team-area">

                <div className="section-title-five">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="content">
                                    <p>Our Pizza</p>
                                    <p className="fw-bold h2">Our Pizza Making</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <form>
                    <div className="container">
                        <fieldset>
                            <legend className="fw-bold">Select your pizza toppings:</legend>
                        <div className="row">

                            <div className="col-lg-4 col-sm-6">
                                <label htmlFor="ham">Ham</label>
                                <input id="ham" type="checkbox" name="toppings" value="ham" />
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <label htmlFor="pepperoni">Pepperoni</label>
                                <input id="pepperoni" type="checkbox" name="toppings" value="pepperoni" />
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <label htmlFor="mushrooms">Mushrooms</label>
                                <input id="mushrooms" type="checkbox" name="toppings" value="mushrooms" />
                            </div>

                        </div>
                            </fieldset>
                    </div>

                    <div className="container">
                        <fieldset>
                                <legend className="fw-bold">Choose a shipping method:</legend>
                                <div className="row">

                                <div className="col-lg-4 col-sm-6">
                                    <label htmlFor="1hour">1 hour</label>
                                    <input id="1hour" type="radio" name="shipping" value="2 hour" />
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <label htmlFor="2hour">2 hour</label>
                                    <input id="2hour" type="radio" name="shipping" value="1 hour" />
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <label htmlFor="pickup">Pick up</label>
                                    <input id="pickup" type="radio" name="shipping" value="pick up" />
                                </div>
                            </div>
                            </fieldset>
                    </div>
                    <br /><br />
                    <p>
                        <button type="submit" className="btn primary-btn-outline">Continue</button>
                    </p>
                </form>
            </section>
        </span>
    );
}

export default GoodPage;