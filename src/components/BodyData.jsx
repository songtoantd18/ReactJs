import React from 'react';
import F8 from './F8';

const BodyData = () => {
    const dataValue =
    [
        {
          "image": "http://loremflickr.com/640/480/animals",
          "country": "Jordan",
          "id": "1"
        },
        {
          "image": "http://loremflickr.com/640/480/animals",
          "country": "Barbados",
          "id": "2"
        },
        {
          "image": "http://loremflickr.com/640/480/animals",
          "country": "British Indian Ocean Territory (Chagos Archipelago)",
          "id": "3"
        },
        {
          "image": "http://loremflickr.com/640/480/animals",
          "country": "Greece",
          "id": "4"
        }
      ]
      const renderDataValue =()=>{
        return dataValue.map((item,index)=>{
            return <F8
            id ={item.id}
            country={item.country}
            image ={item.image}
            />
        })
      }
    return (
        <div>
            {renderDataValue()}
            
        </div>
    );
};



export default BodyData;