import { Product } from '@inventory/api';
import CardWithDataSource from '../CardWithDataSource';
import ListProducts from './ListProductsLogic';
import { connect } from 'react-redux';
import { updateActiveProduct } from '../../actions';

const ListProductsContext = (props) => {

    const processResponse = res => ({products: res});

    return(    
        <CardWithDataSource
            apiCallMethod={Product.getAll}
            processResponse={processResponse}
        >
            <ListProducts {...props}/>
        </CardWithDataSource>
    );
};

const mapDispatchToProps = (dispatch) => ({
    updateActiveProduct: (productId) => { dispatch(updateActiveProduct(productId)) },
});

export default connect(null, mapDispatchToProps)(ListProductsContext);