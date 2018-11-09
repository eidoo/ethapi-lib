const axios = require('axios')

const IEidooEthApiLib = require('./IEidooEthApiLib')

/**
 * Class representing the Eidoo ETH API library interface.
 */
class EidooEthApiLib extends IEidooEthApiLib {
  /**
   * Create an Eidoo ETH API library instance.
   * @param  {Object}  config                    The configuration.
   * @param  {String}  [config.host='127.0.0.1'] The ETH API service host.
   * @param  {Number}  [config.port=8080]        The ETH API service port.
   * @param  {Boolean} [config.useTLS=true]      If true, uses https protocol.
   * @param  {Object}  [httpClientFactory=axios] The http client factory.
   */
  constructor({ host = '127.0.0.1', port = 8080, useTLS = true } = {}, httpClientFactory = axios) {
    super()

    if (!host) {
      throw new TypeError(`Invalid "config.host" value: ${host}.`)
    }

    this.host = host

    if (!port) {
      throw new TypeError(`Invalid "config.port" value: ${port}.`)
    }

    this.port = port

    if (!httpClientFactory) {
      throw new TypeError(`Invalid "httpClientFactory" value: ${httpClientFactory}.`)
    }

    this.httpClientFactory = httpClientFactory
    this.useTLS = !!useTLS
  }

  callAsync({ method, endpoint, body }) {
    if (!this.httpClient) {
      this.httpClient = this.getHttpClient()
    }

    return this.httpClient[method](endpoint, body)
  }

  getBaseURL() {
    return `${this.useTLS ? 'https' : 'http'}://${this.host}:${this.port}/api`
  }

  getHttpClient() {
    const httpClient = this.httpClientFactory.create({
      baseURL: this.getBaseURL(),
      timeout: 15 * 1000,
      headers: {
        accept: 'application/vnd.eidoo.api+json;version=1.0.0',
      },
    })

    httpClient.interceptors.response.use(response => response.data)

    return httpClient
  }

  async getAddressNonceAsync(address) {
    const method = 'get'
    const endpoint = `/v1/account/${address}/nonce`
    const response = await this.callAsync({ method, endpoint })
    delete response.status
    return response
  }

  async getEstimateGasAsync(body) {
    const method = 'post'
    const endpoint = '/v1/transaction/estimategas'
    const response = await this.callAsync({ method, endpoint, body })
    delete response.status
    return response
  }

  async transactionCallAsync(body) {
    const method = 'post'
    const endpoint = '/v1/transaction/call'
    const response = await this.callAsync({ method, endpoint, body })
    delete response.status
    return response
  }

  async sendRawTransactionAsync(body) {
    const method = 'post'
    const endpoint = '/v1/transaction/raw'
    const response = await this.callAsync({ method, endpoint, body })
    delete response.status
    return response
  }
}

module.exports = EidooEthApiLib
