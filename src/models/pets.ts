/*export interface iPets{
    id: number;
    name: string;
    breed: string;
    isAdopted: boolean;
    owner: string
}*/

export class Pets{
    id:number;
    static crearId(){
        return Math.round(Math.random()* 1_000_000);
    }
    constructor(
         
        public petname: string,
        public breed: string,
        public owner: string
        ){
            this.id= Pets.crearId();
            this.petname= petname;
            this.breed=breed;
            this.owner= owner
        }
}