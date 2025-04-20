//template for custom errors
class CustomError extends Error {
    constructor(message, status, details) {
        super(message);
        this.status = status || 500;
        this.details = details || null;
    }
}