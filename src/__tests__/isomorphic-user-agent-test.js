jest.unmock('../isomorphic-user-agent')
jest.unmock('default-user-agent')

import IsomophicUserAgent from '../isomorphic-user-agent'
import DefaultUserAgent from 'default-user-agent'

describe('IsomophicUserAgent', () => {
  let fakeBrowserUserAgent

  describe('when browser', () => {
    const iphoneUserAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X)'

    beforeEach(() => {
      fakeBrowserUserAgent = () => iphoneUserAgent
    })

    it('returns browser user agent', () => {
      expect(IsomophicUserAgent({ browserUserAgent: fakeBrowserUserAgent })).toBe(iphoneUserAgent)
    })
  })

  describe('when nodejs', () => {
    beforeEach(() => {
      fakeBrowserUserAgent = () => null
    })

    it('returns default-user-agent', () => {
      expect(
        IsomophicUserAgent({ browserUserAgent: fakeBrowserUserAgent })
      ).toBe(DefaultUserAgent())
    })
  })
})
