import { Pages } from '../components/Content.js';

export class Router {
    constructor(nav, content) {
        this.nav = nav;
        this.content = content;
        this.currentRoute = 'home';
    }

    init() {
        this.nav.querySelectorAll('[data-route]').forEach(btn => {
            btn.addEventListener('click', () => {
                const targetRoute = btn.dataset.route;
                if (targetRoute !== this.currentRoute) {
                    this.navigate(targetRoute);
                }
            });
        });
        this.navigate('home');
    }

    async navigate(route) {
        this.currentRoute = route;

        const page = Pages[route];
        if (!page) {
            this.content.innerHTML = '<p>404</p>';
            return;
        }

        this.content.innerHTML = '';
        await page.render(this.content, this);

        document.querySelectorAll('.nav-buttons').forEach(b =>
            b.classList.toggle('active', b.dataset.route === route)
        );
    }
}