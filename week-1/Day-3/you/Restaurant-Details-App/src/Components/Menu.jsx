import { React } from 'react';
import styles from './style.module.css'

export default function Menu({ setRating, setPayMethod, setSortRating }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        if (name === "Rating") setRating(Number(value));
        else if (name === "Sorting") setSortRating(value);
        else if (name === "Payment") setPayMethod(value.toLowerCase());
    };

    return (
        <form className={styles.row_flex} style={{ backgroundColor: 'white', justifyContent: "space-evenly"}}>
            <div>
                <label>
                    Rating
                    &nbsp;
                    <select name="Rating" onChange={handleChange}>
                        <option value="1">1★ &amp; above</option>
                        <option value="2">2★ &amp; above</option>
                        <option value="3">3★ &amp; above</option>
                        <option value="4">4★ &amp; above</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Sort Rating
                    &nbsp;
                    <select name="Sorting" onChange={handleChange}>
                        <option value="default">Relevance</option>
                        <option value="lowToHigh">Low to High</option>
                        <option value="highToLow">High to Low</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Payment
                    &nbsp;
                    <select name="Payment" onChange={handleChange}>
                        <option value="default">Default</option>
                        <option value="Cash">Cash</option>
                        <option value="Card">Card</option>
                        <option value="UPI">UPI</option>
                    </select>
                </label>
            </div>
        </form>
    );
}
