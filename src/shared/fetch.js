import 'whatwg-fetch'
const serverPrefix = 'http://82.196.8.94:5000/'

/** will add app-specific data to requests */
export default (url, ...args) => {
    return window.fetch(`${serverPrefix}${url}`, ...args)
    .then(data => {
        return data.json()
    })
}
