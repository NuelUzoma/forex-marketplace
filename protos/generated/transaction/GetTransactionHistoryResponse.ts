// Original file: protos/transaction.proto

import type { Transaction as _transaction_Transaction, Transaction__Output as _transaction_Transaction__Output } from '../transaction/Transaction';

export interface GetTransactionHistoryResponse {
  'transactions'?: (_transaction_Transaction)[];
}

export interface GetTransactionHistoryResponse__Output {
  'transactions'?: (_transaction_Transaction__Output)[];
}
