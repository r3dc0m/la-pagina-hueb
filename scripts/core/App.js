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

        this.navButtonHome = build("button", null, "navButtonHome", navBlockLeft, { name: 'fullEgg' });

        this.navButtonModA = build("button", null, "navButtonModA", navBlockCenter, { name: 'basket' });
        this.navButtonModB = build("button", null, "navButtonModB", navBlockCenter, { name: 'bird' });
        this.navButtonModC = build("button", null, "navButtonModC", navBlockCenter, { name: 'tractor' });

        this.navButtonUser = build("button", null, "navButtonUser", navBlockRight, { name: 'user' });


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