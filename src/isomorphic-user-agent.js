import DefaultUserAgent from 'default-user-agent'

export default () => {
  if (window && window.navigator && window.navigator.userAgent) {
    return window.navigator.userAgent
  } else {
    return DefaultUserAgent()
  }
}
