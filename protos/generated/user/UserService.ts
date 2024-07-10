// Original file: libs/proto/src/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GetUserByIdRequest as _user_GetUserByIdRequest, GetUserByIdRequest__Output as _user_GetUserByIdRequest__Output } from './GetUserByIdRequest';
import type { GetUserByIdResponse as _user_GetUserByIdResponse, GetUserByIdResponse__Output as _user_GetUserByIdResponse__Output } from './GetUserByIdResponse';

export interface UserServiceClient extends grpc.Client {
  GetUserById(argument: _user_GetUserByIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetUserByIdResponse__Output>): grpc.ClientUnaryCall;
  GetUserById(argument: _user_GetUserByIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_GetUserByIdResponse__Output>): grpc.ClientUnaryCall;
  GetUserById(argument: _user_GetUserByIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetUserByIdResponse__Output>): grpc.ClientUnaryCall;
  GetUserById(argument: _user_GetUserByIdRequest, callback: grpc.requestCallback<_user_GetUserByIdResponse__Output>): grpc.ClientUnaryCall;
  getUserById(argument: _user_GetUserByIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetUserByIdResponse__Output>): grpc.ClientUnaryCall;
  getUserById(argument: _user_GetUserByIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_GetUserByIdResponse__Output>): grpc.ClientUnaryCall;
  getUserById(argument: _user_GetUserByIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetUserByIdResponse__Output>): grpc.ClientUnaryCall;
  getUserById(argument: _user_GetUserByIdRequest, callback: grpc.requestCallback<_user_GetUserByIdResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  GetUserById: grpc.handleUnaryCall<_user_GetUserByIdRequest__Output, _user_GetUserByIdResponse>;
  
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  GetUserById: MethodDefinition<_user_GetUserByIdRequest, _user_GetUserByIdResponse, _user_GetUserByIdRequest__Output, _user_GetUserByIdResponse__Output>
}
