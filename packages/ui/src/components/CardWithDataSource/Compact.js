import React from 'react';
import { Paper } from '@material-ui/core';
import T from 'prop-types';

const Compact = (props) => {
    const {
        children,
        compact,
        label
    } = props;

    if (compact) {
        return (children);
    }

    else if (label) {
        return (
            <Paper>
                {label}
                <Paper>
                    {children}
                </Paper>
            </Paper>
        );
    }

    return (
        <Paper>
            {children}
        </Paper>
    );
};

Compact.propTypes = {
    children: T.node,
    compact: T.bool,
    label: T.node,
};

export default Compact;
