import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './projects.css';

export default () => {
  return (
    <div className='container' id='Work'>
      <h2>PROJECTS</h2>
  
  <div className='card-container' >
      <Card sx={{ maxWidth: 345 }} className='indcards'>
        <CardActionArea>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <CardMedia
              component="img"
              height="140"
              image="./p1.jpg"
              alt="green iguana"
              className='img'
            />
          </div>
          <CardContent>
              <span className="year-span">2024</span>
            <Typography component="div" className='card-title'>
              Q-TIFY
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  
      <Card sx={{ maxWidth: 345 }} className='indcards'>
        <CardActionArea>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <CardMedia
              component="img"
              height="140"
              image="./p1.jpg"
              alt="green iguana"
              className='img'
            />
          </div>
          <CardContent>
              <span className="year-span">2024</span>
            <Typography component="div" className='card-title'>
              Q-TIFY
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  
  
      <Card sx={{ maxWidth: 345 }} className='indcards'>
        <CardActionArea>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <CardMedia
              component="img"
              height="140"
              image="./p1.jpg"
              alt="green iguana"
              className='img'
            />
          </div>
          <CardContent>
              <span className="year-span">2024</span>
            <Typography component="div" className='card-title'>
              Q-TIFY
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  
      </div>
    </div>
  );
}
