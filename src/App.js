import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { MODE } from "./constants";
import { useState } from "react";

function App() {
  const [renderMode, setRenderMode] = useState(MODE.SHOW_LIST);

  const handleChangeRenderMode = (mode = MODE.ADD_NEW) => {
    setRenderMode(mode);
  };
  return (
    <div className="layout">
      <Header
        handleCreateNewTask={() => handleChangeRenderMode(MODE.ADD_NEW)}
      />
      <Sidebar />

      <Body mode={renderMode} handleChangeRenderMode={handleChangeRenderMode} />

      {renderMode === MODE.SHOW_LIST && <Footer />}
    </div>
  );
}

export default App;
