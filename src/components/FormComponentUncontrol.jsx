import React, { useRef } from "react";

const FormComponentUncontrol = () => {
  const inputRef = useRef("ddd");
  return (
    <form>
      <input
        ref={inputRef}
        value={inputRef.current}
        onChange={(e) => {
          console.log("e.target.value:", e.target.value);
          return (inputRef.current = e.target.value);
        }}
      />
      <button>submit</button>
    </form>
  );
};

export default FormComponentUncontrol;
