import "./App.css";

import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("song toan");
  const [age, setAge] = useState("18");
  const [error, setError] = useState("nhap sai");
  ///////////////////////////////
  useEffect(() => {
    console.log("vidu:");
  }, []);

  //////////////////////
  useEffect(() => {
    if (name.length > 5) {
      setError("name is invalid");
    }
    if (!!error <= 5 && name.length <= 5) {
      setError("");
    }
  }, [name]);

  ////////////////////////////
  useEffect(() => {
    if (age < 18) {
      setError("age is invalid");
    }
    if (!!error && age > 18) {
      setError("");
    }
  }, [age]);
  const handleChange = (e) => {
    console.log("    e.target.value:", e.target.value);
  };

  return (
    <div>
      <form>
        <label> name : </label>
        <input type="text" onChange={(e) => handleChange(e)} />
        <label> tuoi : </label>
        <input type="number" onChange={(e) => handleChange(e)} />
        <h2>{error}</h2>
      </form>
    </div>
  );
}

export default App;
