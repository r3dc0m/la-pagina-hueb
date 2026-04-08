import { icons } from '../data/data.js';

export function build(tag, options = {}, parent) {
    const { text = null, id = null, className = null, attrs = {}, src, alt } = options;

    if (!parent || !parent.appendChild) {
        throw new Error('parent must be a valid node!');
    }

    const element = document.createElement(tag);

    if (id) element.id = id;
    if (className) element.className = className;
    if (src && (tag === 'img' || tag === 'video' || tag === 'source')) {
        element.src = src;
        if (alt) element.alt = alt;
    }
    if (text !== null && text !== undefined) {
        element.style.whiteSpace = 'pre-line';
        element.textContent = text;
    }

    Object.entries(attrs).forEach(([key, value]) => {
        element.setAttribute(key, value);
    });


    parent.appendChild(element);
    return element;
}

export function buildBlock(type, content, parent) {
    const article = build('article', { className: `${type}-article` }, parent);

    switch (type) {
        case 'card':
            build('img', { src: content.image, alt: content.alt }, article);
            build('h3', { text: content.title }, article);
            build('p', { text: content.description }, article);
            break;

        case 'review':
            build('img', { src: content.avatar, alt: content.username, className: 'review-avatar' }, article);

            const userInfo = build('div', { className: 'review-user' }, article);
            build('p', { text: content.username, className: 'review-username' }, userInfo);
            build('p', { text: content.rating, className: 'review-stars' }, userInfo);
            build('p', { text: content.comment, className: 'review-comment' }, article);
            break;

        case 'text':
            const title = content.title || 'no title?';
            build('h2', { text: title, className: 'text-header' }, article);
            build('p', { text: content.text, className: 'text-block' }, article);
            break;
    }

    return article;
}

export function buildBlockGroup(type, items, parent, groupClass = null) {
    const container = build('div', { className: groupClass || `${type}-pack` }, parent);

    items.forEach(item => buildBlock(type, item, container));
    return container;
}

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

export function buildIconButton(parent, { route, icon, label, size = 24 }) {
    const button = build('button', {
        className: 'nav-buttons',
        attrs: { 'data-route': route, type: 'button' }
    }, parent);

    button.appendChild(createSvgIcon(icon, size, button));

    if (label) {
        const span = document.createElement('span');
        span.className = 'nav-button-label';
        span.textContent = label;
        button.appendChild(span);
    }

    return button;
}