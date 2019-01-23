/* eslint-env node, jest */
const sandbox = require('sinon').createSandbox()

const { EthApiError } = require('../../lib/EidooEthApiLib')
const { EidooEthApiLib } = require('../../lib/EidooEthApiLib')
const transacionDetailsResponse = require('../fixtures/transactionDetailsResponse')

afterEach(() => {
  sandbox.restore()
})

describe('EidooEthApiLib (unit tests)', () => {
  describe('constructor', () => {
    it('should throw if config.host is falsy', () => {
      expect(() => (new EidooEthApiLib({ host: null })))
        .toThrow(TypeError('Invalid "config.host" value: null.'))
    })

    it('should throw if config.port is falsy', () => {
      expect(() => (new EidooEthApiLib({ port: null })))
        .toThrow(TypeError('Invalid "config.port" value: null.'))
    })

    it('should throw if httpClientFactory is falsy', () => {
      expect(() => (new EidooEthApiLib({}, null)))
        .toThrow(TypeError('Invalid "httpClientFactory" value: null.'))
    })
  })

  describe('getBaseURL', () => {
    it('should return the expected url (http)', () => {
      const eidooEthApiLib = new EidooEthApiLib({ useTLS: false })
      expect(eidooEthApiLib.getBaseURL()).toEqual('http://127.0.0.1:8080/api')
    })

    it('should return the expected url (https, explicit)', () => {
      const eidooEthApiLib = new EidooEthApiLib({ useTLS: true })
      expect(eidooEthApiLib.getBaseURL()).toEqual('https://127.0.0.1:8080/api')
    })

    it('should return the expected url (https, implicit)', () => {
      const eidooEthApiLib = new EidooEthApiLib({})
      expect(eidooEthApiLib.getBaseURL()).toEqual('https://127.0.0.1:8080/api')
    })
  })

  describe('getAccountTxsDetailsAsync', () => {
    const eidooEthApiLib = new EidooEthApiLib()
    it('should returns the transactions details as expected', async () => {
      const tradingWalletAddress = '0xAaD5329c065B61f8d44d3d0417068eA74021Fb79'
      const expectedMethod = 'get'
      const expectedEndpoint = `/v3/account/${tradingWalletAddress}/txs/details`
      const callAsyncMock = sandbox.stub(eidooEthApiLib, 'callAsync').returns(transacionDetailsResponse)

      const accountTransacionsDetails = await eidooEthApiLib.getAccountTxsDetailsAsync(tradingWalletAddress)

      expect(callAsyncMock.calledOnceWith({ method: expectedMethod, endpoint: expectedEndpoint })).toBe(true)
      expect(accountTransacionsDetails).toMatchObject(transacionDetailsResponse)
    })

    it('should returns EthApiError if there was an error during api call', async () => {
      const tradingWalletAddress = '0xAaD5329c065B61f8d44d3d0417068eA74021Fb79'
      sandbox.stub(eidooEthApiLib, 'callAsync').throws(new EthApiError())
      return expect(eidooEthApiLib.getAccountTxsDetailsAsync(tradingWalletAddress)).rejects.toBeInstanceOf(EthApiError)
    })
  })
})
