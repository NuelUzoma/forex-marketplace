import { Controller } from "@nestjs/common";
import { GrpcMethod } from "@nestjs/microservices";
import { RateService } from "./rate.service";
import { GetRateRequest } from "../../../../protos/generated/rate/GetRateRequest";
import { GetRateResponse } from "../../../../protos/generated/rate/GetRateResponse";

@Controller()
export class RateController {
    constructor(
        private readonly rateService: RateService
    ) {}

    // Grpc client calls to fetch the rates
    @GrpcMethod('RateService', 'GetRate')
    getRate(getRateRequest: GetRateRequest): GetRateResponse {
        return this.rateService.getRate(getRateRequest);
    }
}