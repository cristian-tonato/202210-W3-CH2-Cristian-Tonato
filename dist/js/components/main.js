import { Component } from './component.js';
export class Main extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.createTemplate();
    }
    createTemplate() {
        return `
        <main>
        </main>
        `;
    }
}
