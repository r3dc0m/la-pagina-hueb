import { build } from '../utils.js';
import { login, register } from '../auth/authService.js';

export const Pages = {
    home: {
        title: 'Inicio',
        icon: 'fullEgg',
        block: 'left',
        render: (content) => {
            content.innerHTML = '<p>Home test.</p>';
        }
    },
    modA: {
        title: 'Nuestros valores',
        icon: 'potato',
        block: 'center',
        render: (content) => {
            content.innerHTML = '<p>modA test.</p>';
        }
    },
    modB: {
        title: '¿Quién protege la Hueb?',
        icon: 'bird',
        block: 'center',
        async render(content) {
            try {
                content.innerHTML = '<div class="loading">Cargando...</div>';
                const response = await fetch('https://api.thecatapi.com/v1/images/search');
                const data = await response.json();

                content.innerHTML = '';
                build('img', null, null, content, { className: 'gallery-img', src: data[0].url, alt: 'Imagen de gato aleatorio' })

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
            content.innerHTML = '<p>modC test.</p>';
        }
    },
    modD: {
        title: 'La singularidad',
        icon: 'basket',
        block: 'center',
        render: (content) => {
            content.innerHTML = '<p>modD test.</p>';
        }
    },
    user: {
        title: 'Usuario',
        icon: 'user',
        block: 'right',
        render(content, router) {
            content.innerHTML = `
            <section>
                <div class="auth-tabs">
                    <button class="auth-tab active" data-mode="login">Iniciar sesión</button>
                    <button class="auth-tab" data-mode="register">Crear cuenta</button>
                </div>
                <form id="auth-form" class="login-mode">
                    <input type="text" id="username" placeholder="Usuario" required autocomplete="username">
                    <input type="password" id="password" placeholder="Contraseña" required autocomplete="current-password">
                    <button type="submit" class="auth-submit">Entrar</button>
                </form>
                <p class="auth-status"></p>
            </section>`;

            const form = content.querySelector('#auth-form');
            const username = content.querySelector('#username');
            const password = content.querySelector('#password');
            const submit = content.querySelector('.auth-submit');
            const tabs = content.querySelectorAll('.auth-tab');
            const status = content.querySelector('.auth-status');

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