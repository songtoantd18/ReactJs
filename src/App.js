
import "./App.css";
import TodoItem from "./component/todoItem";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Body from "./component/Body";
import Footer from './component/Footer';

function App() {
  return (
    <div>
        <Header></Header>
        <Sidebar></Sidebar>
        <Body></Body>
        <Footer></Footer>


    </div>
  

    // <div className="layout">
    //   <TodoItem/>
    // </div>
    // <div>
    //   <Circle id={'id 1'} title= {'title1'} backgroundColor={'pink'}></Circle>
    //   <Circle id={'id2'} title= {'title 2'} backgroundColor={'silver'}></Circle>

    // </div>
  );
}

export default App;
