import { Component } from "./component.js";
import { PETS } from "../models/data.js";
import { Pets } from "../models/pets.js";
import { AddPets } from "./add.pets.js";





export class PetsList extends Component {
    template!: string;
    pets = [...PETS];
    constructor(public selector: string) {
        super();
        this.manageComponent();
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.render(this.selector, this.template);
        new AddPets('slot#add-Pets');
        setTimeout(() => {
            document
                .querySelector('form')
                ?.addEventListener('submit', this.handleAdd.bind(this));
            document
                .querySelectorAll('.eraser')
                .forEach((item) =>
                    item.addEventListener(
                        'click',
                        this.handlerEraser.bind(this)
                    )
                );
        }, 100);
    }

    createTemplate() {
        let template = `<section>
                <h2>Pets</h2>
                <slot id="add-Pets"></slot>
                <ul>`;
        this.pets.forEach((item: Pets) => {
            template += `
            <li> ${item.id} - ${item.petname} -${item.breed} -${item.owner}
            <span class="eraser" data-id="${item.id}">🗑️</span>
            </li>`;
        });
        template += `</ul>
            </section>`;
        return template;
    }
    handleAdd(ev: Event) {
        ev.preventDefault();
        const petname = (document.querySelector('#pet1') as HTMLInputElement)
            .value;
        const breed = (
            document.querySelector('#pet2') as HTMLInputElement
        ).value;
        const owner = (document.querySelector('#pet3') as HTMLInputElement)
            .value;

        this.pets.push(new Pets(petname,breed,owner));
        this.manageComponent();
    }

    handlerEraser(ev: Event) {
        const deletedID = (ev.target as HTMLElement).dataset.id;
        this.pets = this.pets.filter(
            (item) => item.id !== +(deletedID as string)
        );
        this.manageComponent();
    }
}
