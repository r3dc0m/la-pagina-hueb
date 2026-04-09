export const USER_PREFIX_KEY = 'huebUser:';
const SESSION_DATA_KEY = 'currentSession';
const CURRENT_USER_KEY = 'currentUser';
const EMPTY_USER_DATA = { activeImage: null, images: [], clicksTotal: 0, formats: {} };

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

export function getCurrentUser() {
    return localStorage.getItem(CURRENT_USER_KEY);
}

export function setCurrentUser(username) {
    localStorage.setItem(CURRENT_USER_KEY, username);
}

export function clearCurrentUser() {
    localStorage.removeItem(CURRENT_USER_KEY);
}

export function createEmptyUserData() {
    return { ...EMPTY_USER_DATA };
}

export function getSession() {
    return read(SESSION_DATA_KEY, { ...EMPTY_USER_DATA });
}

export function pushSession(session) {
    write(SESSION_DATA_KEY, session);
}

export function setSession(url, format = 'unknown') {
    const session = getSession();

    session.activeImage = url;
    session.images.push({ url, format, ts: Date.now() });

    session.formats[format] = (session.formats[format] || 0) + 1;
    pushSession(session);

    return session;
}