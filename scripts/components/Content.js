import { buildBlock, buildBlockGroup } from '../data/utils.js';
import { Page } from './Page.js';
import { renderCatPage } from './pages/CatPage.js';
import { renderUserPage } from './pages/UserPage.js';
import { cards, text, reviews } from '../data/data.js';

export const Pages = {
    home: new Page({
        title: 'Inicio',
        icon: 'fullEgg',
        block: 'left',
        background: { type: 'video', src: 'assets/video/fryingegg.mp4' },
        fn: (content, router, page) => {
            buildBlock('text', { title: page.title, text: text[router.currentRoute]?.text || '' }, content);
        }
    }),
    modA: new Page({
        title: 'Nuestros valores',
        icon: 'potato',
        block: 'center',
        background: { type: 'img', src: 'assets/images/eggs01.jpg', alt: 'Huebs' },
        fn: (content, router, page) => {
            buildBlock('text', { title: page.title, text: text[router.currentRoute]?.text || '' }, content);
            buildBlockGroup('review', Object.values(reviews), content, 'review-pack');
        }
    }),
    modB: new Page({
        title: '¿Quién protege la Hueb?',
        icon: 'bird',
        block: 'center',
        background: { type: 'img', src: 'assets/images/roster01.jpg', alt: 'Platty' },
        fn: async (content, router, page) => {
            buildBlock('text', { title: page.title, text: text[router.currentRoute]?.text || '' }, content);
            renderCatPage(content)
        }
    }),
    modC: new Page({
        title: 'El no saber y el hablar mucho',
        icon: 'tractor',
        block: 'center',
        background: { type: 'img', src: 'assets/images/horse02.jpg', alt: 'Horse' },
        fn: (content, router, page) => {
            buildBlock('text', { title: page.title, text: text[router.currentRoute]?.text || '' }, content);
            buildBlockGroup('card', Object.values(cards), content, 'card-pack');
        }
    }),
    modD: new Page({
        title: 'La singularidad',
        icon: 'basket',
        block: 'center',
        background: { type: 'img', src: 'assets/images/egg01.jpg', alt: 'Hueb' },
        fn: (content, router, page) => {
            buildBlock('text', { title: page.title, text: text[router.currentRoute]?.text || '' }, content);
        }
    }),
    user: new Page({
        title: 'Usuario',
        icon: 'user',
        block: 'right',
        background: { type: 'img', src: 'assets/images/eggs04.jpg', alt: 'Huebs' },
        fn: (content, router, page) => {
            buildBlock('text', { title: page.title, text: text[router.currentRoute]?.text || '' }, content);
            renderUserPage(content, router)
        }
    })
}