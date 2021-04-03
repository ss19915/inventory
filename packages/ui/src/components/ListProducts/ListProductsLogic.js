import ListProducts from './ListProducts';

const ListProductsLogic = (props) => {
    const productContainerID = 'product-container';

    const getProductId = (target) =>{
        if(target.id===productContainerID){
            return null;
        }

        let productId = target.dataset.productId;
        
        if(productId!==undefined){
            return productId;
        }
        else{
            return getProductId(target.parentNode);
        }
    }

    const onProductClick = ({target}) => {
        let productId = getProductId(target);

        if(productId!==null){
            props.onProductClick(productId)
        }
    };

    return (
        <ListProducts
            {...props}
            productContainerID={productContainerID}
            onProductClick={onProductClick}
        />
    );
}

export default ListProductsLogic;