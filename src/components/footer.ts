import { Component } from './component.js';

export class Footer extends Component {
    template: string;
    constructor(public selector: string) {
        super();
        this.template = this.createTemplate();
    }
    createTemplate() {
        return `
        <footer>
        <address>PETS.COM</address>
        </footer>
        `;
    }
}
