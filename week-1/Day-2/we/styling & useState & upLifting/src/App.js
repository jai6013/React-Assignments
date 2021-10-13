import { useState } from 'react';
import './App.css';
import { StudentCard } from './Components/StudentCard';
import data from './Config/db.json'
// import {v4 as uuid} from 'uuid'

function App() {
  const [studentData,setStudentData] = useState(data)
  const handleClick = (id) => {
    const newStudentData = studentData.map((item) => item.id === id ? {...item, isSelected : !item.isSelected } : item
    )
    setStudentData(newStudentData)
  }
  // const [taskName,setTaskName] = useState("")
  // const [todoList,setTodoList] = useState([])
  // const handleAddTodo=()=>{
  //     const payload ={
  //       id: uuid(),
  //       title: taskName,
  //       status: false
  //     }
  //     setTodoList([payload, ...todoList])
  // }

  return (<>
    {/* <h1 className="heading">Todo Lists</h1> */}
    <h1 className="heading">Student Details</h1>
    <div className="App">
   {studentData.map((eachStudent,index)=>{
     return <StudentCard eachStudent={eachStudent} key ={index} handleClick = {handleClick}/>
    })} 
    {/* <input type="text" value={taskName} placeholder="Enter Todo" onChange={(e)=>setTaskName(e.target.value)} />
    <button onClick = {handleAddTodo}>Click Me</button>
    </div>
    <div>
      {todoList.map((item)=>{
        return <div>{item.title} </div>
      })} */}
    </div>
    </>
  );
}

export default App;
