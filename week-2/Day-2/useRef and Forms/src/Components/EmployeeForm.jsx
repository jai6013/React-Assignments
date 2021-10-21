import { useState } from "react"

const initState = {
    fullname:"",
    gender:"",
    maritalStatus: false,
    education:"",
    skillset:[]
}

const skills = ["HTML, Css, JavaScript, MongoDb, Express, React"]
export const EmployeeForm = () => {

    const [data,setData] = useState(initState)
    const [employeesFormData,setEmployeesFormData] = useState([])
    const [checkAll, setCheckAll] = useState(false)
    const [checkedStates, setCheckedStates] = useState(
        new Array(skills.length).fill(false)
    )

    const handleChange = (e) =>{
        const {name,value,type,checked} = e.target
        const newValue = type === "checkbox" ? checked:value;
        setData({...data, [name]:newValue})
    }

    const handleSkillsChange = (i) =>{
        const newCheckedState = checkedStates.map((item,index) => 
        index === i ? !item : item
        )
        setCheckedStates(newCheckedState)
        setData({...data, skillset:newCheckedState})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setEmployeesFormData([...employeesFormData,data])
        console.log(employeesFormData)
    }
    const handleCheckAll = () => {
        const checkedAllStates = checkedStates.map((item) => !item)
        setCheckedStates(checkedAllStates)
        setCheckAll(!checkAll)
        setData({...data,skillset:checkedAllStates})
    }
    const {fullname, gender, maritalStatus, education,skillset} = data;

    return (
        <>
        <h1>Employee Data</h1>
        <form onSubmit={handleSubmit}>
            {/* fullname */}
            <input type="text" placeholder ="Enter Full Name" name="fullname" value={fullname} onChange={handleChange} />
            {/* gender */}
            {
                ["Male", "Female", "Others"].map((item,index)=>{
                    return (
                        <div key={index}>
                            <input type = "radio" name="gender" value={item} onChange={handleChange}/>
                            <label>{item}</label> 
                        </div>
                    )
                })
            }
            {/* marital status */}
            <div>

            <input type = "checkbox" name="maritalStatus" checked = {maritalStatus} onChange={handleChange}/>
            <label >Marital Status</label>
            </div>

            {/* Qualification */}
            <select name="education" value={education} onChange={handleChange}>
                {
                    ["10th", "12th", "Graduation", "PostGraduation"].map((item,index) =>{
                        return (
                            <option key={index} value={item}>{item}</option>
                        )
                    })
                }
            </select>

            {/* Skills */}

            <input type="checkbox"  checked={checkAll} onChange={handleCheckAll} />
            <label >CheckAll</label>
            {skills.map((item,index) =>{
                return (
                    <div key={index}>
                    <input type= "checkbox" checked = {checkedStates[index]} onChange= {() =>handleSkillsChange(index)}/>
                    <label>{item}</label>
                    </div>
                )
            })}
            <input type="submit" />
        </form>
        </>
    )
}