import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main"
import Taskbar from "./components/Taskbar"


function App() {
  return (
    <div className="total">
      <div className="container">khong co gi 
        <Header></Header>
        <div className="taskbar_main">
          <Taskbar></Taskbar>
          <Main></Main>


        </div>
      </div>
    </div>
  );
}

export default App;
