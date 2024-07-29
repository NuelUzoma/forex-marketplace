// Original file: protos/transaction.proto


export interface Order {
  'id'?: (number);
  'type'?: (string);
  'fromAmount'?: (number | string);
  'fromCurrency'?: (string);
  'toAmount'?: (number | string);
  'toCurrency'?: (string);
  'targetRate'?: (number | string);
  'status'?: (string);
  'createdAt'?: (string);
  'executedAt'?: (string);
}

export interface Order__Output {
  'id'?: (number);
  'type'?: (string);
  'fromAmount'?: (number);
  'fromCurrency'?: (string);
  'toAmount'?: (number);
  'toCurrency'?: (string);
  'targetRate'?: (number);
  'status'?: (string);
  'createdAt'?: (string);
  'executedAt'?: (string);
}
