import {getAllExercise, getAllWorkouts} from "../service/ExerciseService";
import {Request, Response } from "express";

const fetchAllExercises = async (req:Request, res:Response) => {
    const exercise = await getAllExercise();
    res.send(exercise);
}
const fetchAllWorkouts = async (req: Request, res: Response) => {
    const exercise = await getAllWorkouts();
    res.send(exercise);
}
export {fetchAllExercises, fetchAllWorkouts};
