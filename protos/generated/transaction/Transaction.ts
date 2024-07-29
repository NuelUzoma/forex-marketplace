// Original file: protos/transaction.proto


export interface Transaction {
  'id'?: (number);
  'userId'?: (number);
  'fromAmount'?: (number | string);
  'fromCurrency'?: (string);
  'toAmount'?: (number | string);
  'toCurrency'?: (string);
  'exchangeRate'?: (number | string);
  'status'?: (string);
  'timestamp'?: (string);
}

export interface Transaction__Output {
  'id'?: (number);
  'userId'?: (number);
  'fromAmount'?: (number);
  'fromCurrency'?: (string);
  'toAmount'?: (number);
  'toCurrency'?: (string);
  'exchangeRate'?: (number);
  'status'?: (string);
  'timestamp'?: (string);
}
