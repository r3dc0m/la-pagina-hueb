import { build } from './utils.js';
import { NavBar } from './NavBar.js';
import { Router } from '../services/router.js';

export default class DOMmanager {
    constructor() {
        this.body = document.body;
        this.createLayout();
        this.setupRouter();
    }

    createLayout() {
        this.header = build('header', {}, this.body);

        this.navBar = build('nav', { className: 'nav-bar' }, this.header);
        new NavBar(this.navBar);

        this.h1 = build('h1', { text: 'La página Hueb', className: 'title' }, this.header);

        this.main = build('main', { className: 'main' }, this.body);
        this.content = build('section', { className: 'content' }, this.main);

        this.footer = build('footer', {}, this.body);
        build('p', {
            text: 'La página Hueb © 2026. Contenido libre de derechos (y ambidiestros). Multimedia: pixabay.com',
            className: 'footer-text'
        }, this.footer);
    }

    setupRouter() {
        this.router = new Router(this.navBar, this.content);
        this.router.init();
    }
}