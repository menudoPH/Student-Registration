import axios from "axios";
import instance from "./api";

export const getStudents = () => {
  return instance.get("/user");
};

export const showStudent = () => {
  return instance.get("/user/");
};

export const addStudent = (student: any) => {
  return instance.post("/user", student);
};
