import React, { Component } from "react";
import "./Forgotpass.css";
import Typography from "@mui/material/Typography";
import { TextField, Grid, Button } from "@mui/material";

export class Forgotpass extends Component {
  render() {
    return (
      <div className="forgotpass-main-container">
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
                marginBottom: "2.5em",
                width: "100%",
                marginTop: "3em",
                fontWeight: "bold",
              }}
            >
              FORGOT YOUR PASSWORD ?
            </Typography>
          </Grid>
          <form>
            <Grid item style={{ width: "30vw", position: "relative" }}>
              <TextField
                required
                variant="outlined"
                label="Enter New Password"
                style={{ marginBottom: "2em", width: "100%" }}
              />
            </Grid>
            <Grid item style={{ width: "30vw", position: "relative" }}>
              <TextField
                required
                variant="outlined"
                label="Confirm New Password"
                type="password"
                style={{ marginBottom: "3em", width: "100%" }}
              />
            </Grid>
            <Grid
              item
              style={{
                width: "30vw",
                position: "relative",
                marginBottom: "2em",
              }}
            >
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                CREATE PASSWORD
              </Button>
            </Grid>
          </form>
        </Grid>
      </div>
    );
  }
}

export default Forgotpass;
