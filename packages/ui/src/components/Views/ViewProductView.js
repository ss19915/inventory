import { Grid } from '@material-ui/core';
import ViewProduct from '../ViewProduct';

const ViewProductView = () => {
    return(
        <Grid container justify='center'>
            <Grid item xs={5}>
                <ViewProduct/>
            </Grid>
        </Grid>
    );
};

export default ViewProductView;