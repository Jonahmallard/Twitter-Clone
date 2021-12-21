import {React, useState} from 'react'

export default function Livecoding() {
  const [inputValue, setInputValue] = useState("");
  const [endingValue, setEndingValue] = useState(0);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const addValue = () => {
    setEndingValue(inputValue.length + endingValue)
  }

  return (
    <div>
        <input
          type="text"
          name=""
          placeholder="Value"
          value={inputValue}
          onChange={handleChange}
        />
        <button onClick={addValue}>Click me</button>
        <h1>{endingValue}</h1>
    </div>
  );
};
