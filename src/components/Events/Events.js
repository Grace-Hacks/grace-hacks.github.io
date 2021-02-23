import React from 'react';
import './Events.scss';
import Python from '../../assets/Python.png'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 500, //345
      borderRadius: 60,
    },
    header: {
        display: "flex",
        textAlign: "center",
    },
    description: {
        display: "flex",
        textAlign: "center",
        fontSize: "15px",
        marginRight: "20px",
        marginLeft: "20px",
    },
    media: {
    height: "10px",
      paddingTop: '56.25%', // 16:9
    }
  }));

function Events() {
    const classes = useStyles();
    return (
        <div class="events-container" id="events">
            <div class="word">
                <div class="letter">E</div>
                <div class="letter">V</div>
                <div class="letter">E</div>
                <div class="letter">N</div>
                <div class="letter">T</div>
                <div class="letter">S</div>
            </div>

            <Card className={classes.root}>
                <CardHeader className={classes.header}
                    title="Introduction to Python Workshop"
                    subheader="February 24th, 2021 • 7pm"
                />
                <CardMedia
                    className={classes.media}
                    image={Python}
                    title="picture"
                />
                <CardContent className={classes.description}>
                    <Typography variant="body1" color="textPrimary" component="p">
                    Interested in learning Python? Join us for a virtual workshop and learn the basics of Python programming such as statements, functions, and more.
                    Apply your knowledge with interactive examples and a mini project!
                    </Typography>
                </CardContent>
            </Card>
        </div>
  );
}

export default Events;