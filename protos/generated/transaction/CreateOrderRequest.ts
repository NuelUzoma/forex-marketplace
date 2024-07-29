// Original file: protos/transaction.proto


export interface CreateOrderRequest {
  'type'?: (string);
  'fromCurrency'?: (string);
  'toCurrency'?: (string);
  'fromAmount'?: (number | string);
  'targetRate'?: (number | string);
}

export interface CreateOrderRequest__Output {
  'type'?: (string);
  'fromCurrency'?: (string);
  'toCurrency'?: (string);
  'fromAmount'?: (number);
  'targetRate'?: (number);
}
