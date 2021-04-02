import { Grid } from '@material-ui/core';
import ProductCard from './ProductCard';

const ListProducts = ({ products=[], onProductClick }) => (
    <Grid container spacing={2} onClick={onProductClick}>
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