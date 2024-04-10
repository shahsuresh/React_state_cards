import React, { useState } from "react";

const StudentDetails = () => {
  const [studentInfo, setStudentInfo] = useState({
    name: "Suresh",
    age: "20",
    address: "Kathmandu",
  });
  return (
    <div>
      <h1>Name: {studentInfo.name}</h1>
      <h3>Age: {studentInfo.age}</h3>
      <p>Address: {studentInfo.address}</p>
      <br />
      {/* <button
        onClick={() => {
          setStudentInfo({
            name: "Manish",
            age: 21,
            address: "Balkumari",
          });
        }}
      >
        Change Student
      </button> */}
      <div style={{ display: "flex", gap: "1rem", height: "2rem" }}>
        <input
          type="text"
          placeholder="student name"
          onChange={(event) => {
            const newName = event.target.value;
            setStudentInfo({ ...studentInfo, name: newName });
          }}
        />
        <input
          type="number"
          placeholder="age"
          onChange={(event) => {
            const newAge = event.target.value;
            setStudentInfo({ ...studentInfo, age: newAge });
          }}
        />
        <input
          type="text"
          placeholder="address"
          onChange={(event) => {
            const newAddress = event.target.value;
            setStudentInfo({ ...studentInfo, address: newAddress });
          }}
        />
      </div>
    </div>
  );
};

export default StudentDetails;
