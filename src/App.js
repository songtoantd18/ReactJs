
import './App.css';
import Medal from './Medal';




function App() {

  return (
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

  //   <div>
  //   <p>title:task1</p>
  //   <p>creator : loc</p>
  //   <p>status :new</p>
  //   <hr/>
  //   <p>description this is a task</p>
    
  // </div>

    
  );
}

export default App;
