// Original file: protos/transaction.proto


export interface CreateTransactionRequest {
  'userId'?: (number);
  'fromCurrency'?: (string);
  'toCurrency'?: (string);
  'fromAmount'?: (number | string);
}

export interface CreateTransactionRequest__Output {
  'userId'?: (number);
  'fromCurrency'?: (string);
  'toCurrency'?: (string);
  'fromAmount'?: (number);
}
