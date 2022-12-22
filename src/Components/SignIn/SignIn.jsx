import PropTypes from 'prop-types'
import React, { Component } from 'react'
import "./SignIn.css";
import Typography from "@mui/material/Typography";
import { TextField, Card, Grid, Button, Checkbox } from '@mui/material';
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import { height } from '@mui/system';
// ReactDOM.render(<SocialIcon url="https://facebook.com/jaketrent" />, document.body);
export class SignIn extends Component {
    static propTypes = {}

    render() {
        return (
            <div className='signin-main-container'>
                <Grid
                    alignItems="center"
                    justifyContent="center"
                    direction="column"
                    container
                    // spacing={5}
                    position='absolute'
                >
                    <Grid item >
                        <Typography variant="h5" style={{ marginBottom: "2em", width: '100%', marginTop: "2em", fontWeight: "bold" }}>
                            SIGN IN
                        </Typography>
                    </Grid>
                    <form>
                        <Grid item style={{ width: '30vw', position: "relative" }}>
                            <TextField
                                required
                                variant="outlined"
                                label="Phone Number/Email"
                                style={{ marginBottom: "2em", width: '100%' }}
                            />
                        </Grid>
                        <Grid item style={{ width: '30vw', position: "relative" }}>
                            <TextField
                                required
                                variant="outlined"
                                label="Password"
                                type="password"
                                style={{ marginBottom: "0.7em", width: '100%' }}
                            />
                        </Grid>
                        <Grid item >
                        <Typography style={{ marginBottom: "3em", width: '100%'}}>
                            Forgot password ?
                        </Typography>
                    </Grid>
                        <Grid item style={{ width: '30vw', position: "relative" , marginBottom: "2em"}}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                            >
                                SIGN IN
                            </Button>
                        </Grid>
                    </form>
                    <Grid item >
                        <Typography style={{ marginBottom: "1em", width: '100%'}}>
                            ------------------ OR ------------------
                        </Typography>
                    </Grid>
                    <Grid item justifyContent="center" alignItems="center" display="flex" style={{ width: '30vw', position: "relative" , marginBottom:"1em"}}>
                    <SocialIcon url="https://facebook.com/jaketrent" style={{marginRight:"1em" }}/> 
                    <SocialIcon url="https://google.com" />
                    </Grid>
                    <Grid item display="flex" textAlign="center" style={{width: '30vw', position: "relative"}} >
                        <Typography  fontSize='0.9rem' color='grey' style={{ width: '100%' }}>
                            Don't have an account ? SIGN UP
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default SignIn