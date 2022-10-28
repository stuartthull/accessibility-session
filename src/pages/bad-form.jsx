import React, { Fragment } from 'react';

function BadForm() {
    return (
        <Fragment>
            <h1 aria-hidden="true">Bad created forms</h1>
            <div>
                <form>
                    <p>
                        <label>Name:</label>
                        <input type="text" />
                    </p>
                    <p>Select your pizza toppings:</p>
                    <input type="checkbox" name="toppings" value="ham" />
                        <p>Ham</p><br />
                        <input type="checkbox" name="toppings" value="pepperoni" />
                            <p>Pepperoni</p><br />
                            <input type="checkbox" name="toppings" value="mushrooms" />
                                <p>Mushrooms</p><br />
                                <input type="checkbox" name="toppings" value="olives" />
                                    <p>Olives</p>
                                    <p>Choose a shipping method:</p>


                    <input type="radio" name="shipping" value="2 hour" />
                                        <p>1 hour</p><br />
                                        <input type="radio" name="shipping" value="1 hour" />
                                            <p>2 hour</p><br />
                                            <input type="radio" name="shipping" value="pick up" />
                                                <p>Pick up</p>
                                                <p>Which is your favorite pizza base?</p>
                                                <br />
                                                <p>Select below</p>
                                                <select>
                                                    <option value="3">Stuffed crust</option>
                                                    <option value="3">Thin and crispy</option>
                                                    <option value="3">Deep pan</option>
                                                </select>

                                                <p>
                                                    <button type="submit">Continue</button>
                                                </p>
                </form>

            </div>        </Fragment>
    );
}

export default BadForm;