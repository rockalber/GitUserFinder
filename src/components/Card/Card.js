import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
 
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 300 }}
        image={props.Data.avatar_url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
        {props.Data.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Bio <br></br>
          {props.Data.bio}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>{window.open(`${props.Data.html_url}`,"_blank")}}>Open Profile</Button>
      </CardActions>
    </Card>
  );
}