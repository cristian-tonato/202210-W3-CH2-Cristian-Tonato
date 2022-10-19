import { Component } from './component.js';

export class Header extends Component {
    template: string;
    constructor(public selector: string) {
        super();
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
    }
    createTemplate() {
        return `<header><h1>WORD PET</h1>
        <img src="./img/png-clipart-street-dog-color-leg-blue-dog-blue-white.png" class="img" alt="" srcset="">
        </header>`;
    }
}
