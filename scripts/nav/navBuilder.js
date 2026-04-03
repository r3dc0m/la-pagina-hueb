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
        this.navButtonHome = build("button", null, "navButtonHome", this.navBlockLeft, { className: 'nav-buttons', name: 'fullEgg', label: 'Inicio' });

        this.navButtonModA = build("button", null, "navButtonModA", this.navBlockCenter, { className: 'nav-buttons', name: 'basket', label: 'ModA' });
        this.navButtonModB = build("button", null, "navButtonModB", this.navBlockCenter, { className: 'nav-buttons', name: 'bird', label: 'ModB' });
        this.navButtonModC = build("button", null, "navButtonModC", this.navBlockCenter, { className: 'nav-buttons', name: 'tractor', label: 'ModC' });

        this.navButtonUser = build("button", null, "navButtonUser", this.navBlockRight, { className: 'nav-buttons', name: 'user', label: 'Usuario' });
    }
}