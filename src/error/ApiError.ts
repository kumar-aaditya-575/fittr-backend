import { HttpStatus } from "http-status";

class ApiError extends Error {
    statusCode:number;
    errorMessage:string;

    constructor(statusCode:number, message:string) {
        super(message);
        this.errorMessage = message;
        this.statusCode = statusCode;

    }
}

export default ApiError;