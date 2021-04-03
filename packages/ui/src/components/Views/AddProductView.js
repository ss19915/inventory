import CreateProduct from "../CreateProduct";
import { withRouter } from "react-router-dom";
import { Grid } from "@material-ui/core";

const AddProductView = ({ history }) => {
  const onProductCreate = () => {
    history.push("/");
  };

  return (
    <Grid container justify='center'>
      <Grid item xs={5}>
        <CreateProduct onProductCreate={onProductCreate} />
      </Grid>
    </Grid>
  );
};

export default withRouter(AddProductView);
