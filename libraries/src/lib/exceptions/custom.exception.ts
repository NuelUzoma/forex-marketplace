/**
 * Custom Exceptions to be used throught the microservices
 * The custom exceptions are listed below:
 * 1. NotFoundException
 * 2. ValidationException
*/

export class NotFoundException extends Error {
    constructor(
        message: string
    ) {
        super(message);
        this.name = 'NotFoundException';
    }
};

export class ValidationException extends Error {
    constructor(
        message: string
    ) {
        super(message);
        this.name = 'ValidationException';
    }
};