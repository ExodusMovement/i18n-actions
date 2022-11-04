const { getPR } = require('./fixtures/github')
const i18nActions = require('../i18n-actions')

describe('i18n-actions', () => {
  it('should run action for opened PR', () => {
    const pr = getPR(1000)
    expect(i18nActions({ github: pr })).toBe('taking action')
  })
  it('should do nothing for opened draft PR', () => {
    const pr = getPR(1001)
    expect(i18nActions({ github: pr })).toBe(undefined)
  })
  it('should do nothing for closed PR', () => {
    const pr = getPR(1002)
    expect(i18nActions({ github: pr })).toBe(undefined)
  })
})
