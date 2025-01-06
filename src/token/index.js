import { jwtDecode } from "jwt-decode"
async function setToken(token) {
    localStorage.setItem('jwt-token', token)
    decodeToken(token)
}

function getToken() {
    return localStorage.getItem('jwt-token')
}

function clearToken() {
    localStorage.removeItem('jwt-token')
    localStorage.removeItem('user-id')
    localStorage.removeItem('user-name')
    localStorage.removeItem('user-email')
    localStorage.removeItem('exp-date')
}

function decodeToken(token) {
    let decoded = jwtDecode(token)
    localStorage.setItem('user-id', decoded.id)
    localStorage.setItem('user-name', decoded.name)
    localStorage.setItem('user-email', decoded.email)
    localStorage.setItem('exp-date', decoded.exp_date)
}

function getUser() {
    if (getToken())
        return {
            'id': localStorage.getItem('user-id'),
            'name': localStorage.getItem('user-name'),
            'email': localStorage.getItem('user-email'),
            'exp-date': localStorage.getItem('exp-date'),
        }
    else
        return null
}

export { setToken, getToken, clearToken, getUser }