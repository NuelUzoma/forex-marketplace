// Original file: protos/wallet.proto

import type { CurrencyBalance as _wallet_CurrencyBalance, CurrencyBalance__Output as _wallet_CurrencyBalance__Output } from '../wallet/CurrencyBalance';

export interface Wallet {
  'id'?: (number);
  'userId'?: (number);
  'currencyBalances'?: (_wallet_CurrencyBalance)[];
}

export interface Wallet__Output {
  'id'?: (number);
  'userId'?: (number);
  'currencyBalances'?: (_wallet_CurrencyBalance__Output)[];
}
