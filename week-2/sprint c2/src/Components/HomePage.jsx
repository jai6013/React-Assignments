import React, { useEffect, useState } from "react";
import axios from "axios";
import MediaCard from "./Characters";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Link } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const HomePage = () => {
  const [page,setPage] = useState(1)
  const [statuses,setStatus] = useState("")
  const [data, setData] = useState([]);
 
  const handleStatusChange =(stat)=>{
    console.log(stat)
    setStatus(stat)
  }
  const getData = () => {
    var config = {
      method: "get",
      url: `https://rickandmortyapi.com/api/character/?page=${page}&status=${statuses}`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setData(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleChange = (event,value) =>{
    setPage(value)
  }
  useEffect(()=>[
    getData()
  ],[page,statuses])
  return (
    <>
      <div style={{display:"flex", justifyContent:"space-around",alignItems:"center",color:"grey", cursor:"pointer", margin:"39px"}}>
        <div style={{border:"1px solid black" , padding:"5px"}} onClick={() => handleStatusChange("alive")}>FILTER BY STATUS ALIVE</div>
        <div style={{border:"1px solid black" , padding:"5px"}} onClick={() => handleStatusChange("dead")}>FILTER BY STATUS DEAD</div>
        <div style={{border:"1px solid black" , padding:"5px"}} onClick={() => handleStatusChange("unknown")}>FILTER BY STATUS UNKNOWN</div>
      </div>
        <Grid container sx={{marginLeft:"580px"}}>
            <Item>
                {
                    data && 
                    data.map((item) =>
                    <Link to ={`/${item.id}`}>
                         <MediaCard  id = {item.id} characterId = {item.id} characterData = {item}/>
                    </Link>
                    )
                }
            </Item>
        </Grid>
      <Stack spacing={2} sx={{margin:"100px",marginLeft:"590px",}}>
      <Pagination count={20} page={page} onChange={handleChange} color="primary" />
    </Stack>
    </>
  );
};
export default HomePage