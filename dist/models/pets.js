/*export interface iPets{
    id: number;
    name: string;
    breed: string;
    isAdopted: boolean;
    owner: string
}*/
export class Pets {
    constructor(petname, breed, owner) {
        this.petname = petname;
        this.breed = breed;
        this.owner = owner;
        this.id = Pets.crearId();
        this.petname = petname;
        this.breed = breed;
        this.owner = owner;
    }
    static crearId() {
        return Math.round(Math.random() * 1000000);
    }
}
