import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { GetRateRequest } from "../../../../protos/generated/rate/GetRateRequest";
import { GetRateResponse } from "../../../../protos/generated/rate/GetRateResponse";
import { ConfigService } from '@nestjs/config';
import { ValidationException } from "../../../../libraries/src/index";

@Injectable()
export class RateService {
    private rates: Map<string, number> = new Map();

    constructor(
        private httpService: HttpService,
        private configService: ConfigService
    ) {
        this.updateRates();
        setInterval(() => this.updateRates(), 6000000); // Update rates every 100 minutes
    }

    // Fetch the rates from the exchange rate API
    private async updateRates() {
        const API_KEY = this.configService.get<string>('EXCHANGE_RATE_API_KEY');
        const BASE_URL = this.configService.get<string>('BASE_URL');
        const BASE_CURRENCY = 'USD';

        try {
            const url = `${BASE_URL}/${API_KEY}/latest/${BASE_CURRENCY}`;
            const response = await this.httpService.get(url).toPromise();

            // Processing response data
            if (response?.data.result === 'success') {
                const rates = response.data.conversion_rates;

                // Update local rates with fetched data from API
                this.rates = rates;
            } else {
                throw new ValidationException('API request was not successful');
            }
        } catch (error) {
            Logger.log('Full error: ', error);
            throw new ValidationException(`Failed to fetch new rates: ${error}`);
        }
    }

    // Function to get the rates with the currency key
    getRate(getRateRequest: GetRateRequest): GetRateResponse {
        const { fromCurrency, toCurrency } = getRateRequest;
        const key = `${fromCurrency}${toCurrency}`;
        
        const rate: number = this.rates.get(key) || 0;
        return { rate };
    }
}