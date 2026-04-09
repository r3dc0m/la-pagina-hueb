import { USER_PREFIX_KEY, getUser, saveUser, clearCurrentUser, setCurrentUser, createEmptyUserData } from './storageService.js'

export function login(username, password) {
    const user = getUser(username);
    if (!user) return false;
    if (user.password !== password) return false;

    setCurrentUser(username);
    return true;
}

export function register(username, password) {
    const key = USER_PREFIX_KEY + username;
    if (localStorage.getItem(key)) return false;

    const user = {
        username,
        password,
        data: createEmptyUserData()
    };

    saveUser(user);
    setCurrentUser(username);
    return true;
}

export function logout() {
    clearCurrentUser()
}