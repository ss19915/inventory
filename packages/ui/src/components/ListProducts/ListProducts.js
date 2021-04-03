import { Grid } from '@material-ui/core';
import ProductCard from './ProductCard';

const ListProducts = ({ products=[], onProductClick, productContainerID }) => (
    <Grid
        container
        spacing={2}
        onClick={onProductClick}
        id={productContainerID}
    >
        {products.map( (product, index) =>(
            <Grid
                key={`product${index}`}
                item
            >
                <ProductCard product={product}/>
            </Grid>
        ))}
    </Grid>
);

export default ListProducts;