import React, { useEffect, useState } from "react";
import axios from "axios";
import { getStudents } from "../routes/user-api";
import AddStudents from "./AddStudents";

const Students = () => {
  const [students, setStudents] = useState<any[]>([]);

  useEffect(() => {
    const fetchAllStudents = async () => {
      try {
        const studResults = await getStudents();
        setStudents(studResults.data);
      } catch (err) {}
    };
    fetchAllStudents();
  }, []);
  return (
    <>
      <div>Students Hello</div>
      <div className="studente">
        {students.map((student) => (
          <div key={student.id} className="student">
            <h1>{student.user_name}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default Students;
