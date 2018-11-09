/**
 * Class representing the Eidoo Eth API library interface.
 */
class IEidooEthApiLib {
  // eslint-disable-next-line class-methods-use-this
  callAsync() {
    return Promise.reject(new Error('Method "callAsync" has not been implemented yet.'))
  }

  // eslint-disable-next-line class-methods-use-this
  transactionCallAsync() {
    return Promise.reject(new Error('Method "transactionCallAsync" has not been implemented yet.'))
  }

  // eslint-disable-next-line class-methods-use-this
  getAddressNonceAsync() {
    return Promise.reject(new Error('Method "getAddressNonceAsync" has not been implemented yet.'))
  }

  // eslint-disable-next-line class-methods-use-this
  getEstimateGasAsync() {
    return Promise.reject(new Error('Method "getEstimateGasAsync" has not been implemented yet.'))
  }

  // eslint-disable-next-line class-methods-use-this
  sendRawTransactionAsync() {
    return Promise.reject(new Error('Method "sendRawTransactionAsync" has not been implemented yet.'))
  }
}

module.exports = IEidooEthApiLib
