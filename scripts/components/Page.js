import { build } from '../components/utils.js';

export class Page {
    constructor({ title, icon, block, background = null, fn }) {
        this.title = title;
        this.icon = icon;
        this.block = block;
        this.background = background;
        this.renderContent = fn;
    }

    createBackground(content) {
        if (!this.background) return;

        const bgMedia = build('div', { className: 'bg-media' }, content);

        if (this.background.type === 'video') {
            build('video', { src: this.background.src, attrs: { autoplay: '', muted: '', loop: '' } }, bgMedia);
        } else {
            build('img', { src: this.background.src, alt: this.background.alt || 'Fondo' }, bgMedia);
        }
    }

    async render(content, router) {
        this.createBackground(content);
        this.pageContent = build('section', { className: 'page-content', id: 'page-content' }, content);
        await this.renderContent(this.pageContent, router, this);
    }
}