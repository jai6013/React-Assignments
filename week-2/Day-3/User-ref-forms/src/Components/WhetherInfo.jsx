import { useEffect, useState } from "react"
import axios from 'axios'

const initState = {
    query: "",
    data: []
}

export const WhetherInfo = () =>{
    const [state,setState] = useState(initState)
    const [text,setText] = useState("")
    const [isLoading,setIsLoading] = useState(false)
    const [isError,setIsError] =useState(false)

    useEffect (() =>{
        axios({
            method: "get",
            baseURL:"http://api.weatherapi.com/v1",
            url:"/current.json",
            params:{
                q: text === "" ? "delhi" : text,
                key:"aa61ac15b0614465b9a113208212010"
            }
        }).then((res) => 
        setState({...state,data:res.data.location.name})
        ).catch((err)=>setIsError(true)).finally(()=>setIsLoading(false))
    },[])


    const handleSubmit = () =>{
        console.log(text)
        setIsLoading(true)
        axios({
            method: "get",
            baseURL:"http://api.weatherapi.com/v1",
            url:"/current.json",
            params:{
                q: text || "delhi",
                key:"aa61ac15b0614465b9a113208212010"
            }
        }).then((res) => 
        setState({...state,data:res.data.location.name})
        ).catch((err)=>setIsError(true)).finally(()=>setIsLoading(false))
    }

    if(isLoading){
        return <div>...Loading</div>
    }
    if(isError){
        return <div>Error</div>
    }

    return (
        <>
        <input type = "text"  onChange={(e) => setText(e.target.value)}/>
        <button onClick={handleSubmit}>click</button>
        <h3>{state.data}</h3>
        </>
    )
}