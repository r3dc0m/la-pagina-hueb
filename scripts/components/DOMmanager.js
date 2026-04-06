import { build } from './utils.js';
import { NavBar } from './navBuilder.js';
import { Router } from '../services/router.js';

export default class DOMmanager {
    constructor() {
        this.body = document.body;
    }

    createLayout() {
        this.header = build('header', null, null, this.body);

        const navBar = build('nav', null, null, this.header, { className: 'nav-bar' });
        this.navBar = new NavBar(navBar);
        
        this.h1 = build('h1', 'La página Hueb', 'title', this.header);

        this.main = build('main', null, 'main', this.body);
        this.content = build('section', null, 'content', this.main);

        this.footer = build('footer', null, null, this.body);
        this.footerText = build('p', 'La página Hueb © 2026. Contenido libre de derechos y ambidiestros. Multimedia: pixabay.com', 'footer-text', this.footer);

        this.router = new Router(navBar, this.content);
        this.router.init();
    }

    init() {
        this.createLayout();
    }
}