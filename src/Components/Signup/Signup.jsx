import React, { Component } from "react";
import "./Signup.css";
import Typography from "@mui/material/Typography";
import { TextField, Grid, Button, Checkbox } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";

export class Signup extends Component {
  render() {
    return (
      <div className="signup-main-container">
        <Grid
          alignItems="center"
          justifyContent="center"
          direction="column"
          container
          // spacing={5}
          position="absolute"
        >
          <Grid item>
            <Typography
              variant="h5"
              style={{
                marginBottom: "1em",
                width: "100%",
                marginTop: "1em",
                fontWeight: "bold",
              }}
            >
              SIGN UP
            </Typography>
          </Grid>
          <form>
            <Grid item style={{ width: "30vw", position: "relative" }}>
              <TextField
                required
                variant="outlined"
                label="First Name"
                style={{ marginBottom: "1em", width: "100%" }}
              />
            </Grid>
            <Grid item style={{ width: "30vw", position: "relative" }}>
              <TextField
                required
                variant="outlined"
                label="Last Name"
                style={{ marginBottom: "1em", width: "100%" }}
              />
            </Grid>
            <Grid item style={{ width: "30vw", position: "relative" }}>
              <TextField
                required
                variant="outlined"
                label="Phone Number/Email"
                style={{ marginBottom: "1em", width: "100%" }}
              />
            </Grid>
            <Grid item style={{ width: "30vw", position: "relative" }}>
              <TextField
                required
                variant="outlined"
                label="New Password"
                type="password"
                style={{ marginBottom: "1em", width: "100%" }}
              />
            </Grid>
            <Grid item style={{ width: "30vw", position: "relative" }}>
              <TextField
                required
                variant="outlined"
                label="Re-enter Password"
                type="password"
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid
              item
              style={{
                marginBottom: "1.5em",
                width: "30vw",
                position: "relative",
              }}
            >
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="I accept all the Terms and Conditions"
                />
              </FormGroup>
            </Grid>
            <Grid
              item
              style={{
                width: "30vw",
                position: "relative",
                marginBottom: "1em",
              }}
            >
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                SIGN UP
              </Button>
            </Grid>
          </form>
          <Grid item>
            <Typography style={{ marginBottom: "0.5em", width: "100%" }}>
              ------------------ OR ------------------
            </Typography>
          </Grid>
          <Grid
            item
            justifyContent="center"
            alignItems="center"
            display="flex"
            style={{
              width: "30vw",
              position: "relative",
              marginBottom: "0.3em",
            }}
          >
            <SocialIcon
              url="https://facebook.com/jaketrent"
              style={{ marginRight: "1em" }}
            />
            <SocialIcon url="https://google.com" />
          </Grid>
          <Grid
            item
            display="flex"
            textAlign="center"
            style={{ width: "30vw", position: "relative" }}
          >
            <Typography
              fontSize="0.9rem"
              color="grey"
              style={{ width: "100%" }}
            >
              Already have an account ? <Link to="/signin"> SIGN IN </Link>
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Signup;
