import { CustomError } from './customError.js';

export class InternalServerError extends CustomError {
    constructor(message, details) {
        super(
            message || 'Internal Server Error',
            500,
            details);
    }
}

export class NotFoundError extends CustomError {
    constructor(message, details) {
        super(message || 'Resource Not Found', 404, details);
    }
}       