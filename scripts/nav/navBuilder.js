import { build } from "../utils.js";

export class NavBuilder {
    constructor(parent) {
        this.parent = parent;
        this.createBlocks();
        this.createButtons();
    }

    createBlocks() {
        this.navBlockLeft = build("div", null, null, this.parent, { className: 'nav-left' });
        this.navBlockCenter = build("div", null, null, this.parent, { className: 'nav-center' });
        this.navBlockRight = build("div", null, null, this.parent, { className: 'nav-right' });
    }

    createButtons() {
        this.navButtonHome = build("button", null, null, this.navBlockLeft, { className: 'nav-buttons', name: 'fullEgg', label: 'Inicio', attrs: { 'data-route': 'home' } });

        this.navButtonModA = build("button", null, null, this.navBlockCenter, { className: 'nav-buttons', name: 'basket', label: 'ModA', attrs: { 'data-route': 'modA' } });
        this.navButtonModB = build("button", null, null, this.navBlockCenter, { className: 'nav-buttons', name: 'bird', label: 'ModB', attrs: { 'data-route': 'modB' } });
        this.navButtonModC = build("button", null, null, this.navBlockCenter, { className: 'nav-buttons', name: 'tractor', label: 'ModC', attrs: { 'data-route': 'modC' } });

        this.navButtonUser = build("button", null, null, this.navBlockRight, { className: 'nav-buttons', name: 'user', label: 'Usuario', attrs: { 'data-route': 'user' } });
    }
}