import React, { useState } from "react";

const MapValue = () => {
  const [value, setValue] = useState([
    {
      id: "1",
      name: "toan",
      phone: "1313123131",
      email: "dsadsa@gmail",
      password: "3213123123",
      address: "312312312",
      birthday: "32132131231231",
    },
    {
      id: "2",
      name: "toan",
      phone: "1313123131",
      email: "dsadsa@gmail",
      password: "3213123123",
      address: "312312312",
      birthday: "32132131231231",
    },
    {
      id: "3",
      name: "toan",
      phone: "1313123131",
      email: "dsadsa@gmail",
      password: "3213123123",
      address: "312312312",
      birthday: "32132131231231",
    },
    {
      id: "4",
      name: "toan",
      phone: "1313123131",
      email: "dsadsa@gmail",
      password: "3213123123",
      address: "312312312",
      birthday: "32132131231231",
    },
  ]);

  return (
    <div>
      <button></button>
      {value.map((item, index) => {
        <li key={index}> {item}</li>;
      })}
    </div>
  );
};

export default MapValue;
