import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { addStudent, getStudents } from "../routes/user-api";

const AddStudents = () => {
  const [student, setStudent] = useState({
    user_name: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setStudent((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleclick = async () => {
    try {
      await addStudent(student);
      navigate("/students");
    } catch (err) {
      console.log(err);
    }
  };
  console.log(student);

  return (
    <>
      <div>Add Students</div>
      <div className="form">
        <h1>Add New Student</h1>
        <input
          className="border"
          onChange={handleChange}
          type="text"
          name="user_name"
          id=""
        />
      </div>
      <Button color="blue" onClick={handleclick}>
        Submit
      </Button>
    </>
  );
};

export default AddStudents;
