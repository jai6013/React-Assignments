import styles from './style.module.css'
const { useState } = require("react")

const Login = ({handleLogin}) =>{
    const initValue = {
        username: "",
        password:""
    }
    const [loginData,setLoginData] = useState(initValue)
    const handleChange = (e) => {
        const {name,value} = e.target
        setLoginData({
            ...loginData, 
            [name] : value
        })
    }
    
    return(
        <>
        <div className={styles.parent}>
            <h1>Login Page</h1>
            <input type="text" placeholder = "Enter Username" name = "username" value = {loginData.username} onChange={handleChange}  />
            <br />
            <input type="text" placeholder = "Enter Password" name = "password" value = {loginData.password} onChange={handleChange}  />
            <br />
            <button onClick={() => handleLogin(loginData)}>submit</button>
        </div>
        </>
    )
}

export default Login