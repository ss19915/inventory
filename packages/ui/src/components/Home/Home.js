import { Paper } from '@material-ui/core';
import { DefaultView, AddProductView, ViewProductView } from '../Views';
import Header from '../Header';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Home = (props)=> {
    return (
        <BrowserRouter>
            <Header/>
            <div elevation={0} style={{marginTop:'1.3vh', marginLeft:'3vw', marginRight:'3vw'}}>
                    <Route path='/' exact component={DefaultView}/>
                    <Route path='/products/add/' component={AddProductView}/>
                    <Route path='/products/view/' component={ViewProductView}/>
            </div>
        </BrowserRouter>
    );
};

export default Home;