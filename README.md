# Eidoo ETH API lib
> Eidoo ETH API service wrapper.

[![CircleCI](https://circleci.com/gh/eidoo/ethapi-lib.svg?style=svg)](https://circleci.com/gh/eidoo/ethapi-lib)

Eidoo ETH API is an Ethereum node gateway that can be used to read or submit changes of the Ethereum network state.

For release notes, please see the [CHANGELOG](./CHANGELOG.md).

## Installation
If you want you can install it with npm:

```bash
npm install --save eidoo/ethapi-lib
 ```

or if you prefer using yarn:

```bash
yarn add eidoo/ethapi-lib
 ```

Then within your application, you can reference to the lib with the following:

```javascript
const { EidooEthApiLib } = require('@eidoo/ethapi-lib')
const ethApiConfig = {
  host: 'eidoo-api-1.eidoo.io',
  port: 443,
  useTLS: true,
}
const ethApiLibClient = new EidooEthApiLib(ethApiConfig)
```

## Available APIs

### Get nonce
```javascript
const { nonce } = await ethApiLibClient.getAddressNonceAsync(EOA)
```
### Get ethereum account transactions details
```javascript
const { transactions } = await ethApiLibClient.getAccountTxsDetailsAsync(EOAorSCaddress)
```
### Get gas estimation
```javascript
const { gas, gasPrices } = await ethApiLibClient.getEstimateGasAsync(transactionObject)
```
### Transaction call
```javascript
const transactionCall = await ethApiLibClient.transactionCallAsync(transactionObject)
```
### Send raw transaction
```javascript
const { hash } = await ethApiLibClient.sendRawTransactionAsync(signedTransactionData)
```

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
