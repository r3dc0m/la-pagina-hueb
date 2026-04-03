import { build,print} from "../utils.js";
import { NavBuilder } from "../nav/navBuilder.js";


export default class App {
    constructor() {
    }

    createLayout() {
        const body = document.body;

        this.header = build("header", "", "header", body);
        const navBar = build("nav", null, null, this.header, { className: 'nav-bar' });
        this.navBuilder = new NavBuilder(navBar);
        print(this.navBuilder.navBlockLeft)
        this.nav = this.navBuilder.nav;

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