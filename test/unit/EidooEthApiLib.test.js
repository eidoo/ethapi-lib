/* eslint-env node, jest */

const EidooEthApiLib = require('../../lib/EidooEthApiLib')

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
})
