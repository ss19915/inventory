import ListProducts from '../ListProducts';
import { withRouter } from 'react-router-dom';

const DefaultView = ({history}) => {
    const onProductClick = (productId) => {
        history.push(`/products/view/${productId}`);
    }

    return (
        <ListProducts onProductClick={onProductClick}/>
    );
};

export default withRouter(DefaultView);