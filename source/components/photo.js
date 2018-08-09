import React from 'react';

export default (props) => {
    return props.secured ? null : (
        <div className = 'photo'>
            <img src = { props.src } />
        </div>
    );
};