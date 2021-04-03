import {
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
} from "@material-ui/core/";

const CreateProduct = (props) => {
  const { onInputChange, onAdd, isAddDisabled } = props;

  return (
    <Paper style={{ padding: "1em" }}>
      <Grid container spacing={2} justify="center">
        <Grid item>
          <Typography variant="h5">Create Product</Typography>
        </Grid>
        <Grid item xs={11} style={{ borderTop: "1px solid #DDD" }}></Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            onChange={onInputChange}
            id="Name"
            label="Name"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            onChange={onInputChange}
            id="Price"
            type="number"
            label="Price($)"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            onChange={onInputChange}
            id="Rating"
            type="number"
            label="Rating"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline
            fullWidth
            onChange={onInputChange}
            rows={5}
            id="Description"
            label="Description"
          />
        </Grid>
        <Grid item xs={9}></Grid>
        <Grid item xs={3}>
          <Button
            fullWidth
            variant="outlined"
            disabled={isAddDisabled}
            onClick={onAdd}
          >
            + Add
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CreateProduct;
