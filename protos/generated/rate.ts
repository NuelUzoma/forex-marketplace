import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { RateServiceClient as _rate_RateServiceClient, RateServiceDefinition as _rate_RateServiceDefinition } from './rate/RateService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  rate: {
    GetRateRequest: MessageTypeDefinition
    GetRateResponse: MessageTypeDefinition
    RateService: SubtypeConstructor<typeof grpc.Client, _rate_RateServiceClient> & { service: _rate_RateServiceDefinition }
  }
}

