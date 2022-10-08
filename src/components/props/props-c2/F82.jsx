import React from 'react';
import PropTypes from 'prop-types';

const F82 = ({id,country,city}) => {
    return (
        <div>
            <p> id data 2  :{id}</p>
            <p> city data 2 :{city}</p>
            <img src={country} style={{width:500, height:600}}/>
        </div>
    );
};



export default F82;