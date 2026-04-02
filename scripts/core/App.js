import { build } from "../utils.js";


export default class App {
    constructor() {
    }

    createLayout() {
        const body = document.body;

        this.header = build("header", "", "header", body);
        this.nav = build("nav", null, null, this.header, { className: 'nav-bar' });
        const navBlockLeft = build("div", null, null, this.nav, { className: 'nav-left' });
        const navBlockCenter = build("div", null, null, this.nav, { className: 'nav-center' });
        const navBlockRight = build("div", null, null, this.nav, { className: 'nav-right' });

        this.navButtonHome = build("button", null, "navButtonHome", navBlockLeft);
        this.navButtonHomeIcon = build("svg", null, null, this.navButtonHome, { name: 'fullEgg' });

        this.navButtonModA = build("button", null, "navButtonModA", navBlockCenter);
        this.navButtonModAIcon = build("svg", null, null, this.navButtonModA, { name: 'basket' });

        this.navButtonModB = build("button", null, "navButtonModB", navBlockCenter);
        this.navButtonModAIcon = build("svg", null, null, this.navButtonModB, { name: 'bird' });

        this.navButtonModC = build("button", null, "navButtonModC", navBlockCenter);
        this.navButtonModCIcon = build("svg", null, null, this.navButtonModC, { name: 'tractor' });

        this.navButtonUser = build("button", null, "navButtonUser", navBlockRight);
        this.navButtonUserIcon = build("svg", null, null, this.navButtonUser, { name: 'user' });

        this.h1 = build("h1", "La página Hueb", "title", this.header);

        this.main = build("main", null, "main", body);
        this.content = build("section", null, "content", this.main);

        this.footer = build("footer", null, "footer", body);
        this.footerText = build("p", "La página Hueb © 2026. Contenido libre de derechos | Imágenes y multimedia: pixabay.com", "footer-text", this.footer);
    }

    init() {
        this.createLayout();
    }
}