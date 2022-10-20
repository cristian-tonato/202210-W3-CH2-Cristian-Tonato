import { Component } from './component.js';

export class AddPet extends Component {
    template: string;
    constructor(
        public selector: string,
        public handleAdd: (ev: Event) => void
    ) {
        super();
        this.template = this.createTemplate();
        this.renderOuter(this.selector, this.template);
        setTimeout(() => {
            document
                .querySelector('form')
                ?.addEventListener('submit', (ev: Event) => {
                    ev.preventDefault();
                    handleAdd(ev);
                });
        }, 100);
    }
    createTemplate() {
        return `<form>
            <div>
                <input type="text" id="pet-name" placeholder="Name of Pet?" required>
            </div>
            <div>
                <input type="text" id="breed" placeholder="Breed?">
            </div>
            <div>
                <input type="text" id="adopter-name" placeholder="Owner?">
            </div>
            <button class= "search" type="submit">SEARCH</button>
        </form>`;
    }
}
