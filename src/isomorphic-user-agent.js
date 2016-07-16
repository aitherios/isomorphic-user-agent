import DefaultUserAgent from 'default-user-agent'

export default () => {
  if (
    typeof window !== 'undefined' &&
    window !== null &&
    window.navigator &&
    window.navigator.userAgent
  ) {
    return window.navigator.userAgent
  }
  return DefaultUserAgent()
}
