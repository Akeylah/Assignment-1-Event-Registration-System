import express from "express";
import {
addStudent,
getStudents
} 
from "../controllers/StudentController";
const router = express.Router();
router.post("/add", addStudent);
router.get("/all", getStudents);
export default router;