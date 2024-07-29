// Original file: protos/transaction.proto

import type { Order as _transaction_Order, Order__Output as _transaction_Order__Output } from '../transaction/Order';

export interface CreateOrderResponse {
  'order'?: (_transaction_Order | null);
}

export interface CreateOrderResponse__Output {
  'order'?: (_transaction_Order__Output);
}
