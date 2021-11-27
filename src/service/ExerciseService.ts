import {Exercise, ExerciseInterface} from "../models/exercises"
import { Workout, WorkoutInterface } from "../models/workouts";
const getAllExercise = async () => {
    const res:ExerciseInterface[] = await Exercise.find({}).exec();
    return res;
}

const getAllWorkouts= async () => {
    const res: WorkoutInterface[] = await Workout.find({}).exec();
    return res;

}

export {getAllExercise, getAllWorkouts};
