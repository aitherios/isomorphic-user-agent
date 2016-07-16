import defaultUserAgent from 'default-user-agent'

const defaultBrowserUserAgent = (_window = window) => {
  if (
    typeof _window !== 'undefined' &&
    _window !== null &&
    _window.navigator &&
    _window.navigator.userAgent
  ) {
    return _window.navigator.userAgent
  }
  return null
}

export { defaultBrowserUserAgent as browserUserAgent }
export default (browserUserAgent = defaultBrowserUserAgent) =>
  browserUserAgent() || defaultUserAgent()
