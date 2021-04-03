import { Product } from '@inventory/api';
import CardWithDataSource from '../CardWithDataSource';
import ListProducts from './ListProductsLogic';


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
}

export default ListProductsContext;