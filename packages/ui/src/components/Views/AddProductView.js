import CreateProduct from '../CreateProduct';
import { withRouter } from 'react-router-dom';

const AddProductView = ({ history }) => {
    const onProductCreate= () => {
        history.push('/');
    }

    return (
        <CreateProduct onProductCreate={onProductCreate}/>
    );
}

export default withRouter(AddProductView);