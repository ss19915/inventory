import { Grid } from '@material-ui/core';
import ProductCard from './ProductCard';

const ListProducts = ({ products=[], onProductClick, productContainerID }) => (
    <Grid
        container
        justify='space-around'
        spacing={3}
        onClick={onProductClick}
        id={productContainerID}
    >
        {products.map( (product, index) =>(
            <Grid
                xs={3}
                key={`product${index}`}
                item
            >
                <ProductCard product={product}/>
            </Grid>
        ))}
    </Grid>
);

export default ListProducts;