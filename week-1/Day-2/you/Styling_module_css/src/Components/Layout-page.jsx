import React from "react";
import { Criteria } from "./Criteria";
import styles from './Layout.module.css'

const Layout = () =>{
    const data = [
        {
            para:"Displine & attendence", 
            img: "https://cdn-icons.flaticon.com/png/128/1047/premium/1047264.png?token=exp=1634133560~hmac=628688f84a548253b89ac953ef060679"
        },
        {
            para:"Performance & assignments", 
            img: "https://cdn-icons.flaticon.com/png/128/404/premium/404672.png?token=exp=1634133641~hmac=aea15b620e5879589532bd540c23870e"
        },
        {
            para:"Scores in Assessments", 
            img: "https://cdn-icons-png.flaticon.com/128/1739/1739544.png"
        },
        {
            para:"Team Work", 
            img: "https://cdn-icons.flaticon.com/png/128/2967/premium/2967475.png?token=exp=1634133752~hmac=380b8829762daec5944f24e90041c3e4"
        },

    ]
    return (
        <>
        <div>
            <h1>Glide Program</h1>
            <h3>Living allowances for students</h3>
            <p>For the entire duration of full time course we will be provide our top performing students with living allowances of 15000 per month</p>
            <p>We will closely mentor the performance of our students in unit 1 and will evaluate them on the basis of their -</p>
            <div className = {styles.criteria_block}>
            {data.map((item) => {
                return <Criteria item = {item}/>         
            })
        }
        </div>
            <p>Based on the overall performance we will choose the top performing students who will be eligible for the living allowance of 15000 rupes per unit, which will be added to their ISA amount.</p>
            <p>(At masai, 1 Unit equals to 5 weeks and 1 full time course has 6 units)</p>
        </div>

        </>
    )
}

export {Layout}