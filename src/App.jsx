import React, { useState } from "react";
import "./App.css";
import ChangeName from "./ChangeName";
import StudentDetails from "./StudentDetails";

// hooks=> React Functions

const App = () => {
  let [count, setCount] = useState(1);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
      {/* //?====importing changeName Component==== */}
      <ChangeName />
      {/* //?=======Student Details Component====== */}
      <StudentDetails />
    </div>
  );
};

export default App;
