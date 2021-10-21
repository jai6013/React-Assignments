import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import { Header } from "./Components/Header";
import Menu from "./Components/Menu";
import { RestaurantDetails } from "./Components/restaurantDetails";
import data from "./Configs/db.json";
import styles from './Components/style.module.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function App() {
  const [form, setForm] = useState(false);
  const [resData, setResData] = useState(data);
  const [rating, setRating] = useState(1);
  const [payMethod, setPayMethod] = useState("default");
  const [sortRating, setSortRating] = useState("default");
  const [currentPage,setCurrentPage] =useState(1);
  const [dataPerPage, setDataPerPage] = useState(15);
  // logic for making static array so that it will not change on every render
  const [pageNumbers, setPageNumbers] = useState(Array.from({length: (resData.length / dataPerPage)}, (_, i) => {return {id:i+1,color:"red"}}))
  if (form) {
    return (
      <>
      <Header form={form} />
      <Form
        form={form}
        setForm={setForm}
        resData={resData}
        setResData={setResData}
      />
      </>
    );
  }
  console.log(resData)
    // Logic for displaying todos
  const indexOfLastObj = currentPage * dataPerPage;
  const indexOfFirstObj = indexOfLastObj - dataPerPage;
  const currentData = resData.slice(indexOfFirstObj, indexOfLastObj);

  // Logic for showing current page and changin color
  const handleClick = (n) =>{
    pageNumbers.map(item=>{
      if(item.id === n){
        item.color = "black";
      }else{
        item.color = "red";
      }
      return item;
    })
    setCurrentPage(n)
  }

  // logic for next page and changing color
  const handleNext = () =>{
    pageNumbers.map(item=>{
      if(item.id === currentPage + 1){
        item.color = "black";
      }else{
        item.color = "red";
      }
      return item;
    })
    if(currentPage !== 5){
      setCurrentPage((prev) => prev + 1)
    }
    }
  const handlePrev = () =>{
    pageNumbers.map(item=>{
      if(item.id === currentPage - 1){
        item.color = "black";
      }else{
        item.color = "red";
      }
      return item;
    })
    if(currentPage !== 1){
      setCurrentPage((prev) => prev - 1)
    }
    }
    if(currentPage === 1){
      pageNumbers[0].color = "black"
    }

  // logic for displaying the pagenumbers  
  const renderPageNumbers = pageNumbers.map(item => {
    return (
      <td
        style={{color:item.color}}
        onClick={
          () =>{
          handleClick(item.id)
        }
      }
      >
        {item.id}
      </td>
    );
  })


  return (
    <>
    <div className="App">
      <Header setForm={setForm} />
      <Menu
        setRating={setRating}
        setPayMethod={setPayMethod}
        setSortRating={setSortRating}
      />
      <div className={styles.grandparent  }>

      {currentData
        .filter((el) => {
          return el.rating > rating;
        })
        .filter((el) => {
          if (payMethod === "default") return el;
          else {
            return el.payment[payMethod] === true;
          }
        })
        .sort((a, b) =>
        sortRating === "lowToHigh"
            ? a.rating - b.rating
            : sortRating === "highToLow"
            ? b.rating - a.rating
            : a.id - b.id
        )
        .map((el) => (
          <div  key={el.id}>
            <RestaurantDetails resData={el} />
          </div>
        ))}
        </div>

    </div>
     <div id="page-numbers">
       <td className={styles.icon_div} style={{marginRight:"15px"}} onClick={handlePrev}> <ArrowBackIcon /> <span> Prev</span></td>
     {renderPageNumbers}
       <td className={styles.icon_div} style={{marginLeft:"15px"}} onClick={handleNext}> <span> Next</span> <ArrowForwardIcon /> </td>
     </div>
     </>
   
  );
}

export default App;
