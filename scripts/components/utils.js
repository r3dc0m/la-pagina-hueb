import { icons } from '../data/icons.js';

export const print = (i) => console.log(i);

const createSvg = (tag) => document.createElementNS('http://www.w3.org/2000/svg', tag);

export function createSvgIcon(name, size = 24, parent) {
    const icon = icons[name];
    if (!icon) throw new Error(`icon ${name} not found!`);

    const svg = createSvg('svg');
    svg.setAttribute('viewBox', icon.viewBox);
    svg.setAttribute('width', size);
    svg.setAttribute('height', size);

    const path = createSvg('path');
    path.setAttribute('d', icon.path);
    path.setAttribute('fill', 'currentColor');

    svg.appendChild(path);
    parent.appendChild(svg);

    return svg;
}

export const build = (tag, text = null, id, parent, options = {}) => {
    if (!parent || !parent.appendChild) {
        throw new Error('parent must be a valid node!');
    }

    const element = document.createElement(tag);

    if (id) element.id = id;

    if (options.className) element.className = options.className;

    if (options.src && (tag === 'img' || tag === 'video' || tag === 'source')) {
        element.src = options.src;
        if (options.alt) element.alt = options.alt;
    }

    if (options.attrs) {
        Object.entries(options.attrs).forEach(([key, value]) => {
            element.setAttribute(key, value);
        });
    }

    if (text !== undefined && text !== null) {
        element.textContent = text;
    }

    parent.appendChild(element);

    if (tag === 'button' && options?.name) {
        createSvgIcon(options.name, options.size || 24, element);
        if (options?.label) {
            const label = document.createElement('span');
            label.textContent = options.label;
            label.className = 'nav-button-label';
            element.appendChild(label);
        }
    }

    return element
}

export function buildBlock(type, content, parent) {
    const article = build('article', null, null, parent);

    switch (type) {
        case 'card':
            build('img', null, null, article, { src: content.image, alt: content.alt });
            build('h3', content.title, null, article);
            build('p', content.description, null, article);
            break;

        case 'review':
            // build('p', content.comment, 'review-comment', article);
            break;

        case 'text':
            // build('p', content.text, 'text-block', article);
            break;
    }

    return article;
}