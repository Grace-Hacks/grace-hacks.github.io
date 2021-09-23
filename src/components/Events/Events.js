import React from 'react';
import './Events.scss';
import Python from '../../assets/Python.png'

import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: 258,
      maxWidth: 336, //345
      borderRadius: 20,
      margin: 10,
      height: "100%",
    },
    header: {
        display: "flex",
    },
    description: {
        display: "flex",
        fontSize: "11px",
    },
    media: {
    height: "10px",
      paddingTop: '56.25%', // 16:9
    }
  }));

function Events() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 485 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 485, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    const classes = useStyles();
    return (
        <div className="events-container" id="events">
            <div class="word">
                events
            </div>
            
            <Carousel responsive={responsive}>
                <Card className={classes.root}>
                    <CardHeader className={classes.header}
                        title="StemDiv Python Workshops"
                        subheader="july 10th - august 20th, 2021"
                    />
                    <CardContent className={classes.description}>
                        <Typography variant="body1" color="textPrimary" component="p">
                        Partnered with StemDiv program at UCSC to run Python workshops. Hosted 8 total for beginners. View presentation slides&nbsp;
                        <Link href="#" className="cardLink">
                            here
                        </Link>
                        !
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.root}>
                    <CardHeader className={classes.header}
                        title="2021 Hackathon"
                        subheader="november 20th - 21st, 2021"
                    />
                    <CardContent className={classes.description}>
                        <Typography variant="body1" color="textPrimary" component="p">
                        Sample text about annual hackathon here. Sample text about annual hackathon here. Sample text about annual hackathon here.<br></br><br></br>View the event schedule&nbsp;
                        <Link href="#" className="cardLink">
                            here
                        </Link>
                        ! <br></br><br></br>Sign up to join the hackathon&nbsp;
                        <Link href="#" className="cardLink">
                            here
                        </Link>
                        !
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.root}>
                    <CardHeader className={classes.header}
                        title="Introduction to Python Workshop"
                        subheader="February 24th, 2021 • 7pm"
                    />
                    <CardContent className={classes.description}>
                        <Typography variant="body1" color="textPrimary" component="p">
                        Interested in learning Python? Join us for a virtual workshop and learn the basics of Python programming such as statements, functions, and more.
                        Apply your knowledge with interactive examples and a mini project!
                        </Typography>
                    </CardContent>
                </Card>
                
                <Card className={classes.root}>
                    <CardHeader className={classes.header}
                        title="Introduction to Python Workshop"
                        subheader="February 24th, 2021 • 7pm"
                    />
                    <CardContent className={classes.description}>
                        <Typography variant="body1" color="textPrimary" component="p">
                        Interested in learning Python? Join us for a virtual workshop and learn the basics of Python programming such as statements, functions, and more.
                        Apply your knowledge with interactive examples and a mini project!
                        </Typography>
                    </CardContent>
                </Card>
            </Carousel>
        </div>
  );
}

export default Events;