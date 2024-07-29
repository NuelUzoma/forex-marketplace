// Original file: protos/transaction.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateOrderRequest as _transaction_CreateOrderRequest, CreateOrderRequest__Output as _transaction_CreateOrderRequest__Output } from '../transaction/CreateOrderRequest';
import type { CreateOrderResponse as _transaction_CreateOrderResponse, CreateOrderResponse__Output as _transaction_CreateOrderResponse__Output } from '../transaction/CreateOrderResponse';
import type { CreateTransactionRequest as _transaction_CreateTransactionRequest, CreateTransactionRequest__Output as _transaction_CreateTransactionRequest__Output } from '../transaction/CreateTransactionRequest';
import type { CreateTransactionResponse as _transaction_CreateTransactionResponse, CreateTransactionResponse__Output as _transaction_CreateTransactionResponse__Output } from '../transaction/CreateTransactionResponse';
import type { Empty as _transaction_Empty, Empty__Output as _transaction_Empty__Output } from '../transaction/Empty';
import type { GetTransactionHistoryRequest as _transaction_GetTransactionHistoryRequest, GetTransactionHistoryRequest__Output as _transaction_GetTransactionHistoryRequest__Output } from '../transaction/GetTransactionHistoryRequest';
import type { GetTransactionHistoryResponse as _transaction_GetTransactionHistoryResponse, GetTransactionHistoryResponse__Output as _transaction_GetTransactionHistoryResponse__Output } from '../transaction/GetTransactionHistoryResponse';

export interface TransactionServiceClient extends grpc.Client {
  CheckAndUpdateOrders(argument: _transaction_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_transaction_Empty__Output>): grpc.ClientUnaryCall;
  CheckAndUpdateOrders(argument: _transaction_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_transaction_Empty__Output>): grpc.ClientUnaryCall;
  CheckAndUpdateOrders(argument: _transaction_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_transaction_Empty__Output>): grpc.ClientUnaryCall;
  CheckAndUpdateOrders(argument: _transaction_Empty, callback: grpc.requestCallback<_transaction_Empty__Output>): grpc.ClientUnaryCall;
  checkAndUpdateOrders(argument: _transaction_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_transaction_Empty__Output>): grpc.ClientUnaryCall;
  checkAndUpdateOrders(argument: _transaction_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_transaction_Empty__Output>): grpc.ClientUnaryCall;
  checkAndUpdateOrders(argument: _transaction_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_transaction_Empty__Output>): grpc.ClientUnaryCall;
  checkAndUpdateOrders(argument: _transaction_Empty, callback: grpc.requestCallback<_transaction_Empty__Output>): grpc.ClientUnaryCall;
  
  CreateOrder(argument: _transaction_CreateOrderRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_transaction_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  CreateOrder(argument: _transaction_CreateOrderRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_transaction_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  CreateOrder(argument: _transaction_CreateOrderRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_transaction_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  CreateOrder(argument: _transaction_CreateOrderRequest, callback: grpc.requestCallback<_transaction_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  createOrder(argument: _transaction_CreateOrderRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_transaction_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  createOrder(argument: _transaction_CreateOrderRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_transaction_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  createOrder(argument: _transaction_CreateOrderRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_transaction_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  createOrder(argument: _transaction_CreateOrderRequest, callback: grpc.requestCallback<_transaction_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  
  CreateTransaction(argument: _transaction_CreateTransactionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_transaction_CreateTransactionResponse__Output>): grpc.ClientUnaryCall;
  CreateTransaction(argument: _transaction_CreateTransactionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_transaction_CreateTransactionResponse__Output>): grpc.ClientUnaryCall;
  CreateTransaction(argument: _transaction_CreateTransactionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_transaction_CreateTransactionResponse__Output>): grpc.ClientUnaryCall;
  CreateTransaction(argument: _transaction_CreateTransactionRequest, callback: grpc.requestCallback<_transaction_CreateTransactionResponse__Output>): grpc.ClientUnaryCall;
  createTransaction(argument: _transaction_CreateTransactionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_transaction_CreateTransactionResponse__Output>): grpc.ClientUnaryCall;
  createTransaction(argument: _transaction_CreateTransactionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_transaction_CreateTransactionResponse__Output>): grpc.ClientUnaryCall;
  createTransaction(argument: _transaction_CreateTransactionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_transaction_CreateTransactionResponse__Output>): grpc.ClientUnaryCall;
  createTransaction(argument: _transaction_CreateTransactionRequest, callback: grpc.requestCallback<_transaction_CreateTransactionResponse__Output>): grpc.ClientUnaryCall;
  
  GetTransactionHistory(argument: _transaction_GetTransactionHistoryRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_transaction_GetTransactionHistoryResponse__Output>): grpc.ClientUnaryCall;
  GetTransactionHistory(argument: _transaction_GetTransactionHistoryRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_transaction_GetTransactionHistoryResponse__Output>): grpc.ClientUnaryCall;
  GetTransactionHistory(argument: _transaction_GetTransactionHistoryRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_transaction_GetTransactionHistoryResponse__Output>): grpc.ClientUnaryCall;
  GetTransactionHistory(argument: _transaction_GetTransactionHistoryRequest, callback: grpc.requestCallback<_transaction_GetTransactionHistoryResponse__Output>): grpc.ClientUnaryCall;
  getTransactionHistory(argument: _transaction_GetTransactionHistoryRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_transaction_GetTransactionHistoryResponse__Output>): grpc.ClientUnaryCall;
  getTransactionHistory(argument: _transaction_GetTransactionHistoryRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_transaction_GetTransactionHistoryResponse__Output>): grpc.ClientUnaryCall;
  getTransactionHistory(argument: _transaction_GetTransactionHistoryRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_transaction_GetTransactionHistoryResponse__Output>): grpc.ClientUnaryCall;
  getTransactionHistory(argument: _transaction_GetTransactionHistoryRequest, callback: grpc.requestCallback<_transaction_GetTransactionHistoryResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface TransactionServiceHandlers extends grpc.UntypedServiceImplementation {
  CheckAndUpdateOrders: grpc.handleUnaryCall<_transaction_Empty__Output, _transaction_Empty>;
  
  CreateOrder: grpc.handleUnaryCall<_transaction_CreateOrderRequest__Output, _transaction_CreateOrderResponse>;
  
  CreateTransaction: grpc.handleUnaryCall<_transaction_CreateTransactionRequest__Output, _transaction_CreateTransactionResponse>;
  
  GetTransactionHistory: grpc.handleUnaryCall<_transaction_GetTransactionHistoryRequest__Output, _transaction_GetTransactionHistoryResponse>;
  
}

export interface TransactionServiceDefinition extends grpc.ServiceDefinition {
  CheckAndUpdateOrders: MethodDefinition<_transaction_Empty, _transaction_Empty, _transaction_Empty__Output, _transaction_Empty__Output>
  CreateOrder: MethodDefinition<_transaction_CreateOrderRequest, _transaction_CreateOrderResponse, _transaction_CreateOrderRequest__Output, _transaction_CreateOrderResponse__Output>
  CreateTransaction: MethodDefinition<_transaction_CreateTransactionRequest, _transaction_CreateTransactionResponse, _transaction_CreateTransactionRequest__Output, _transaction_CreateTransactionResponse__Output>
  GetTransactionHistory: MethodDefinition<_transaction_GetTransactionHistoryRequest, _transaction_GetTransactionHistoryResponse, _transaction_GetTransactionHistoryRequest__Output, _transaction_GetTransactionHistoryResponse__Output>
}
