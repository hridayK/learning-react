import React from 'react';
import PropTypes from 'prop-types';

function Task(props){
    const details = props.details;
    return(
        <div>
            {details}
        </div>
    );
}

export default Task;

