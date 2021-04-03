import ViewProduct from './ViewProduct';
import CardWithDataSource from '../CardWithDataSource';
import { Product } from '@inventory/api';
import { connect } from 'react-redux';

const processResponse = res => ({product: res});

const ViewProductContext = ({activeProduct}) => (
    <CardWithDataSource
        apiCallMethod={Product.get}
        payload={activeProduct}
        processResponse={processResponse}
    >
        <ViewProduct/>
    </CardWithDataSource>
);

const mapStateToProps = ({activeProduct}) => ({
    activeProduct
});

export default connect(mapStateToProps)(ViewProductContext);

