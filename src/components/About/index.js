import './about.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
    return (
        <div className='About' id='About'>
            <h2>ABOUT ME</h2>
            <div className='about-cards'>

                <Card className='img-card'>
                    <CardActionArea>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <CardMedia
                            component="img"
                            image="./dp.jpg"
                            alt="Display pic"
                            className='cardimg'
                        />
                        </div>
                        <CardContent>
                            <Typography className='skills-badge'>
                            <i class="fa-brands fa-html5"></i>
                            <i class="fa-brands fa-css3-alt"></i>
                            <i class="fa-brands fa-react"></i>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <div className="card">
                    <div className="card-header">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64" className="iconify" data-icon="emojione:red-circle" data-inline="false" style={{ transform: 'rotate(360deg)' }}>
                            <circle cx="32" cy="32" r="30" fill="#ed4c5c"></circle>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36" className="iconify" data-icon="twemoji:yellow-circle" data-inline="false" style={{ transform: 'rotate(360deg)' }}>
                            <circle cx="18" cy="18" r="18" fill="#FDCB58"></circle>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36" className="iconify" data-icon="twemoji:green-circle" data-inline="false" style={{ transform: 'rotate(360deg)' }}>
                            <circle cx="18" cy="18" r="18" fill="#78B159"></circle>
                        </svg>
                    </div>
                    <div className="card-body">
                        <span class="wave">Hi :) </span>
                        <br />
                        <br />
                        <p className="card-text">
                            👋 I'm <span style={{ fontWeight: 'bold' }}>Chaitanya Kumar</span>. 
                            I'm working with the newest front-end framework <b>React</b>. 
                            I have built multiple industry-grade projects from scratch 
                            and am armed with many technological skills useful for tech projects. Thank you 💜
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}
