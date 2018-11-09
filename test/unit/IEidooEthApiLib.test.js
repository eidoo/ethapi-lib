/* eslint-env node, jest */

const IEidooEthApiLib = require('../../lib/IEidooEthApiLib')

describe('IEidooEthApiLib (unit tests)', () => {
  describe('callAsync', () => {
    it('should reject if called', () => expect(
      (new IEidooEthApiLib({})).callAsync(),
    ).rejects.toEqual(Error('Method "callAsync" has not been implemented yet.')))
  })

  describe('transactionCallAsync', () => {
    it('should reject if called', () => expect(
      (new IEidooEthApiLib({})).transactionCallAsync(),
    ).rejects.toEqual(Error('Method "transactionCallAsync" has not been implemented yet.')))
  })
  describe('getAddressNonceAsync', () => {
    it('should reject if called', () => expect(
      (new IEidooEthApiLib({})).getAddressNonceAsync(),
    ).rejects.toEqual(Error('Method "getAddressNonceAsync" has not been implemented yet.')))
  })
  describe('getEstimateGasAsync', () => {
    it('should reject if called', () => expect(
      (new IEidooEthApiLib({})).getEstimateGasAsync(),
    ).rejects.toEqual(Error('Method "getEstimateGasAsync" has not been implemented yet.')))
  })
  describe('sendRawTransactionAsync', () => {
    it('should reject if called', () => expect(
      (new IEidooEthApiLib({})).sendRawTransactionAsync(),
    ).rejects.toEqual(Error('Method "sendRawTransactionAsync" has not been implemented yet.')))
  })
})
