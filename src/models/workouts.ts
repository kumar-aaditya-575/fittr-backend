import { Schema, model, ObjectId } from 'mongoose';

interface WorkoutInterface {
    name: string;
    description: string;
    exercises: ObjectId[];
}
const schema = new Schema<WorkoutInterface>({
    name: { type: String, required: true },
    description: { type: String, required: false },
    exercises: [],
});
const Workout = model("Workout", schema);
export { Workout, WorkoutInterface };