import 'whatwg-fetch'
const serverPrefix = 'http://localhost:5000/'

/** will add app-specific data to requests */
export default (url, ...args) => {
    return window.fetch(`${serverPrefix}${url}`, ...args)
}
