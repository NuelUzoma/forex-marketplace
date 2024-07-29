// Original file: protos/rate.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GetRateRequest as _rate_GetRateRequest, GetRateRequest__Output as _rate_GetRateRequest__Output } from '../rate/GetRateRequest';
import type { GetRateResponse as _rate_GetRateResponse, GetRateResponse__Output as _rate_GetRateResponse__Output } from '../rate/GetRateResponse';

export interface RateServiceClient extends grpc.Client {
  GetRate(argument: _rate_GetRateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_rate_GetRateResponse__Output>): grpc.ClientUnaryCall;
  GetRate(argument: _rate_GetRateRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_rate_GetRateResponse__Output>): grpc.ClientUnaryCall;
  GetRate(argument: _rate_GetRateRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_rate_GetRateResponse__Output>): grpc.ClientUnaryCall;
  GetRate(argument: _rate_GetRateRequest, callback: grpc.requestCallback<_rate_GetRateResponse__Output>): grpc.ClientUnaryCall;
  getRate(argument: _rate_GetRateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_rate_GetRateResponse__Output>): grpc.ClientUnaryCall;
  getRate(argument: _rate_GetRateRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_rate_GetRateResponse__Output>): grpc.ClientUnaryCall;
  getRate(argument: _rate_GetRateRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_rate_GetRateResponse__Output>): grpc.ClientUnaryCall;
  getRate(argument: _rate_GetRateRequest, callback: grpc.requestCallback<_rate_GetRateResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface RateServiceHandlers extends grpc.UntypedServiceImplementation {
  GetRate: grpc.handleUnaryCall<_rate_GetRateRequest__Output, _rate_GetRateResponse>;
  
}

export interface RateServiceDefinition extends grpc.ServiceDefinition {
  GetRate: MethodDefinition<_rate_GetRateRequest, _rate_GetRateResponse, _rate_GetRateRequest__Output, _rate_GetRateResponse__Output>
}
