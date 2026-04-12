import { build } from '../utils.js';
import { getSession, pushSession, fetchScore } from '../../services/storageService.js';

export function renderCatPage(content) {
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
        apiContainer.innerHTML = '<p class="loading">Abriendo lata de atún...</p>';
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