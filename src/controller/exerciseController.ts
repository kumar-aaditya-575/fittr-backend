import getAllExercise from "../service/ExerciseService";
import {Request, Response } from "express";

const fetchAllExercises = async (req:Request, res:Response) => {
    const exercise = await getAllExercise();
    res.send(exercise);
}

export default fetchAllExercises;
