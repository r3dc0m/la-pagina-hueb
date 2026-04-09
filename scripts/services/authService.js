import { getUser, saveUser, clearCurrentUser, setCurrentUser } from './storageService.js'
const STORAGE_KEY_PREFIX = "huebUser:";

export function login(username, password) {
    const user = getUser(username);
    if (!user) return false;
    if (user.password !== password) return false;

    setCurrentUser(username);
    return true;
}

export function register(username, password) {
    const key = STORAGE_KEY_PREFIX + username;
    if (localStorage.getItem(key)) return false;

    const user = {
        username,
        password,
        data: {}
    };

    saveUser(user);
    setCurrentUser(username);

    return true;
}

export function logout() {
    clearCurrentUser()
}