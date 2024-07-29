// Original file: protos/wallet.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { BalanceResponse as _wallet_BalanceResponse, BalanceResponse__Output as _wallet_BalanceResponse__Output } from '../wallet/BalanceResponse';
import type { CreateWalletRequest as _wallet_CreateWalletRequest, CreateWalletRequest__Output as _wallet_CreateWalletRequest__Output } from '../wallet/CreateWalletRequest';
import type { GetBalanceRequest as _wallet_GetBalanceRequest, GetBalanceRequest__Output as _wallet_GetBalanceRequest__Output } from '../wallet/GetBalanceRequest';
import type { GetWalletRequest as _wallet_GetWalletRequest, GetWalletRequest__Output as _wallet_GetWalletRequest__Output } from '../wallet/GetWalletRequest';
import type { UpdateBalanceRequest as _wallet_UpdateBalanceRequest, UpdateBalanceRequest__Output as _wallet_UpdateBalanceRequest__Output } from '../wallet/UpdateBalanceRequest';
import type { UpdateBalanceResponse as _wallet_UpdateBalanceResponse, UpdateBalanceResponse__Output as _wallet_UpdateBalanceResponse__Output } from '../wallet/UpdateBalanceResponse';
import type { Wallet as _wallet_Wallet, Wallet__Output as _wallet_Wallet__Output } from '../wallet/Wallet';

export interface WalletServiceClient extends grpc.Client {
  CreateWallet(argument: _wallet_CreateWalletRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_wallet_Wallet__Output>): grpc.ClientUnaryCall;
  CreateWallet(argument: _wallet_CreateWalletRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_wallet_Wallet__Output>): grpc.ClientUnaryCall;
  CreateWallet(argument: _wallet_CreateWalletRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_wallet_Wallet__Output>): grpc.ClientUnaryCall;
  CreateWallet(argument: _wallet_CreateWalletRequest, callback: grpc.requestCallback<_wallet_Wallet__Output>): grpc.ClientUnaryCall;
  createWallet(argument: _wallet_CreateWalletRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_wallet_Wallet__Output>): grpc.ClientUnaryCall;
  createWallet(argument: _wallet_CreateWalletRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_wallet_Wallet__Output>): grpc.ClientUnaryCall;
  createWallet(argument: _wallet_CreateWalletRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_wallet_Wallet__Output>): grpc.ClientUnaryCall;
  createWallet(argument: _wallet_CreateWalletRequest, callback: grpc.requestCallback<_wallet_Wallet__Output>): grpc.ClientUnaryCall;
  
  GetBalance(argument: _wallet_GetBalanceRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_wallet_BalanceResponse__Output>): grpc.ClientUnaryCall;
  GetBalance(argument: _wallet_GetBalanceRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_wallet_BalanceResponse__Output>): grpc.ClientUnaryCall;
  GetBalance(argument: _wallet_GetBalanceRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_wallet_BalanceResponse__Output>): grpc.ClientUnaryCall;
  GetBalance(argument: _wallet_GetBalanceRequest, callback: grpc.requestCallback<_wallet_BalanceResponse__Output>): grpc.ClientUnaryCall;
  getBalance(argument: _wallet_GetBalanceRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_wallet_BalanceResponse__Output>): grpc.ClientUnaryCall;
  getBalance(argument: _wallet_GetBalanceRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_wallet_BalanceResponse__Output>): grpc.ClientUnaryCall;
  getBalance(argument: _wallet_GetBalanceRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_wallet_BalanceResponse__Output>): grpc.ClientUnaryCall;
  getBalance(argument: _wallet_GetBalanceRequest, callback: grpc.requestCallback<_wallet_BalanceResponse__Output>): grpc.ClientUnaryCall;
  
  GetWallet(argument: _wallet_GetWalletRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_wallet_Wallet__Output>): grpc.ClientUnaryCall;
  GetWallet(argument: _wallet_GetWalletRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_wallet_Wallet__Output>): grpc.ClientUnaryCall;
  GetWallet(argument: _wallet_GetWalletRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_wallet_Wallet__Output>): grpc.ClientUnaryCall;
  GetWallet(argument: _wallet_GetWalletRequest, callback: grpc.requestCallback<_wallet_Wallet__Output>): grpc.ClientUnaryCall;
  getWallet(argument: _wallet_GetWalletRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_wallet_Wallet__Output>): grpc.ClientUnaryCall;
  getWallet(argument: _wallet_GetWalletRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_wallet_Wallet__Output>): grpc.ClientUnaryCall;
  getWallet(argument: _wallet_GetWalletRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_wallet_Wallet__Output>): grpc.ClientUnaryCall;
  getWallet(argument: _wallet_GetWalletRequest, callback: grpc.requestCallback<_wallet_Wallet__Output>): grpc.ClientUnaryCall;
  
  UpdateBalance(argument: _wallet_UpdateBalanceRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_wallet_UpdateBalanceResponse__Output>): grpc.ClientUnaryCall;
  UpdateBalance(argument: _wallet_UpdateBalanceRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_wallet_UpdateBalanceResponse__Output>): grpc.ClientUnaryCall;
  UpdateBalance(argument: _wallet_UpdateBalanceRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_wallet_UpdateBalanceResponse__Output>): grpc.ClientUnaryCall;
  UpdateBalance(argument: _wallet_UpdateBalanceRequest, callback: grpc.requestCallback<_wallet_UpdateBalanceResponse__Output>): grpc.ClientUnaryCall;
  updateBalance(argument: _wallet_UpdateBalanceRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_wallet_UpdateBalanceResponse__Output>): grpc.ClientUnaryCall;
  updateBalance(argument: _wallet_UpdateBalanceRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_wallet_UpdateBalanceResponse__Output>): grpc.ClientUnaryCall;
  updateBalance(argument: _wallet_UpdateBalanceRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_wallet_UpdateBalanceResponse__Output>): grpc.ClientUnaryCall;
  updateBalance(argument: _wallet_UpdateBalanceRequest, callback: grpc.requestCallback<_wallet_UpdateBalanceResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface WalletServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateWallet: grpc.handleUnaryCall<_wallet_CreateWalletRequest__Output, _wallet_Wallet>;
  
  GetBalance: grpc.handleUnaryCall<_wallet_GetBalanceRequest__Output, _wallet_BalanceResponse>;
  
  GetWallet: grpc.handleUnaryCall<_wallet_GetWalletRequest__Output, _wallet_Wallet>;
  
  UpdateBalance: grpc.handleUnaryCall<_wallet_UpdateBalanceRequest__Output, _wallet_UpdateBalanceResponse>;
  
}

export interface WalletServiceDefinition extends grpc.ServiceDefinition {
  CreateWallet: MethodDefinition<_wallet_CreateWalletRequest, _wallet_Wallet, _wallet_CreateWalletRequest__Output, _wallet_Wallet__Output>
  GetBalance: MethodDefinition<_wallet_GetBalanceRequest, _wallet_BalanceResponse, _wallet_GetBalanceRequest__Output, _wallet_BalanceResponse__Output>
  GetWallet: MethodDefinition<_wallet_GetWalletRequest, _wallet_Wallet, _wallet_GetWalletRequest__Output, _wallet_Wallet__Output>
  UpdateBalance: MethodDefinition<_wallet_UpdateBalanceRequest, _wallet_UpdateBalanceResponse, _wallet_UpdateBalanceRequest__Output, _wallet_UpdateBalanceResponse__Output>
}
