import Exercise from "../models/exercises"

const getAllExercise = async () => {
    const res = await Exercise.find({}).exec();
    //console.log(res);
    return res;

}

export default getAllExercise;
