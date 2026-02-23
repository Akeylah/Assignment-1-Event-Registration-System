import { Request, Response } from "express";
import pool from "../db/db";
import { Student } from "../classes/student";



export const addStudent = async (req: Request, res: Response) => {

try {

const {

student_id,
first_name,
last_name,
department

} = req.body;


const student = new Student(

student_id,
first_name,
last_name,
department

);


await pool.query(

`INSERT INTO students 
(student_id, first_name, last_name, department)
VALUES ($1,$2,$3,$4)`,

[

student.getStudentID(),
student.getFirstName(),
student.getLastName(),
student.getDepartment()

]

);


res.send("Student Added Successfully");

}

catch (error) {

res.status(500).send(error);

}

};




export const getStudents = async (req: Request, res: Response) => {

try {

const result = await pool.query(

"SELECT * FROM students"

);


res.json(result.rows);

}

catch (error) {

res.status(500).send(error);

}

};