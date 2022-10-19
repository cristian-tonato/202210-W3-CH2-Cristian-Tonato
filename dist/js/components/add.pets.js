import { Component } from './component.js';
export class AddPets extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.HTMLtemplate = this.createTemplate();
        this.renderOuter(this.selector, this.HTMLtemplate);
    }
    createTemplate() {
        return `
        <form>
            <div>
                <input type="text" id="Pet1" placeholder="Name" required>
            </div>
            <div>
                <input type="text" id="pet2" placeholder="Breed">
            </div>
            <div>
                <input type="text" id="pet3" placeholder="Owner">
            </div>
            <button type="submit">Guardar</button>
        </form>
        `;
    }
}
