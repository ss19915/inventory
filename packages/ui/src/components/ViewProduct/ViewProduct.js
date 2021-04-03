import { Divider, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";

const ViewProduct = ({ product = {} }) => {
  const { Name, Description, Rating, Price } = product;

  return (
    <Paper style={{ padding: '1em'}}>
      <Grid container direction="column" spacing={2} styles={{ margin: "1em" }}>
        <Grid item>
          <Typography variant="h5">View Product</Typography>
        </Grid>
        <Divider />
        <Grid item>
          <Typography>Name: {Name}</Typography>
        </Grid>
        <Grid item>
          <Typography>Price: {Price}</Typography>
        </Grid>
        <Grid item>
          <Typography>Rating: {Rating}</Typography>
        </Grid>
        <Grid item>
          <Typography>Description: {Description}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ViewProduct;
