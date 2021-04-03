import { Divider, Typography } from '@material-ui/core';
import React from 'react';

const ViewProduct = ({product={}}) => {
    const {
        Name,
        Description,
        Rating,
        Price,
    } = product;

    return (
        <div style={{padding:'1em'}}>
            <Typography variant='h5'>View Product</Typography>
            <Divider />
            <Typography >Name: {Name}</Typography>
            <Typography >Price: {Price}</Typography>
            <Typography >Rating: {Rating}</Typography>
            <Typography >Description: {Description}</Typography>
        </div>
    );
};

export default ViewProduct;