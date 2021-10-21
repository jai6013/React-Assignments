import React, { useRef, useState } from "react";

const initState = {
    fullname: "",
    gender: "",
    maritalStatus: false,
    education: "",
    skillset: []
};

const skills = ["HTML", "CSS", "JS", "React", "Redux", "Material UI"];

const EmployeeForm = () => {
    const [data, setData] = useState(initState);
    const [empolyeeData, setEmployeeData] = useState([]);
    const [checkAll, setCheckAll] = useState(false);
    const [checkedStates, setCheckedStates] = useState(
        new Array(skills.length).fill(false)
    );
    const imageRef = useRef("")
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        const newValue = type === "checkbox" ? checked:type === "file" ? URL.createObjectURL(imageRef.current.files[0]) : value;
        setData({ ...data, [name]: newValue })
        console.log(imageRef)
        // if (type === "radio") {
        //     // const sex = type === "radio" ? checked : value;
        //     setData({ ...data, gender: value });
        // }
    }

    const handleSkillsChange = (id) => {
        const newCheckedState = checkedStates.map((item, index) => {
            return index === id ? !item : item;
        });
        setCheckedStates(newCheckedState);
        setData({ ...data, skillset: newCheckedState });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setEmployeeData([...empolyeeData, data])
        console.log(empolyeeData)
    }

    const handleCheckAll = () => {
        const checkedAllStates = checkedStates.map((item => !item));
        setCheckedStates(checkedAllStates);
        setCheckAll(!checkAll);
        setData({ ...data, skillset: checkedAllStates });
    }

    const { fullname, gender, maritalStatus, education, skillset } = data;

    return <>
        <h1>  Employee data</h1>
        <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <input
                type="text"
                name="fullname"
                value={fullname}
                placeholder="Enter fullname"
                onChange={handleChange}
            />
            <br />

            {/* Gender */}
            {["Male", "Female", "Others"].map((item, index) => {
                return (
                    <div key={index}>
                        <input
                            type="radio"
                            value={item}
                            name="gender"
                            onChange={handleChange}
                        />
                        <label>{item}</label>
                    </div>
                )
            })}

            {/* Marital Status */}
            <div>
                <input
                    type="checkbox"
                    onChange={handleChange}
                    checked={maritalStatus}
                    name="maritalStatus"
                />
                <label>Marital Status</label>
            </div>


            {/* Qualification */}
            <select name="education" value={education} onChange={handleChange}>
                {["10th", "12th", "Graduate", "Post Graduate"].map((item, index) => {
                    return (
                        <option key={index} value={item}>
                            {item}
                        </option>
                    );
                }
                )}
            </select> <br />

            <input type="checkbox" checked={checkAll} onChange={handleCheckAll} />
            <label>Check All</label>
            {skills.map((item, index) => {
                return (
                    <div key={item}>
                        <input
                            type="checkbox"
                            checked={checkedStates[index]}
                            onChange={() => handleSkillsChange(index)}
                        />
                        <label>{item}</label>
                    </div>
                );
            })}
            <input type="file" name="image" onChange={handleChange} ref ={imageRef} />
            <input type="submit" />
        </form>
        {data.image && <img src= {data.image} alt="no"/>}
    </>
}

export { EmployeeForm }