import React from 'react';
import CreateProduct from './CreateProduct';
import { Product } from '@inventory/api';

const CreateProductLogic = ({onProductCreate}) => {
    const [isAddDisabled, updateIsAddDisabled] = React.useState(false);

    const product = {};

    const onInputChange = ({target: {id, value}})=>{
        product[id] = value
    };

    const onAddError = (err) =>{
        updateIsAddDisabled(false);
        alert(err.toString());
    };

    const onAdd = ()=>{
        updateIsAddDisabled(true);
        Product.add(product).then(onProductCreate).catch(onAddError);
    };

    return (
        <CreateProduct
            isAddDisabled={isAddDisabled}
            onInputChange={onInputChange}
            onAdd={onAdd}
        />
    );
};

export default CreateProductLogic;