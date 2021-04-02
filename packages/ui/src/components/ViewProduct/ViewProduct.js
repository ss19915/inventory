import { Typography } from '@material-ui/core';
import React from 'react';

const ViewProduct = ({product={}}) => {
    const {
        Name,
        Description,
        Rating,
        Price,
    } = product;

    return (
        <React.Fragment>
            <Typography variant='h5'>View Product</Typography>
            <Typography >Name: {Name}</Typography>
            <Typography >Price: {Price}</Typography>
            <Typography >Rating: {Rating}</Typography>
            <Typography >Description: {Description}</Typography>
        </React.Fragment>
    );
};

export default ViewProduct;