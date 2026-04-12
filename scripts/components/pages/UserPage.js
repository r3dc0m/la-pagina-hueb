import { build } from '../../data/utils.js';
import { login, register, logout, remove } from '../../services/authService.js';
import { getCurrentUser, fetchScore, fetchJoinedDate } from '../../services/storageService.js';

export function renderUserPage(content, router) {
    const section = build('section', { id: "auth" }, content);
    
    const views = {
        loggedIn: () => loggedIn(section, router),
        loggedOut: () => loggedOut(section, router)
    };

    views[!!getCurrentUser() ? 'loggedIn' : 'loggedOut']();
}

function loggedIn(section, router) {
    const statsConfig = [
        { text: 'Estadísticas', className: 'auth-text-bold' },
        { text: `${fetchJoinedDate()}`, className: 'auth-text' },
        { text: `${fetchScore()}`, className: 'auth-text' },
        { text: `No sé quién es usted, ${getCurrentUser()}.`, className: 'auth-text' }
    ];

    statsConfig.forEach(({ text, className }) => {
        build('p', { text, className }, section);
    });

    const logoutBtn = build('button', { text: 'Desconectar, por favor', className: "validate-button" }, section);
    const deleteBtn = build('button', { text: 'Eliminar cuenta ya', className: "delete-button" }, section);

    logoutBtn.addEventListener('click', () => {
        logout();
        router.navigate('user');
    });

    deleteBtn.addEventListener('click', () => {
        remove();
        router.navigate('user');
    });
}

function loggedOut(section, router) {
    const tabConfig = [
        { 'data-mode': 'login', text: 'Iniciar sesión', active: true },
        { 'data-mode': 'register', text: 'Crear cuenta', active: false }
    ];

    const tabs = build('div', { className: 'auth-tabs' }, section);
    tabConfig.forEach(({ 'data-mode': mode, text, active }) => {
        build('button', { attrs: { 'data-mode': mode, type: 'button' }, text, className: `auth-tab ${active ? 'active' : ''}` }, tabs);
    });

    const form = build('form', { id: 'auth-form', className: 'login-mode' }, section);

    const fieldConfig = [
        { type: 'text', id: 'username', placeholder: 'Usuario' },
        { type: 'password', id: 'password', placeholder: 'Contraseña' }
    ];

    fieldConfig.forEach(({ type, id, placeholder }) => {
        build('input', {
            attrs: { type, id, placeholder, required: true, autocomplete: 'off' }
        }, form);
    });

    build('p', { className: 'auth-text' }, form);
    const submit = build('button', { attrs: { type: 'submit' }, text: 'Entrar', className: 'validate-button' }, form);

    const username = section.querySelector('#username');
    const password = section.querySelector('#password');
    const status = section.querySelector('.auth-text');
    const tabButtons = section.querySelectorAll('.auth-tab');

    const switchMode = (mode) => {
        form.classList.toggle('login-mode', mode === 'login');
        form.classList.toggle('register-mode', mode === 'register');
        submit.textContent = mode === 'login' ? 'Entrar' : 'Crear cuenta';

        tabButtons.forEach(tab => tab.classList.toggle('active', tab.dataset.mode === mode));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mode = form.classList.contains('register-mode') ? 'register' : 'login';
        const ok = mode === 'login'
            ? login(username.value, password.value)
            : register(username.value, password.value);

        status.textContent = ok
            ? `Usuario ${username.value} ${mode === 'login' ? 'conectado' : 'creado'}`
            : (mode === 'login' ? 'Credenciales incorrectas' : 'Usuario ya existe');

        if (ok && router?.navigate) {
            setTimeout(() => router.navigate('user'), 987);
        }
    };

    tabButtons.forEach(tab => tab.addEventListener('click', () => switchMode(tab.dataset.mode)));
    form.addEventListener('submit', handleSubmit);
}