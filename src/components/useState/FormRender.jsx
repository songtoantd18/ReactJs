import React, { useState } from "react";

const FormRender = ({ handleValueInput }) => {
  const [value1, setValue1] = useState("songtoan123");

  const handleOnchange = (e) => {
    setValue1(e.target.value);
    console.log(" e.target.value:", e.target.value);
  };
  console.log("name:", value1);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleValueInput(value1);
  };
  return (
    <div>
      <input onChange={(e) => handleOnchange(e)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default FormRender;
