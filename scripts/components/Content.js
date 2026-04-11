import { build, buildBlock, buildBlockGroup } from './utils.js';
import { login, register, logout, remove } from '../services/authService.js';
import { getCurrentUser, getSession, pushSession, fetchScore, fetchJoinedDate } from '../services/storageService.js';
import { Page } from './Page.js';
import { cards, text, reviews } from '../data/data.js';

export const Pages = {
    home: new Page({
        title: 'Inicio',
        icon: 'fullEgg',
        block: 'left',
        background: { type: 'video', src: 'assets/video/fryingegg.mp4' },
        fn: (content, router, page) => {
            buildBlock('text', { title: page.title, text: text[router.currentRoute]?.text || '' }, content);
        }
    }),
    modA: new Page({
        title: 'Nuestros valores',
        icon: 'potato',
        block: 'center',
        background: { type: 'img', src: 'assets/images/eggs01.jpg', alt: 'Huebs' },
        fn: (content, router, page) => {
            buildBlock('text', { title: page.title, text: text[router.currentRoute]?.text || '' }, content);
            buildBlockGroup('review', Object.values(reviews), content, 'review-pack');
        }
    }),
    modB: new Page({
        title: '¿Quién protege la Hueb?',
        icon: 'bird',
        block: 'center',
        background: { type: 'img', src: 'assets/images/roster01.jpg', alt: 'Platty' },
        fn: async (content, router, page) => {
            buildBlock('text', { title: page.title, text: text[router.currentRoute]?.text || '' }, content);
            const apiContainer = build('div', { className: 'api-img api-loading' }, content);
            const catButton = build('button', { className: 'validate-button', text: 'Capturar felino' }, content);
            const score = build('p', { text: fetchScore(), className: "score" }, content);
            const session = getSession();

            if (session.activeImage) {
                apiContainer.innerHTML = '';
                build('img', { className: 'api-img', src: session.activeImage, alt: 'Un gato distinto' }, apiContainer);
            }

            const loadCat = async () => {
                catButton.disabled = true;
                apiContainer.innerHTML = '<p class="loading">Abriendo una lata de atún...</p>';
                try {
                    const response = await fetch('https://api.thecatapi.com/v1/images/search');
                    const data = await response.json();

                    const url = data[0].url;
                    const format = url.split('.').pop().split('?')[0].toLowerCase();
                    pushSession(url, format);
                    apiContainer.innerHTML = '';
                    build('img', { className: 'api-img', src: url, alt: 'Un gato distinto' }, apiContainer);
                    score.textContent = fetchScore()

                } catch (error) {
                    apiContainer.innerHTML = `<p>Error: ${error}</p>`;
                } finally {
                    catButton.disabled = false;
                }
            };
            catButton.addEventListener('click', loadCat);
        }
    }),
    modC: new Page({
        title: 'El no saber y el hablar mucho',
        icon: 'tractor',
        block: 'center',
        background: { type: 'img', src: 'assets/images/horse02.jpg', alt: 'Horse' },
        fn: (content, router, page) => {
            buildBlock('text', { title: page.title, text: text[router.currentRoute]?.text || '' }, content);
            buildBlockGroup('card', Object.values(cards), content, 'card-pack');
        }
    }),
    modD: new Page({
        title: 'La singularidad',
        icon: 'basket',
        block: 'center',
        background: { type: 'img', src: 'assets/images/egg01.jpg', alt: 'Hueb' },
        fn: (content, router, page) => {
            buildBlock('text', { title: page.title, text: text[router.currentRoute]?.text || '' }, content);
        }
    }),
    user: new Page({
        title: 'Usuario',
        icon: 'user',
        block: 'right',
        background: { type: 'img', src: 'assets/images/eggs04.jpg', alt: 'Huebs' },
        fn: (content, router, page) => {
            buildBlock('text', { title: page.title, text: text[router.currentRoute]?.text || '' }, content);
            const currentUser = getCurrentUser();
            if (currentUser) {
                const section = build('section', { id: "auth" }, content);
                build('p', { text: `Estadísticas`, className: "auth-text-bold" }, section);
                build('p', { text: `${fetchJoinedDate()}`, className: "auth-text" }, section);
                build('p', { text: `${fetchScore()}`, className: "auth-text" }, section);
                const p1 = build('p', { text: `No sé quién es usted, ${currentUser}.`, className: "auth-text" }, section);
                const logoutBtn = build('button', { text: 'Desconectar, por favor', className: "validate-button" }, section);
                const deleteBtn = build('button', { text: 'Eliminar cuenta', className: "delete-button" }, section);

                logoutBtn.addEventListener('click', () => {
                    logout();
                    router.navigate('user');
                });

                deleteBtn.addEventListener('click', () => {
                    remove();
                    router.navigate('user');
                });

            } else {
                content.innerHTML += `
                <section id="auth">
                    <div class="auth-tabs">
                        <button class="auth-tab active" data-mode="login">Iniciar sesión</button>
                        <button class="auth-tab" data-mode="register">Crear cuenta</button>
                    </div>
                    <form id="auth-form" class="login-mode">
                        <input type="text" id="username" placeholder="Usuario" required autocomplete="off">
                        <input type="password" id="password" placeholder="Contraseña" required autocomplete="off">
                        <p class="auth-text"></p>
                        <button type="submit" class="validate-button">Entrar</button>
                    </form>
                </section>`;

                const form = content.querySelector('#auth');
                const username = content.querySelector('#username');
                const password = content.querySelector('#password');
                const submit = content.querySelector('.validate-button');
                const tabs = content.querySelectorAll('.auth-tab');
                const status = content.querySelector('.auth-text');

                const switchMode = (mode) => {
                    form.classList.toggle('login-mode', mode === 'login');
                    form.classList.toggle('register-mode', mode === 'register');
                    submit.textContent = mode === 'login' ? 'Entrar' : 'Crear cuenta';
                    tabs.forEach(tab => {
                        tab.classList.toggle('active', tab.dataset.mode === mode);
                    });
                };

                // tabs
                tabs.forEach(tab => {
                    tab.addEventListener('click', () => switchMode(tab.dataset.mode));
                });

                //form
                form.addEventListener('submit', (e) => {
                    e.preventDefault();

                    const mode = form.classList.contains('register-mode') ? 'register' : 'login';
                    const ok = mode === 'login' ? login(username.value, password.value) : register(username.value, password.value);

                    if (ok) {
                        status.textContent = `Usuario ${username.value} ${mode === 'login' ? 'conectado' : 'creado'}`;
                        (router && router.navigate) && setTimeout(() => router.navigate('user'), 987);
                    } else {
                        status.textContent = mode === 'login' ? 'Credenciales incorrectas' : 'Usuario ya existe';
                    }
                });
            }
        }
    })
}