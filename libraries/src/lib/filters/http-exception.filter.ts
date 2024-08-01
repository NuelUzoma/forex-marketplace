/**
 * HTTP Exception Filters preset throughout the monorepo.
 * Custom exceptions are also caught and returned as custom API responses
 * Nest.js already have a built-in exceptions layer, GlobalExceptionsFilter,
 * but this is an extra feature to catch and return standard responses.
*/

import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from "@nestjs/common";
import { Response } from "express";
import { NotFoundException, ValidationException } from "../exceptions/custom.exception";

// @ts-ignore: Suppress TS1238 error. Multiple exception types are valid for @Catch decorator.
@Catch(HttpException, NotFoundException, ValidationException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>(); // Return the response object

        // Set default message response to undefined errors throught the monorepo
        let status = HttpStatus.INTERNAL_SERVER_ERROR;
        let message = 'Internal Server Error';

        // Exceptions
        if (exception instanceof HttpException) {
            status = exception.getStatus();
            message = exception.message;
        } else if (exception instanceof NotFoundException) {
            status = HttpStatus.NOT_FOUND;
            message = exception.message;
        } else if (exception instanceof ValidationException) {
            status = HttpStatus.BAD_REQUEST;
            message = exception.message;
        } else if (exception instanceof Error) {
            message = exception.message;
        };

        response.status(status).json({
            statusCode: status,
            message: message,
            timestamp: new Date().toISOString(),
        });
    }
}