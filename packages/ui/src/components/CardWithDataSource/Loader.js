import React from 'react';
import { CircularProgress } from '@material-ui/core';
import Compact from './Compact';
import T from 'prop-types';

const Loader = (props) => {
    const { compact = true } = props;

    return (
        <Compact compact={compact}>
            <CircularProgress/>
        </Compact>
    );
}

Loader.propTypes = {
    compact: T.bool,
};

export default Loader;