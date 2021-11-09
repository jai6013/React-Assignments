import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import axios from "axios";
import {useParams} from 'react-router-dom'

export default function ActionAreaCard() {
  const params = useParams();
  const [characterData, setCharData] = React.useState({});
  const showData = () => {
    var config = {
      method: "get",
      url: `https://rickandmortyapi.com/api/character/${params.id}`,
      headers: {},
    };
    
    axios(config)
    .then(function (response) {
      setCharData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  React.useEffect(()=>{
      showData()
  },[params.id])
  return (
    <>
      <Card sx={{ maxWidth: 345 , margin:"auto"}} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={characterData.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Name : {characterData.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Status : {characterData.status}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Species : {characterData.species}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Gender : {characterData.gender}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
