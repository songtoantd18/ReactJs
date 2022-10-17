import React from "react";
import { useState } from "react";

const FormComponent = () => {
  const [valueInput, setValueInput] = useState("");
  return (
    <form action="">
      <input
        value={valueInput}
        onChange={(e) => {
          console.log("valueInput:", valueInput);
          return setValueInput(e.target.value);
        }}
      />
    </form>
  );
};

export default FormComponent;
