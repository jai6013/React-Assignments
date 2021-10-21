import React from "react";

const initState = {
    "id": "",
    "restaurantName": "",
    "image": "",
    "cost_for_one": 0,
    "cost_for_two": 0,
    "min": 0,
    "reviews": 0,
    "votes": 0,
    "rating": 0,
    "categories": [],
    "payment": {
        "card": false,
        "upi": false,
        "cash": false
    }
}

export default function Form({ form, setForm, resData, setResData }) {
    console.log("form", form);
    console.log("resData", resData);

    const [newData, setNewData] = React.useState(initState);
    const [id, setId] = React.useState(81);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            let temp = newData.payment;
            if (checked) {
                temp[value] = true;
                setNewData({ ...newData, payment: temp });
            } else {
                temp[value] = false;
                setNewData({ ...newData, payment: temp });
            }
        } else if (name === "categories") {
            let temp = value.split(",".trim());
            setNewData({ ...newData, [name]: temp });
        } else {
            setNewData({ ...newData, [name]: value });
        }

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setNewData({ ...newData, id: id });
        setId(id + 1);
        setResData([newData,...resData]);
        alert("Restaurant added successfuly");
        setNewData({ ...newData, initState });
        setForm(false);
    };

    return form ? (
        <div className='formPage'>
            <form onSubmit={handleSubmit}>
                <div className="formFields">
                    <div>
                        <div className="singleField">
                            <label>Restaurant Name</label>
                            <br />
                            <input
                                placeholder="Restaurant Name"
                                type="text"
                                name="restaurantName"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="singleField">
                            <label>Image URL</label>
                            <br />
                            <input
                                placeholder="Image URL"
                                type="url"
                                name="image"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="singleField">
                            <label>Food Cuisine</label>
                            <br />
                            <input
                                placeholder="Seperate different cuisines by leaving a space"
                                type="text"
                                name="categories"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="singleField">
                            <label>Minimum amount</label>
                            <br />
                            <input
                                placeholder="Enter minimum food item amount"
                                type="number"
                                name="min"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="singleField">
                            <label>Cost for one</label>
                            <br />
                            <input
                                placeholder="Enter Cost for 1 Person"
                                type="number"
                                name="cost_for_one"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="singleField">
                            <label>Cost for two</label>
                            <br />
                            <input
                                placeholder="Enter Cost for 2 People"
                                type="text"
                                name="cost_for_two"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="singleField">
                            <label>Rating</label>
                            <br />
                            <input
                                placeholder="Rate between 1-5"
                                type="number"
                                name="rating"
                                onChange={handleChange}
                                required
                            />
                            <div className="singleField">
                                <label>Total Reviews</label>
                                <br />
                                <input
                                    placeholder="Total Reviews"
                                    type="number"
                                    name="reviews"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="singleField">
                            <label>Total Votes</label>
                            <br />
                            <input
                                placeholder="Enter total number of votes"
                                type="text"
                                name="votes"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="singleField payField">
                            <label>Payment Method</label>
                            <br />
                            <input
                                type="checkbox"
                                name="payment"
                                value="cash"
                                onChange={handleChange}
                            /> Cash &nbsp;&nbsp;&nbsp;
                            <input
                                type="checkbox"
                                name="payment"
                                value="card"
                                onChange={handleChange}
                            /> Card &nbsp;&nbsp;&nbsp;
                            <input
                                type="checkbox"
                                name="payment"
                                value="upi"
                                onChange={handleChange}
                            /> UPI
                        </div>
                        <div className="singleField form-btn">
                            <button className="submit" type="submit">Submit</button>
                            <button className="reset" type="reset">Reset</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    ) : null;
}