import Joi from "joi";

const register = Joi.object().keys({
        email: Joi.string().email({ tlds: { allow: false } }).required(),
        password: Joi.string().required(),
        name: Joi.string().required(),
    });


const login = Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required()
    });


export  {
    register,
    login,
};