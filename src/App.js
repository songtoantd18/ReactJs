import "./App.css";

import Form from "./components/useState/Form";
import BodyData2 from "./components/props/props-c2/BodyData2";
import F81 from "./components/props/props-c2/F81.jsx";
import FormRender from "./components/useState/FormRender";
import { useState } from "react";

function App() {
  const [valueApp, setValueApp] = useState("gia tri p");
  const handleValueInput = (value1) => {
    console.log("appjs value:", value1);
    setValueApp(value1);
  };
  return (
    <div>
      <h1>{valueApp}</h1>
      <FormRender handleValueInput={handleValueInput} />
    </div>
  );
}

export default App;
