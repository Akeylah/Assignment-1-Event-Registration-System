import { Request, Response } from "express";
import pool from "../db/db";
import { Event } from "../classes/event";



export const addEvent = async (req: Request, res: Response) => {

try {

const {

event_id,
event_name,
event_date,
max_participants

} = req.body;



const event = new Event(

event_id,
event_name,
new Date(event_date),
max_participants

);



await pool.query(

`INSERT INTO events
(event_id, event_name, event_date, max_participants)
VALUES ($1,$2,$3,$4)`,

[

event_id,
event_name,
event_date,
max_participants

]

);


res.send("Event Added Successfully");

}

catch (error) {

res.status(500).send(error);

}

};




export const getEvents = async (req: Request, res: Response) => {

try {

const result = await pool.query(

"SELECT * FROM events"

);


res.json(result.rows);

}

catch (error) {

res.status(500).send(error);

}

};




export const registerStudent = async (req: Request, res: Response) => {

try {

const {

student_id,
event_id

} = req.body;



const eventResult = await pool.query(

"SELECT * FROM events WHERE event_id=$1",

[event_id]

);



const event = eventResult.rows[0];



if (!event)

return res.send("Event Not Found");



if (event.numofparticipants >= event.max_participants)

return res.send("Event is Full");



await pool.query(

`UPDATE students
SET registeredevent_id=$1
WHERE student_id=$2`,

[event_id, student_id]

);



await pool.query(

`UPDATE events
SET numofparticipants = numofparticipants + 1
WHERE event_id=$1`,

[event_id]

);



res.send("Student Registered Successfully");

}

catch (error) {

res.status(500).send(error);

}

};