import React, { Fragment } from 'react';

function GoodForm() {
    return (
        <Fragment>
            <h1 aria-hidden="true">Well created forms</h1>
            <div>
                <form>
                    <p>
                        <label htmlFor="name">Your full name:</label>
                        <input id="name" type="text" />
                    </p>
                    <h2>Build pizza</h2>
                    <fieldset>
                        <legend>Select your pizza toppings:</legend>
                        <input id="ham" type="checkbox" name="toppings" value="ham" />
                        <label htmlFor="ham">Ham</label><br />
                        <input id="pepperoni" type="checkbox" name="toppings" value="pepperoni" />
                        <label htmlFor="pepperoni">Pepperoni</label><br />
                        <input id="mushrooms" type="checkbox" name="toppings" value="mushrooms" />
                        <label htmlFor="mushrooms">Mushrooms</label><br />
                        <input id="olives" type="checkbox" name="toppings" value="olives" />
                        <label htmlFor="olives">Olives</label>
                    </fieldset>
                    <h2>Ship your pizza</h2>
                    <fieldset>
                        <legend>Choose a shipping method:</legend>
                        <input id="1hour" type="radio" name="shipping" value="2 hour" />
                        <label htmlFor="1hour">1 hour</label><br />
                        <input id="2hour" type="radio" name="shipping" value="1 hour" />
                        <label htmlFor="2hour">2 hour</label><br />
                        <input id="pickup" type="radio" name="shipping" value="pick up" />
                        <label htmlFor="pickup">Pick up</label>
                    </fieldset>
                    <h2>Your favorite pizza base</h2>
                    <label htmlFor="favcity2">Select a base</label>
                    <select id="favcity2" name="favcity2">
                        <option value="3">Stuffed crust</option>
                        <option value="3">Thin and crispy</option>
                        <option value="3">Deep pan</option>
                    </select>
                    <p>
                        <button type="submit">Submit your form</button>
                    </p>
                </form>

            </div>
        </Fragment>
    );
}

export default GoodForm;