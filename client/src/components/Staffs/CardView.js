import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Grid, Container, Button, ButtonGroup } from "@material-ui/core";
import Content from "./Content";

function App() {
  AOS.init();
  return (
    <div>      
      <br/>
      <Grid container direction="column">
        <Grid item container>
          <Grid item xs={false} sm={1} />
            <Grid item xs={12} sm={10} align="right">
              <Container maxWidth="xl">
                <ButtonGroup
                  color="primary"
                  aria-label="outlined primary button group"
                  style={{ color: "#5fbcf5", margin: "auto" }}
                >
                  <Button style={{ color: "#5fbcf5" }}>All</Button>
                  <Button>Admin</Button>
                  <Button>Managers</Button>
                  <Button>Employees</Button>
                </ButtonGroup>
              </Container>
            </Grid>
          <Grid item xs={false} sm={1} />
        </Grid>
      </Grid>
        <br />
      <Grid container direction="column">
        <Grid item></Grid>
          <Grid item container>
            <Grid item xs={false} sm={1} />
              <Grid item xs={12} sm={10}>
                <Container maxWidth="xl">
                <div data-aos="zoom-in">
                  <Content />
                  </div>
                </Container>
              </Grid>
            <Grid item xs={false} sm={1} />
          </Grid>
        </Grid>
    </div>
  );
}
export default App;