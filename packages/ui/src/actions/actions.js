import constants from '../constants';

const {
    UPDATE_ACTIVE_PRODUCT,
} = constants;


export const updateActiveProduct = (productId) => ({
    type: UPDATE_ACTIVE_PRODUCT,
    productId,
});