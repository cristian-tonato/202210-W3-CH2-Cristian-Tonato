import { Component } from './component.js';
export class AddPet extends Component {
    constructor(selector, handleAdd) {
        super();
        this.selector = selector;
        this.handleAdd = handleAdd;
        this.template = this.createTemplate();
        this.renderOuter(this.selector, this.template);
        setTimeout(() => {
            var _a;
            (_a = document
                .querySelector('form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', (ev) => {
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
