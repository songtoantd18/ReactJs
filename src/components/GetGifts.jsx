import React from "react";
import { useState } from "react";

const GetGifts = () => {
  const gifts = ["cpu i9", "ram 32gb", "keyborad rgb"];
  const [gift, setGift] = useState();
  const takeGift = () => {
    const RandomNumber = Math.floor(Math.random() * gifts.length);
    setGift(gifts[RandomNumber]);
  };

  return (
    <div>
      <h1>{gift || "chua co phan thuong"} </h1>
      <button onClick={takeGift}>get gift</button>
    </div>
  );
};

export default GetGifts;
