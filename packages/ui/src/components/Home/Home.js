import { Paper } from '@material-ui/core';
import { DefaultView, AddProductView, ViewProductView } from '../Views';
import Header from '../Header';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Home = (props)=> {
    return (
        <BrowserRouter>
            <Header/>
            <Paper>
                    <Route path='/' exact component={DefaultView}/>
                    <Route path='/products/add/' component={AddProductView}/>
                    <Route path='/products/view/' component={ViewProductView}/>
            </Paper>
        </BrowserRouter>
    );
};

export default Home;