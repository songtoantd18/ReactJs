
import './App.css';
// import Medal from './components/Medal';
// import ListTodos from './Render';
import TodoItem from './components/TodoItem';
import Shopee from './components/Shopee'


 

function App() {

  return (
    <div>
      <Shopee>ok</Shopee>
      
      <TodoItem
      title={'title'}
      creator={'creator'}
      status={'new'}
      description={'description'}
      backgroundColor ={'gold'}
      color={'red'}
      />
       <TodoItem
      title={'title1'}
      creator={'creator'}
      status={'doing'}
      description={'description'}
      backgroundColor ={'green'}
      color={'yellow'}
      />
       <TodoItem
      title={'title'}
      creator={'creator'}
      status={'done'}
      description={'description'}
      backgroundColor ={'#00ff00'}
      color={'yellow'}
      />
 


    </div>
 
    // <div className='layout'>
    //   <Medal
    //   boder= {'yellow'}
    //   title = {'nhom1'}
    //   groupAvartar={'dua xe'}
    //   numberMember= {'dasdasdsa'}
    //   project={'app thoi tiet'}
    //   text={'dasdasdasdas'}
    //   logoTask={'dasdasdasdas'}
    //   colorIndex={'blue'}></Medal>
    //     <Medal
    //   boder= {'yellow'}
    //   title = {'nhom1'}
    //   groupAvartar={'dua xe'}
    //   numberMember= {'dasdasdsa'}
    //   project={'app thoi tiet'}
    //   text={'dasdasdasdas'}
    //   logoTask={'dasdasdasdas'}
    //   colorIndex={'red'}>

    //   </Medal>
    //   <Medal
    //   boder= {'yellow'}
    //   title = {'nhom1'}
    //   groupAvartar={'dua xe'}
    //   numberMember= {'dasdasdsa'}
    //   project={'app thoi tiet'}
    //   text={'dasdasdasdas'}
    //   logoTask={'dasdasdasdas'}
    //   colorIndex={'#00ff00'}>
        
    //   </Medal>
      
     
    // </div>
  );
}

export default App;
