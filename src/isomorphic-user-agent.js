import defaultUserAgent from 'default-user-agent'

const defaultBrowserUserAgent = () => {
  if (
    typeof window !== 'undefined' &&
    window !== null &&
    window.navigator &&
    window.navigator.userAgent
  ) {
    return window.navigator.userAgent
  }
  return null
}

export { defaultBrowserUserAgent as browserUserAgent }
export default (browserUserAgent = defaultBrowserUserAgent) =>
  browserUserAgent() || defaultUserAgent()
