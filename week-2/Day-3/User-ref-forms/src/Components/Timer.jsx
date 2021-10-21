import { useRef, useState } from "react"

export const Timer = () =>{
    const [time,setTime] = useState(0)
    const timerId = useRef(0)
    const handleStart = () =>{
        if(timerId.current){
            return
        }
        timerId.current = setInterval(() => {
            setTime((prev) => prev + 1)
        }, 1000);
    }
    const handleStop = () =>{
        clearInterval(timerId.current)
        timerId.current = 0
    }
    const handleReset = () =>{
        clearInterval(timerId.current)
        timerId.current = 0
        setTime(0)
    }
    return (
        <>
        <h1>{time}</h1>
        <button onClick={handleStart}>start</button>
        <button onClick={handleStop}>stop</button>
        <button onClick={handleReset}>reset</button>
        </>
    )
}