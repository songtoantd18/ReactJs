import React from 'react';
import { useState } from 'react';
import './ColorBox.css';




function getRandomColor(){
    const Color_List=['deeppink','green','blue','yellow','black','aqua'];
    const RandomIndex= Math.trunc(Math.random()*6);
    return Color_List[RandomIndex]
}

// https://www.youtube.com/watch?v=SIAGpAaLSaI&list=LL&index=1&t=165s bai giai

function ColorBox() {
   

    const [color,setColor]=useState(()=>{
        const initColor =localStorage.getItem('box_color')||'deeppink';
        console.log('initColor:',initColor);

    })
    



    function handleBoxClick(){
        const newColor =getRandomColor();
        setColor(newColor);
        localStorage.setItem('box_color',newColor)

    }
    return (
        <div className='color-box'
        style={{backgroundColor:color}}
        

        onClick={handleBoxClick}
        
        >
            color box
            
        </div>
    );
}

export default ColorBox;