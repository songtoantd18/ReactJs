
import './App.css';
import Medal from './Medal';
import ListTodos from './Render';




function App() {

  return (
    // <div>
    //   <ListTodos/>

    // </div>
 
    <div className='layout'>
      <Medal
      boder= {'yellow'}
      title = {'nhom1'}
      groupAvartar={'dua xe'}
      numberMember= {'dasdasdsa'}
      project={'app thoi tiet'}
      text={'dasdasdasdas'}
      logoTask={'dasdasdasdas'}
      colorIndex={'blue'}></Medal>
        <Medal
      boder= {'yellow'}
      title = {'nhom1'}
      groupAvartar={'dua xe'}
      numberMember= {'dasdasdsa'}
      project={'app thoi tiet'}
      text={'dasdasdasdas'}
      logoTask={'dasdasdasdas'}
      colorIndex={'red'}>

      </Medal>
      <Medal
      boder= {'yellow'}
      title = {'nhom1'}
      groupAvartar={'dua xe'}
      numberMember= {'dasdasdsa'}
      project={'app thoi tiet'}
      text={'dasdasdasdas'}
      logoTask={'dasdasdasdas'}
      colorIndex={'#00ff00'}>
        
      </Medal>
      
     
    </div>
  );
}

export default App;
