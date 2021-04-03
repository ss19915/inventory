import { Card, CardHeader, CardContent, Typography, Grid } from '@material-ui/core';

const ProductCard = ({product}) => {
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
                <Grid container alignItems='baseline' spacing={1}>
                    <Grid item>{Rating}</Grid>
                    <Grid item>⭐</Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default ProductCard;