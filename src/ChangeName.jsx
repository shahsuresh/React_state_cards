import React, { useState } from "react";

const ChangeName = () => {
  const [studentName, setStudentName] = useState("Prithvi");
  return (
    <div>
      <h1>{studentName}</h1>
      <button
        onClick={() => {
          setStudentName("Suresh");
        }}
      >
        Change Name
      </button>
      <br />
      <br />
      <input
        type="text"
        onChange={(event) => {
          const newName = event.target.value;
          setStudentName(newName);
        }}
      />
    </div>
  );
};

export default ChangeName;
