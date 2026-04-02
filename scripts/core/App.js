import { build } from "../utils.js";

export default class App {
    constructor() {
        this.main = null;
        this.header = null;
        this.content = null;
        this.footer = null;
        // do I need an object to load dom?
    }

    createLayout() {
        const body = document.body;
        this.main = build("main", "", "main", body);
        this.header = build("header", "La página Hueb", "header", this.main);
        this.content = build("section", "", "content", this.main);
        this.footer = build("footer", "", "footer", this.main);
        this.p = build("p", "La página Hueb © 2026. Contenido libre de derechos | Imágenes y multimedia: pixabay.com", "my-p", this.content);
    }

    init() {
        this.createLayout();
    }
}