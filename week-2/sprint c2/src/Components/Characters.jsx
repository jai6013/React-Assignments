import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

export default function MediaCard({characterData, characterId}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
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
      </CardContent>
      <CardActions>
        <Link to ={`/${characterId}`}>Show more</Link>
      </CardActions>
    </Card>
  );
}