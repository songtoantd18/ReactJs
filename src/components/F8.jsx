import React from 'react';

const F8 = ({id,image,country}) => {
    return (
        <div>
            <p>id :{id}</p>
            <p>country :{country}</p>
            <image src={image}></image>
        </div>
    );
};



export default F8;