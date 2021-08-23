export class Quote {
    
    // public upvote: number;
    // public downvote: number;
    showDescription: boolean;
  static id: number;
  static showDate: Date;
    constructor (public id: number, public author: string, public name:  string, public description: string, public showDate: Date){
        this.showDescription = false;
        
    }



}
