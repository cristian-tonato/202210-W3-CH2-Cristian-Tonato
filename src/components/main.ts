import { Pets } from './pets.js';

export class Main extends Pets {
    template: string;
    constructor(public selector: string) {
        super();
        this.template = this.createTemplate();
    }
    createTemplate() {
        return `
        <header>
        <h1>PETS</h1>
    </header>
        `;
    }
}
