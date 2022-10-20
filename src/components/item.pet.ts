import { Pet } from "../models/pet";
import { Component } from './component.js';


export class ItemPet extends Component {
    template!: string;
    constructor(
        public selector: string,
        public item: Pet,
        public handelDelete: (id: number) => void,
        public handelAdoption: (id: number) => void
    ) {
        super();
        this.manageComponent();
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
        setTimeout(() => {
            (
                document.querySelector(`#d${this.item.id}`) as HTMLElement
            ).addEventListener('click', () => {
                this.handelDelete(this.item.id);
            });
            (
                document.querySelector(`#c${this.item.id}`) as HTMLElement
            ).addEventListener('change', () => {
                this.handelAdoption(this.item.id);
            });
        }, 100);
    }
    createTemplate() {
        return `<li> 
        <span>${this.item.id}</span> - 
        <label>Adopted</label>
        <input id="c${this.item.id}" type="checkbox" ${
            this.item.isAdopted ? 'checked' : ''
        }>
        <span>${this.item.name}</span> -
        <span>${this.item.breed}</span> -
        <span> ${this.item.adopter}</span> -
        <span class="delete" id="d${this.item.id}">🗑️</span>
        </li>`;
    }
}
