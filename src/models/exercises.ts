import { Schema, model} from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface ExerciseInterface{
    name: string;
    description: string;
    "Tracking type": number;
}
const schema = new Schema<ExerciseInterface>({
    name: { type: String, required: true },
    description: { type: String, required: false },
    "Tracking type": { type:Number , required: true}
});
const Exercise = model("Exercise", schema);
export {Exercise, ExerciseInterface } ;