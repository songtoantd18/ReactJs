
import React from 'react';

const BodyData = () => {
    const dataValue =
    [
        {
         "country": "http://loremflickr.com/640/480/food",
         "image": "http://loremflickr.com/640/480/technics",
         "city": "Taunton",
         "id": "1"
        },
        {
         "country": "http://loremflickr.com/640/480/abstract",
         "image": "http://loremflickr.com/640/480/technics",
         "city": "Trenton",
         "id": "2"
        },
        {
         "country": "http://loremflickr.com/640/480/abstract",
         "image": "http://loremflickr.com/640/480/technics",
         "city": "Haltom City",
         "id": "3"
        },
        {
         "country": "http://loremflickr.com/640/480/cats",
         "image": "http://loremflickr.com/640/480/technics",
         "city": "Canton",
         "id": "4"
        },
        {
         "country": "http://loremflickr.com/640/480/food",
         "image": "http://loremflickr.com/640/480/technics",
         "city": "Kirkland",
         "id": "5"
        },
        {
         "country": "http://loremflickr.com/640/480/nature",
         "image": "http://loremflickr.com/640/480/technics",
         "city": "Blacksburg",
         "id": "6"
        },
        {
         "country": "http://loremflickr.com/640/480/people",
         "image": "http://loremflickr.com/640/480/technics",
         "city": "Fresno",
         "id": "7"
        },
        {
         "country": "http://loremflickr.com/640/480/city",
         "image": "http://loremflickr.com/640/480/technics",
         "city": "Tulare",
         "id": "8"
        },
        {
         "country": "http://loremflickr.com/640/480/city",
         "image": "http://loremflickr.com/640/480/technics",
         "city": "Hammond",
         "id": "9"
        },
        {
         "country": "http://loremflickr.com/640/480/sports",
         "image": "http://loremflickr.com/640/480/technics",
         "city": "Framingham",
         "id": "10"
        },
        {
         "country": "http://loremflickr.com/640/480/nature",
         "image": "http://loremflickr.com/640/480/technics",
         "city": "Waipahu",
         "id": "11"
        },
        {
         "country": "http://loremflickr.com/640/480/nature",
         "image": "http://loremflickr.com/640/480/technics",
         "city": "Pearland",
         "id": "12"
        },
        {
         "country": "http://loremflickr.com/640/480/nature",
         "image": "http://loremflickr.com/640/480/technics",
         "city": "Burlington",
         "id": "13"
        },
        {
         "country": "http://loremflickr.com/640/480/city",
         "image": "http://loremflickr.com/640/480/technics",
         "city": "Eugene",
         "id": "14"
        },
        {
         "country": "http://loremflickr.com/640/480/food",
         "image": "http://loremflickr.com/640/480/technics",
         "city": "Miramar",
         "id": "15"
        },
        {
         "country": "http://loremflickr.com/640/480/transport",
         "image": "http://loremflickr.com/640/480/technics",
         "city": "Perris",
         "id": "16"
        },
        {
         "country": "http://loremflickr.com/640/480/cats",
         "image": "http://loremflickr.com/640/480/technics",
         "city": "Pasadena",
         "id": "17"
        },
        {
         "country": "http://loremflickr.com/640/480/cats",
         "image": "http://loremflickr.com/640/480/technics",
         "city": "Tinley Park",
         "id": "18"
        },
        {
         "country": "http://loremflickr.com/640/480/sports",
         "image": "http://loremflickr.com/640/480/technics",
         "city": "Bethesda",
         "id": "19"
        },
        {
         "country": "http://loremflickr.com/640/480/animals",
         "image": "http://loremflickr.com/640/480/technics",
         city: "Hackensack",
         "id": "20"
        }
       ]
      const renderDataValue =()=>(
        dataValue.map((item,index)=>(
            <div>
                <p>id :{item.id}</p>
                <p>city :{item.city}</p>
                <img src={item.image} style={{width:500, height:600}}/>
                <img src={item.country} style={{width:500, height:600}}/>
                



            </div>
        ))
       
       )
       
    return (
        <div>
            {renderDataValue()}
            
        </div>
    );
};



export default BodyData;