import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { WalletServiceClient as _wallet_WalletServiceClient, WalletServiceDefinition as _wallet_WalletServiceDefinition } from './wallet/WalletService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  wallet: {
    BalanceResponse: MessageTypeDefinition
    CreateWalletRequest: MessageTypeDefinition
    CurrencyBalance: MessageTypeDefinition
    GetBalanceRequest: MessageTypeDefinition
    GetWalletRequest: MessageTypeDefinition
    UpdateBalanceRequest: MessageTypeDefinition
    UpdateBalanceResponse: MessageTypeDefinition
    Wallet: MessageTypeDefinition
    WalletService: SubtypeConstructor<typeof grpc.Client, _wallet_WalletServiceClient> & { service: _wallet_WalletServiceDefinition }
  }
}

