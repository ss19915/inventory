import ListProducts from './ListProducts';
import { Product } from '@inventory/api';

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
            const {
                updateActiveProduct,
                onProductClick,
            } = props;

            updateActiveProduct(productId);
            onProductClick(productId);
        }
    };

    const deleteProduct = (event, productId) => {
        event.stopPropagation();
        event.target.disabled = true;

        Product.remove(productId).then(() => window.location.reload()).catch((err)=> {
            console.log(err);
            alert('Error occured while deleting product');
            event.target.disabled = false;
        });
    };

    return (
        <ListProducts
            {...props}
            productContainerID={productContainerID}
            onProductClick={onProductClick}
            deleteProduct={deleteProduct}
        />
    );
}

export default ListProductsLogic;