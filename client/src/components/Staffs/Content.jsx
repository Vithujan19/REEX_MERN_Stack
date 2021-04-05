import React from "react";
import CoffeCard from "./Card";
import { Grid } from "@material-ui/core";
import coffeMakerList from "./constants";

const Content = () => {
  const getCoffeMakerCard = coffeMakerObj => {
    return (
      <Grid item xs={12} sm={6}>
        <CoffeCard {...coffeMakerObj} />
      </Grid>
    );
  };

  return (<div>
    
    <Grid container spacing={1}>
      {coffeMakerList.map(coffeMakerObj => getCoffeMakerCard(coffeMakerObj))}
    </Grid></div>
  );
};

export default Content;
