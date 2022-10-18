import { Component } from './component.js';


export class Main extends Component {
    template: string;
    constructor(public selector: string) {
        super();
        this.template = this.createTemplate();
    }
    createTemplate() {
        return `
        <main>
        </main>
        `;
    }
}
