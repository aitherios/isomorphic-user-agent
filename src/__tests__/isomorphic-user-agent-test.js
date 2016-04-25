jest.unmock('../isomorphic-user-agent')
jest.unmock('default-user-agent')

import IsomophicUserAgent from '../isomorphic-user-agent'
import DefaultUserAgent from 'default-user-agent'

describe('IsomophicUserAgent', () => {
  describe('when browser', () => {
    let iphoneUserAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1"

    beforeEach(() => { window.navigator = { userAgent: iphoneUserAgent } })

    it('returns browser user agent', () => { expect(IsomophicUserAgent()).toBe(iphoneUserAgent) })
  })

  describe('when nodejs', () => {
    beforeEach(() => { window.navigator = undefined })

    it('returns default-user-agent', () => { expect(IsomophicUserAgent()).toBe(DefaultUserAgent()) })
  })
})
