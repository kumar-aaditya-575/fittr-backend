import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongoose';

import config from '../config';
import { tokenTypes } from '../config/token';
import {  UserDocument } from '../models/user';

interface TokenInterface {
    token: string;
    expiresIn: Date;
};

const generateToken = (userId:ObjectId, expires:number, type:string, secret:string = config.jwt.secret):string => {
    const token = jwt.sign({ "sub": userId, "type": type, exp: expires }, secret);

    return token;
};

const generateAuthTokens = async (user: UserDocument):Promise<TokenInterface> => {
    const expiryTime = new Date(new Date().getTime() + config.jwt.accessExpirationMinutes * 60000);
    const token =  generateToken(user._id, Math.round(expiryTime.getTime() / 1000), tokenTypes.ACCESS);

    return {
        token,
        expiresIn: expiryTime
    };
};

export {
    generateAuthTokens,
    TokenInterface,
};
