import { build } from '../components/utils.js';
import { login, register, getCurrentUser, logout } from '../services/authService.js';

export const Pages = {
    home: {
        title: 'Inicio',
        icon: 'fullEgg',
        block: 'left',
        render: (content) => {
            content.innerHTML = '<div class="bg-media"><video autoplay muted loop src="assets/video/fryingegg.mp4"></video></div><p>Home test.</p>';
        }
    }, 
    modA: {
        title: 'Nuestros valores',
        icon: 'potato',
        block: 'center',
        render: (content) => {
            content.innerHTML = '<div class="bg-media"><img src="assets/images/eggs01.jpg" alt="Huebs"></div><p>modA test.</p>';
        }
    },
    modB: {
        title: '¿Quién protege la Hueb?',
        icon: 'bird',
        block: 'center',
        async render(content) {
            content.innerHTML = '<div class="bg-media"><img src="assets/images/roster01.jpg" alt="Platty"></div>';
            try {
                const response = await fetch('https://api.thecatapi.com/v1/images/search');
                const data = await response.json();
                build('img', null, null, content, { className: 'api-img', src: data[0].url, alt: 'Un gato distinto' })
            } catch (error) {
                content.innerHTML = `<p>Error: ${error}</p>`;
            }
        }
    },
    modC: {
        title: 'El no saber y el hablar mucho',
        icon: 'tractor',
        block: 'center',
        render: (content) => {
            content.innerHTML = '<div class="bg-media"><img src="assets/images/horse02.jpg" alt="Caballo"></div><p>modC test.</p>';
        }
    },
    modD: {
        title: 'La singularidad',
        icon: 'basket',
        block: 'center',
        render: (content) => {
            content.innerHTML = '<div class="bg-media"><img src="assets/images/egg01.jpg" alt="Hueb"></div><p>modD test.</p>';
        }
    },
    user: {
        title: 'Usuario',
        icon: 'user',
        block: 'right',
        render(content, router) {
            const currentUser = getCurrentUser();
            content.innerHTML = '<div class="bg-media"><img src="assets/images/eggs04.jpg" alt="Huebs"></div>'
            if (currentUser) {
                content.innerHTML += `
                <section id="auth">
                    <p class="auth-text">No sé quién eres, ${currentUser.username}.</p>
                    <button class="auth-button">Desconectar, por favor.</button>
                </section>`;
                const logoutBtn = content.querySelector('.auth-button');
                logoutBtn.addEventListener('click', () => {
                    logout();
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
                        <button type="submit" class="auth-button">Entrar</button>
                        <p class="auth-text"></p>
                    </form>
                </section>`;

                const form = content.querySelector('#auth');
                const username = content.querySelector('#username');
                const password = content.querySelector('#password');
                const submit = content.querySelector('.auth-button');
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
                        (router && router.navigate) && setTimeout(() => router.navigate('home'), 987);
                    } else {
                        status.textContent = mode === 'login' ? 'Credenciales incorrectas' : 'Usuario ya existe';
                    }
                });
            }
        }
    }
}