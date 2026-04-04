const STORAGE_KEY_PREFIX = "huebUser:";

export function login(username, password) {
    const key = STORAGE_KEY_PREFIX + username;
    const userData = localStorage.getItem(key);

    if (!userData) return false;

    const user = JSON.parse(userData);
    if (user.password !== password) return false;

    localStorage.setItem("currentUser", username);
    return true;
}

export function register(username, password) {
    const key = STORAGE_KEY_PREFIX + username;
    if (localStorage.getItem(key)) return false;

    localStorage.setItem(key, JSON.stringify({
        username,
        password,
        data: {}
    }));

    localStorage.setItem("currentUser", username);
    return true;
}

export function logout() {
    localStorage.removeItem("currentUser");
}

export function getCurrentUser() {
    const username = localStorage.getItem("currentUser");
    if (!username) return null;

    const key = STORAGE_KEY_PREFIX + username;
    const userData = localStorage.getItem(key);
    return userData ? JSON.parse(userData) : null;
}