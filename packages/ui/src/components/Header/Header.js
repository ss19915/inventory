import { Typography, Paper, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


const styles = makeStyles({
    container: {
        padding: '1%'
    },
    homeBtn: {
        cursor: 'pointer'
    }
});

const Header = ({onHeaderClick, onAdd}) => {
    const classes = styles();

    return(
        <Paper>
            <Grid container justify='space-between' className={classes.container}>
                <Grid item>
                    <Typography className={classes.homeBtn} onClick={onHeaderClick} variant='h4'>Inventory</Typography>
                </Grid>
                <Grid item>
                    <Button onClick={onAdd}> + Add New Product</Button>
                </Grid>
            </Grid>
        </Paper>
    );
}
    


export default Header;