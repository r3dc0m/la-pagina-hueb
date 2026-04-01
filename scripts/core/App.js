import { build } from "../utils.js";

export default class App {
    constructor() {
        this.main = null;
        this.header = null;
        this.content = null;
    }

    createLayout() {
        const body = document.body;
        this.main = build("main", "", "main", body);
        this.header = build("header", "La Página Hueb", "header", this.main);
        this.content = build("section", "", "content", this.main);
        this.p = build("p", "asdf", "my-p", this.content);
    }

    init() {
        this.createLayout();
    }
}