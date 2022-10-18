export interface ilIST{
    id: number;
    name: string;
    breed: string;
    isAdopted: boolean;
    owner: string
}

export class List{
    static crearId(){
        return Math.round(Math.random()* 1_000_000);
    }
    constructor(
        public id:number, 
        public name: string,
        public breed: string,
        public isAdopted: boolean,
        public owner: string){
            this.id= List.crearId();
        }
}