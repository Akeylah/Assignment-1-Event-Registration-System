import express from "express";

import {

addEvent,
getEvents,
registerStudent

} from "../controllers/eventController";



const router = express.Router();



router.post("/add", addEvent);

router.get("/all", getEvents);

router.post("/register", registerStudent);



export default router;