import { Pets } from './pets.js';

export class Footer extends Pets {
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
