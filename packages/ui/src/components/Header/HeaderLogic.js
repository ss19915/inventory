import Header from './Header';
import { withRouter } from 'react-router-dom';

const HeaderLogic = (props) => {
    const { history } = props;

    const onAdd = () => {
        history.push('/products/add');
    };

    const onHeaderClick = () => {
        history.push('/');
    };

    return (
        <Header onHeaderClick={onHeaderClick} onAdd={onAdd}/>
    );
};

export default withRouter(HeaderLogic);