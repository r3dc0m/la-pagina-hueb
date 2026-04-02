import { build } from "../utils.js";


export default class App {
    constructor() {
    }

    createLayout() {
        const body = document.body;

        this.header = build("header", "", "header", body);
        this.nav = build("nav", null, "nav", this.header);
        this.navButton1 = build("button", null, "navButton1", this.nav);
        this.navButton1ico = build("svg",null,null,this.navButton1, {name:'fullEgg',size:24, color: 'var(--color-A)'} );
//        createSvgIcon('fullEgg', 24, this.navButton1, "var(--color-A)")

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