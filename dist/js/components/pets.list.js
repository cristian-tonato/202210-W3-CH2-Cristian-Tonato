import { Component } from "../../component.js";
import { PETS } from "./models/data.js";
import { Pets } from "./models/pets.js";
import { AddPets } from "./add.pets.js";
export class PetsList extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.pets = [...PETS];
        this.manageComponent();
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.render(this.selector, this.template);
        new AddPets('slot#add-Pets');
        setTimeout(() => {
            var _a;
            (_a = document
                .querySelector('form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', this.handleAdd.bind(this));
            document
                .querySelectorAll('.eraser')
                .forEach((item) => item.addEventListener('click', this.handlerEraser.bind(this)));
        }, 100);
    }
    createTemplate() {
        let template = `<section>
                <h2>Tareas</h2>
                <slot id="add-Pets"></slot>
                <ul>`;
        this.pets.forEach((item) => {
            template += `
            <li> ${item.id} - ${item.petname} -${item.breed} -${item.owner}
            <span class="eraser" data-id="${item.id}">🗑️</span>
            </li>`;
        });
        template += `</ul>
            </section>`;
        return template;
    }
    handleAdd(ev) {
        ev.preventDefault();
        const petname = document.querySelector('#resp1')
            .value;
        const breed = document.querySelector('#resp3').value;
        const owner = document.querySelector('#resp4')
            .value;
        this.pets.push(new Pets(petname, breed, owner));
        this.manageComponent();
    }
    handlerEraser(ev) {
        const deletedID = ev.target.dataset.id;
        this.pets = this.pets.filter((item) => item.id !== +deletedID);
        this.manageComponent();
    }
}
