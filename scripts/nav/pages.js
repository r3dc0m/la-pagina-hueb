import { build } from '../utils.js';

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
        icon: 'basket',
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
                // const response = await fetch('https://dog.ceo/api/breeds/image/random');
                const response = await fetch('https://api.thecatapi.com/v1/images/search');
                const data = await response.json();

                content.innerHTML = '';
                build('img', null, null, content, { className: 'gallery-img', src: data[0].url, alt: 'Imagen de gato aleatorio' })
                // img.src = data.message;

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
    user: {
        title: 'Usuario',
        icon: 'user',
        block: 'right',
        render: (content) => {
            content.innerHTML = '<p>Usuario test.</p>';
        }
    }
}