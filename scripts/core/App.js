import { build } from "../utils.js";

export default class App {
    constructor() {
    }

    createLayout() {
        const body = document.body;

        this.header = build("header", "", "header", body);
        this.h1 = build("h1", "La página Hueb", "title", this.header)
        this.nav = build("nav", "", "nav", this.header)


        this.main = build("main", "", "main", body);
        this.content = build("section", "", "content", this.main);

        this.footer = build("footer", "", "footer", body);
        this.footerText = build("p", "La página Hueb © 2026. Contenido libre de derechos | Imágenes y multimedia: pixabay.com", "footer-text", this.footer);
    }

    init() {
        this.createLayout();
    }
}