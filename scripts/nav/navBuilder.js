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
        this.navButtonHome = build("button", null, "navButtonHome", navBlockLeft, { className: 'nav-buttons', name: 'fullEgg' , label: 'Inicio'});

        this.navButtonModA = build("button", null, "navButtonModA", navBlockCenter, { className: 'nav-buttons', name: 'basket' });
        this.navButtonModB = build("button", null, "navButtonModB", navBlockCenter, { className: 'nav-buttons', name: 'bird' });
        this.navButtonModC = build("button", null, "navButtonModC", navBlockCenter, { className: 'nav-buttons', name: 'tractor' });

        this.navButtonUser = build("button", null, "navButtonUser", navBlockRight, { className: 'nav-buttons', name: 'user' });

    }

    get nav() {
      return this.parent;  
    } 
}