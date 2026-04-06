import DOMmanager from '../components/DOMmanager.js';


export default class App {
    components() {
        new DOMmanager
    }

    init() {
        this.components()
    }
}