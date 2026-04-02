import { icons } from './icons.js';

export const print = (i) => console.log(i);

const SVG_NS = 'http://www.w3.org/2000/svg';
const createSvg = (tag) => document.createElementNS(SVG_NS, tag);

export function createSvgIcon(name, size = 24, parent, color) {
    const icon = icons[name];
    if (!icon) throw new Error(`icon ${name} not found!`);

    const svg = createSvg('svg');
    svg.setAttribute('viewBox', icon.viewBox);
    svg.setAttribute('width', size);
    svg.setAttribute('height', size);

    const path = createSvg('path');
    path.setAttribute('d', icon.path);
    path.setAttribute('fill', color);

    svg.appendChild(path);
    parent.appendChild(svg);

    return svg;
}

export const build = (tag, text = null, id, parent, options = {}) => {
    if (!parent || !parent.appendChild) {
        throw new Error("parent must be a valid node!");
    }

    if (tag === 'svg') {
        return createSvgIcon(options.name, options.size || 24, parent, options.color || 'currentColor');
    }

    const element = document.createElement(tag);
    element.textContent = text;
    if (text !== undefined) element.textContent = text;
    if (id) element.id = id;
    if (options.className) element.className = options.className;
    if (options.attrs) {
        Object.entries(options.attrs).forEach(([key, value]) => {
            element.setAttribute(key, value);
        });
    }
    parent.appendChild(element);
    return element
}