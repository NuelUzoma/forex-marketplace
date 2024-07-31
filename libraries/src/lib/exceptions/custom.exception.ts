/**
 * Custom Exceptions to be used throught the microservices
 * The custom exceptions are listed below:
 * 1. UserNotFoundException
 * 2. ValidationException
*/

export class UserNotFoundException extends Error {
    constructor(
        message: string
    ) {
        super(message);
        this.name = 'UserNotFoundException';
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