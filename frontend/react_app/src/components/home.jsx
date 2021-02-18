import React from 'react'
import axios from 'axios';
import * as settings from '../settings';

import CssBaseline from '@material-ui/core/CssBaseline';
import {createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper, Typography, Slider, Button, TextField } from '@material-ui/core';

const theme1 = createMuiTheme({
    typography: {
      caption: {
          color:"red",
        fontSize: 14,
      },
      body1: {

        fontWeight: 500,
      },
    },
  });
const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexGrow: 1,
        maxWidth: "80%",
        minHeight: "120px",
        marginTop: "15vh",
        marginBottom: "10vh",
        borderRadius: '6px',
        backgroundColor: theme.palette.action.disabledBackground,
    },
    title: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        padding: theme.spacing(2), 
    },

    root: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        backgroundColor: 'white',

    },
}));



// The main Home component returned by this Module
function Home() {
    // Material UI Classes 
    const classes = useStyles();

    // React hook state variable - text
    const [text, setText] = React.useState("");
    const [clr, setClr] = React.useState("White")
    // React hook state variable - Prediction
    const [prediction, setPrediction] = React.useState(null)


    // Function to make the predict API call and update the state variable - Prediction 
    const handlePredict = event => {

        // setPrediction(text)        

        // //Axios variables required to call the predict API
        // // let headers = { 'Authorization': `Token ${props.token}` };
        let url = settings.API_SERVER + '/api/sentiment/';
        let method = 'post';
        let config = { method, url, data: { "0": text } };

        // //Axios predict API call
        axios(config).then(
            res => {
                setPrediction(res.data["res"])
            }).catch(
                error => { alert(error) })

    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container className={classes.container}>
                <Grid container flexGrow='1' alignItems="center" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Paper className={classes.root} >
                            <TextField fullWidth="1" name="text" id="outlined-basic" label="Text" variant="outlined" onChange={e => setText(e.target.value)} />
                        </Paper>

                    </Grid>
                    <Grid alignItems="center" item xs={6} sm={2}>
                        <Button fullWidth="1" variant="contained" color="primary" onClick={handlePredict}>
                            Predict
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={3} >
                        <Paper  className={classes.title} elevation={0} >
                            <ThemeProvider theme={theme1}>
                                <Typography variant="caption" display="inline">
                                    Sentiment: <span>&nbsp;</span>
                                </Typography>
                                <Typography  variant="body1" display="inline">
                                    {prediction}
                                </Typography>
                            </ThemeProvider>

                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default Home