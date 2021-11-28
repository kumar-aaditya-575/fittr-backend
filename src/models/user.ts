import { string } from 'joi';
import { Schema, model, ObjectId, Document, Model} from 'mongoose';
import { WorkoutInterface } from './workouts';
import bcrypt from "bcryptjs";

// 1. Create an interface representing a document in MongoDB.
interface UserInterface {
    name: string;
    age: number;
    height:number;
    weight:number;
    googleSignInKey:string;
    email: string;
    password: string;
    workouts:WorkoutInterface[];
}

interface UserDocument extends UserInterface, Document {

}
interface UserModel extends Model<UserDocument> {
    isEmailTaken: (email: string) => Promise<UserDocument>;
}

const userSchema:Schema<UserDocument> = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: false },
    email:{ type:String, required: true},
    password:{type:String, required:true},
    height: { type: Number, required: false },
    weight: { type: Number, required: false },
    googleSignInKey: { type: String, required: false },
    workouts: []
});



userSchema.statics.isEmailTaken = function (email: string) {
    return this.findOne({ email });
};
userSchema.pre('save', function (next) {
    const user = this;
    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(3,  (err:Error, salt:string) => {
        if (err) return next(err);


        // hash the password along with our new salt
        bcrypt.hash(user.password, salt,  (e:Error, hash:string) => {
            if (e) return next(e);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});


const User = model<UserDocument, UserModel>("User", userSchema);
export { User, UserDocument};