export const USER_PREFIX_KEY = 'huebUser:';
const SESSION_DATA_KEY = 'currentSession';
const CURRENT_USER_KEY = 'currentUser';
const EMPTY_USER_DATA = { activeImage: null, images: [], clicksTotal: 0, formats: {} };

const read = (key, fallback = null) => {
  const value = localStorage.getItem(key);
  return value !== null ? JSON.parse(value) : fallback;
};

const write = (key, value) => localStorage.setItem(key, JSON.stringify(value));

export const getUser = (username) => read(USER_PREFIX_KEY + username, null);

export const saveUser = (user) => write(USER_PREFIX_KEY + user.username, user);

export const deleteUser = () => {
  const username = getCurrentUser();
  localStorage.removeItem(USER_PREFIX_KEY + username);
  clearCurrentUser();
  clearSession();
};

export const getCurrentUser = () => localStorage.getItem(CURRENT_USER_KEY);

export const setCurrentUser = (username) => localStorage.setItem(CURRENT_USER_KEY, username);

export const clearCurrentUser = () => {
  clearSession();
  localStorage.removeItem(CURRENT_USER_KEY)
};

export const createEmptyUserData = () => {
  const { activeImage, ...rest } = EMPTY_USER_DATA;
  return rest;
};

export const getSession = () => read(SESSION_DATA_KEY, { ...EMPTY_USER_DATA });

export const setSession = (session) => write(SESSION_DATA_KEY, session);

export const pushSession = (url, format = 'unknown') => {
  const username = getCurrentUser();
  const session = getSession();
  session.activeImage = url;

  if (username) {
    const user = getUser(username);
    if (user) {
      user.data ??= createEmptyUserData();
      user.data.images.push({ url, format, ts: Date.now() });
      user.data.clicksTotal += 1;
      user.data.formats[format] = (user.data.formats[format] || 0) + 1;
      setSession(session);
      saveUser(user);
    }
    return
  }

  session.images.push({ url, format, ts: Date.now() });
  session.clicksTotal += 1;
  session.formats[format] = (session.formats[format] || 0) + 1;
  setSession(session);
};

export const clearSession = () => {
  const { activeImage } = getSession();
  setSession({
    activeImage, images: [], clicksTotal: 0, formats: {}
  });
};

export const mergeSession = (user) => {
  const session = getSession();

  user.data ??= createEmptyUserData();

  user.data.images = [...(user.data.images || []), ...session.images];
  user.data.clicksTotal = (user.data.clicksTotal || 0) + session.clicksTotal;

  for (const [format, count] of Object.entries(session.formats || {})) {
    user.data.formats[format] = (user.data.formats[format] || 0) + count;
  }

  clearSession();
  saveUser(user);
  return user;
}

export const fetchScore = () => {
  const username = getCurrentUser();

  if (username) {
    const user = getUser(username);
    if (user) {
      return `Gatos capturados: ${user.data.clicksTotal || 0}`;
    }
  }

  const session = getSession();
  return `Gatos capturados: ${session.clicksTotal || 0}`;
}


export const fetchJoinedDate = () => {
  const user = getUser(getCurrentUser());
  const d = new Date(user.joined);
  const joined = `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
  return `Miembro desde:\n${joined}`;
}