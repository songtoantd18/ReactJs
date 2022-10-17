import React from "react";
import { useState } from "react";

const TwoWaybiding = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log({ name, email });
  };
  return (
    <div>
      <h1>
        {name},{email}
      </h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />

      <button onClick={handleSubmit}> change</button>
    </div>
  );
};

export default TwoWaybiding;