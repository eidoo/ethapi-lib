/* eslint-env node, jest */

const eidooEthApiLib = require('../../lib/eidoo-ethapi-lib')
const { EidooEthApiLib } = require('../../lib/EidooEthApiLib')
const IEidooEthApiLib = require('../../lib/IEidooEthApiLib')

describe('eidoo-ethapi-lib (unit tests)', () => {
  it('should export EidooEthApiLib', () => {
    const Class = eidooEthApiLib.EidooEthApiLib
    const instance = new Class()
    expect(Class).toBeTruthy()
    expect(instance instanceof EidooEthApiLib).toEqual(true)
  })

  it('should export IEidooEthApiLib', () => {
    const Class = eidooEthApiLib.IEidooEthApiLib
    const instance = new Class()
    expect(Class).toBeTruthy()
    expect(instance instanceof IEidooEthApiLib).toEqual(true)
  })
})
