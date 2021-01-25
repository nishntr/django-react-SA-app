import React from 'react'
import axios from 'axios';
import * as settings from '../settings';

import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper, Typography, Slider, Button,TextField  } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    container: {
        maxWidth: "75%",
        marginTop: "15vh",
        marginBottom: "10vh",
        borderRadius: '6px',
        backgroundColor: theme.palette.action.disabledBackground,
    },
    title: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        padding: theme.spacing(2), paddingLeft: theme.spacing(4),
        color: theme.palette.primary.main,
    },
    
    root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '50ch',
          backgroundColor: theme.palette.primary.contrastText,
        },
      },
}));



// The main Home component returned by this Module
function Home() {
    // Material UI Classes 
    const classes = useStyles();

    // React hook state variable - text
    const [text, setText] = React.useState("");
    // React hook state variable - Prediction
    const [prediction, setPrediction] = React.useState(null)


    // Function to make the predict API call and update the state variable - Prediction 
    const handlePredict = event => {

        // setPrediction(text)        
        
        // //Axios variables required to call the predict API
        // // let headers = { 'Authorization': `Token ${props.token}` };
        let url = settings.API_SERVER + '/api/sentiment/';
        let method = 'post';
        let config = { method, url, data: {"0":text} };

        // //Axios predict API call
        axios(config).then(
            res => {setPrediction(res.data["res"])
            }).catch(
                error => {alert(error)})

    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed className={classes.container}>
                <Grid container alignItems="center" spacing={3}>
                    <Grid item xs={5}>
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField name="text" id="outlined-basic" label="Text" variant="outlined" onChange={e=>setText(e.target.value)}/>
                        </form>
                        
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant="contained" color="primary" onClick={handlePredict}>
                            Predict
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.title} elevation={0}>
                            <Typography variant="caption" display="inline">
                                Predicted Iris Species: <span>&nbsp;</span>
                            </Typography>
                            <Typography variant="body1" display="inline">
                                {prediction}
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default Home