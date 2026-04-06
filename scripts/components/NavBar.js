import { build, buildIconButton } from './utils.js';
import { Pages } from '../data/pages.js';

export class NavBar {
    constructor(parent) {
        this.parent = parent;
        this.blocks = {};
        this.createBlocks();
        this.createButtons();
    }

    createBlocks() {
        ['left', 'center', 'right'].forEach(block => {
            this.blocks[block] = build('div', { className: `nav-${block}` }, this.parent);
        });
    }

    createButtons() {
        Object.entries(Pages).forEach(([route, config]) => {
            buildIconButton(this.blocks[config.block], {
                route,
                icon: config.icon,
                label: config.title
            });
        });
    }
}