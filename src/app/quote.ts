export class Quote {
    public author: string;
    public name:  string;
    public description: string;

    showDescription: boolean;
    constructor (author: string,  name: string, description: string){
        this.author = author;
        this.name = name;
        this.description = description;

    }
}
