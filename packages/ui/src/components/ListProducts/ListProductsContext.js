import { Product } from '@inventory/api';
import CardWithDataSource from '../CardWithDataSource';
import ListProducts from './ListProductsLogic';

const processResponse = res => ({products: res});

const ListProductsContext = () => (
    <CardWithDataSource
        apiCallMethod={Product.getAll}
        processResponse={processResponse}
    >
        <ListProducts/>
    </CardWithDataSource>
);

export default ListProductsContext;