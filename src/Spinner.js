import React from 'react';

const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{ props.message }</div>
        </div>
    );
}

// If no props will be defined in index.js props will take the default value
// If props will be defined then .defaultProps will be overwritten
Spinner.defaultProps = {
    message: 'Loading...'
}

export default Spinner;