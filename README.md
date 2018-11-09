# Eidoo ETH API lib

A minimalistic wrapper for the ETH API service.

## Table of contents
- [Development](#development)
- [Tests](#tests)
- [Implemented Api](#implemented-api)

## Development

```
yarn install
```

## Tests

Install the dependencies, then run `yarn test`:


```
yarn install
yarn test
```

You can run unit tests only using `yarn test:unit`.


## Implemented Api

- GET `/api/v1/account/:address/nonce`: getAddressNonceAsync
- POST `/api/v1/transaction/estimategas`: getEstimateGasAsync
- POST `/api/v1/transaction/call`: transactionCallAsync
- POST `/api/v1/transaction/raw`: sendRawTransactionAsync
