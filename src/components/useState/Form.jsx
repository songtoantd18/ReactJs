// Tạo component <Form />​

// Trong Form có 1 thẻ input và 1 nút button để submit​

// Import Form vào component App​

// Nhập text vào input, nhấn nút submit và hiện dữ liệu text đấy trong thẻ p ở trong App
import React from "react";
import { useState } from "react";

const Form = () => {
  const [value1, setValue1] = useState("songtoan123");

  const handleChange = (e) => {
    console.log("e.target.value:", e.target.value);
    setValue1(e.target.value);
  };
  return (
    <div>
      <form>
        <label>nhap input</label>
        <input type="text" onChange={(e) => handleChange(e)} value={value1} />
        <button> submit</button>
      </form>
    </div>
  );
};

export default Form;
