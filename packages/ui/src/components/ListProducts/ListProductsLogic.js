import ListProducts from './ListProducts';

const ListProductsLogic = (props) => {
    const onProductClick = () => {
    };

    return (
        <ListProducts
            {...props}
            onProductClick={onProductClick}
        />
    );
}

export default ListProductsLogic;