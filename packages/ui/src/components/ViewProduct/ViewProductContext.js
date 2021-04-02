import ViewProduct from './ViewProduct';
import CardWithDataSource from '../CardWithDataSource';
import { Product } from '@inventory/api';

const processResponse = res => ({product: res});

const ViewProductContext = ({productId}) => (
    <CardWithDataSource
        apiCallMethod={Product.get}
        payload={productId}
        processResponse={processResponse}
    >
        <ViewProduct/>
    </CardWithDataSource>
);

export default ViewProductContext;

