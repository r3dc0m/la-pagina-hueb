import { build } from "../utils.js";
import { NavBuilder } from "../nav/navBuilder.js";
import { Router } from "../nav/router.js";

export default class App {
    constructor() {
        this.body = document.body;
    }

    createLayout() {
        this.header = build("header", null, null, this.body);
        const navBar = build("nav", null, null, this.header, { className: 'nav-bar' });
        new NavBuilder(navBar);
        this.nav = navBar;
        
        this.h1 = build("h1", "La página Hueb", "title", this.header);

        this.main = build("main", null, "main", this.body);
        this.content = build("section", null, "content", this.main);

        this.footer = build("footer", null, null, this.body);
        this.footerText = build("p", "La página Hueb © 2026. Contenido libre de derechos. Imágenes y multimedia: pixabay.com", "footer-text", this.footer);

        this.router = new Router(this.nav, this.content);
        this.router.navigate('home');
    }

    init() {
        this.createLayout();
    }
}