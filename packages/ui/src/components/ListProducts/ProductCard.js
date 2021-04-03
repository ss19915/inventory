import { Card, CardHeader, CardContent, Typography, Grid, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const ProductCard = ({product, deleteProduct}) => {
    const {
        ProductId,
        Name,
        Price,
        Rating
    } = product;

    const header = <Grid container justify='space-around' alignItems='center'>
        <Grid item>
        <Typography variant='h4'>{Name}</Typography>
        </Grid>
        <Grid item>
        <Typography variant='h2' style={{color:'gray',fontWeight: 'lighter'}}>|</Typography>
        </Grid>
        <Grid item>
        <Typography variant='h4'>${Price}</Typography>
        </Grid>
    </Grid>;

    return (
        <Card data-product-id={ProductId}>
            <CardHeader title={header}/>
            <CardContent>
                <Grid container alignItems='baseline' justify='space-between'>
                    <Grid item>{Rating}{'  '}⭐</Grid>
                    <Grid item><IconButton onClick={(e) => deleteProduct(e, ProductId)}><DeleteIcon/></IconButton></Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default ProductCard;