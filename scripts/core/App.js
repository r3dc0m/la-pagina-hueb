import DOMmanager from '../components/DOMmanager.js';


export default class App {
    components() {
    const DOM = new DOMmanager
    DOM.init();
    }

    init() {
        this.components()
    }
}