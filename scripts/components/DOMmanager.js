import { build } from '../data/utils.js';
import { NavBar } from './NavBar.js';
import { Pages } from './Content.js';
import { Router } from '../core/Router.js';

export default class DOMmanager {
    constructor() {
        this.body = document.body;
        this.createLayout();
        this.preloadAssets();
        this.setupRouter();
    }

    createLayout() {
        this.header = build('header', {}, this.body);

        this.h1 = build('h1', { text: 'La página Hueb', className: 'title' }, this.header);

        this.navBar = build('nav', { className: 'nav-bar' }, this.header);
        new NavBar(this.navBar);

        this.main = build('main', { className: 'main' }, this.body);
        this.content = build('div', { className: 'content' }, this.main);

        this.footer = build('footer', {}, this.body);
        build('p', {
            text: 'La página Hueb © 2026. Contenido libre de derechos. Multimedia: pixabay.com',
            className: 'footer-text'
        }, this.footer);
    }

    preloadAssets() {
        Object.values(Pages).forEach(page => {
            if (page.background?.src) {
                const img = new Image();
                img.src = page.background.src;

                if (page.background.type === 'video') {
                    const video = document.createElement('video');
                    video.src = page.background.src;
                    video.preload = 'metadata';
                }
            }
        });
    }

    setupRouter() {
        this.router = new Router(this.navBar, this.content);
        this.router.init();
    }
}