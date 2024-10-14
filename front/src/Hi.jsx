import React, { useState } from "react";

const Hi = ({ str }) => {
  const [arr, setArr] = useState(new Array(str.split(" ").length).fill(false));
  const [words, setWords] = useState(str.split(" "));

  const handleIndexChange = (index) => {
    setArr((prev) => {
      let arr = [...prev];
      arr[index] = !arr[index];
      return arr;
    });
  };
  return (
    <div className="flex gap-4 bg-slate-600">
      {words.map((word, index) => (
        <button
          onClick={() => handleIndexChange(index)}
          className={arr[index] === true ? "bg-black/10" : "bg-white"}
        >
          {word}
        </button>
      ))}
    </div>
  );
};

export default Hi;
