import { build } from "../utils.js";
import { Pages } from './pages.js';

export class NavBuilder {
    constructor(parent) {
        this.parent = parent;
        this.blocks = {};
        this.createBlocks();
        this.createButtons();
    }

    createBlocks() {
        ['left', 'center', 'right'].forEach(block => {
            this.blocks[block] = build("div", null, null, this.parent, {
                className: `nav-${block}`
            });
        });
    }

    createButtons() {
        Object.entries(Pages).forEach(([route, config]) => {
            const btn = build("button", null, null, this.blocks[config.block], {
                className: 'nav-buttons',
                name: config.icon,
                label: config.title,
                attrs: { 'data-route': route }
            });
        });
    }
}