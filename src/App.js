import "./App.css";
import {useState} from 'react'


function App() {
  const [counter,setCounter]=useState('1')

  const handleIncrease =()=>{
    setCounter(counter+1)
  }
  const handleDecrease =()=>{
    setCounter(counter-1)
  }
  const handleDouble =()=>{
    setCounter(counter*counter)
  }


  // const [infor,setInfor]=useState({
  //   name:'nguyen van a',
  //   age:18,
  //   address:'ha noi, viet nam'
  // })
  // const handleUpdate=()=>{
  //   setInfor({
  //     ...infor,
  //     bio:'yeu mau hong'
  //   })
  // }




  // const [counter,setCounter] =useState(()=>{
  // const total=orders.reduce((total,urc)=> {return total+urc})
  // console.log('total:',total);
  // return total

    
  // })
  // const handleIncrease=()=>{
  //   setCounter(prevState=>prevState +1)

  // }
  return (
    <div style={{color:'red'}} >
      <h1>{counter}</h1>
      
      <button onClick={handleDecrease}>-</button>

      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDouble}>**</button>


    </div>
  );
}

export default App;
