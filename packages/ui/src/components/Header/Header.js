import { Typography, Paper, Button, Grid } from '@material-ui/core';

const Header = ({onHeaderClick, onAdd}) => (
    <Paper>
        <Grid container spacing={1}>
            <Grid item>
                <Typography onClick={onHeaderClick} variant='h4'>Inventory</Typography>
            </Grid>
            <Grid item>
                <Button onClick={onAdd}>Add New Product</Button>
            </Grid>
        </Grid>
    </Paper>
);

export default Header;