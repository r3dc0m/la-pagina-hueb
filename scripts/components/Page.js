import { build } from '../data/utils.js';

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

        if (this.background.type === 'video') {
            build('video', { src: this.background.src, attrs: { autoplay: '', muted: '', loop: '' }, className: 'bg-media'}, content);
        } else {
            build('img', { src: this.background.src, alt: this.background.alt || 'Fondo', className: 'bg-media' }, content);
        }
    }

    async render(content, router) {
        this.createBackground(content);
        this.pageContent = build('section', { className: 'page-content', id: 'page-content' }, content);
        if (typeof this.renderContent === 'function') {
            await this.renderContent(this.pageContent, router, this);
        }
    }
}