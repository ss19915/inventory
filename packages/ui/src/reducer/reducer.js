import constants from '../constants';

const {
    UPDATE_ACTIVE_PRODUCT,
} = constants;

const InitialState = {};

const reducer = ( state = InitialState, action) => {
    switch(action.type){
        case UPDATE_ACTIVE_PRODUCT:
            return { ...state, activeProduct: action.productId }

        default: 
            return state;
    }
};

export default reducer;