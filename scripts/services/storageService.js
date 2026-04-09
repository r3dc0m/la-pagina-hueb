export const USER_PREFIX_KEY = 'huebUser:';
const SESSION_DATA_KEY = 'currentSession';
const CURRENT_USER_KEY = 'currentUser';
const EMPTY_USER_DATA = { activeImage: null, images: [], clicksTotal: 0, formats: {} };

const read = (key, fallback = null) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : fallback;
};

const write = (key, value) => localStorage.setItem(key, JSON.stringify(value));

export const getUser = (username) => read(USER_PREFIX_KEY + username, null);

export const saveUser = (user) => write(USER_PREFIX_KEY + user.username, user);

export const getCurrentUser = () => localStorage.getItem(CURRENT_USER_KEY);

export const setCurrentUser = (username) => localStorage.setItem(CURRENT_USER_KEY, username);

export const clearCurrentUser = ()  => localStorage.removeItem(CURRENT_USER_KEY);

export const createEmptyUserData = () => ({ ...EMPTY_USER_DATA });

export const getSession = () => read(SESSION_DATA_KEY, { ...EMPTY_USER_DATA });

export const pushSession = (session) => write(SESSION_DATA_KEY, session);

export function setSession(url, format = 'unknown') {
    const session = getSession();

    session.activeImage = url;
    session.images.push({ url, format, ts: Date.now() });

    session.formats[format] = (session.formats[format] || 0) + 1;
    pushSession(session);

    return session;
}