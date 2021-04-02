import { Card, CardHeader, CardContent } from '@material-ui/core';

const ProductCard = ({product}) => {
    const {
        ProductId,
        Name,
        Price,
    } = product;

    return (
        <Card data-product-id={ProductId}>
            <CardHeader title={Name}/>
            <CardContent>Price: ${Price}</CardContent>
        </Card>
    );
};

export default ProductCard;