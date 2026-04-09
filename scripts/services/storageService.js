const USER_PREFIX = 'huebUser:';
const CURRENT_USER_KEY = 'currentUser';

function read(key, fallback = null) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
}

function write(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function getUser(username) {
    return read(USER_PREFIX + username, null);
}

export function saveUser(user) {
    write(USER_PREFIX + user.username, user);
}

export function clearCurrentUser() {
    localStorage.removeItem(CURRENT_USER_KEY);
}

export function setCurrentUser(username) {
    localStorage.setItem(CURRENT_USER_KEY, username);
}

export function getCurrentUser() {
    return localStorage.getItem(CURRENT_USER_KEY);
}