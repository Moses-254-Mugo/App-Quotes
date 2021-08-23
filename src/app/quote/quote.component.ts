import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote : Quote[] =[
    new Quote(1, "John Doe", "Moses Kinyua", "What can't kill you makes you stronger", new Date(2021,7,20))

  ];
  addNewQuote(quote:Quote){
    let quoteLength = this.quote.length;
    quote.id = quoteLength+1;
    quote.showDate = new Date(quote.showDate)
    this.quote.push(quote)
  }

  toggleDetail(index: any){
    this.quote[index].showDescription = !this.quote[index].showDescription
  }
  completQuote(isComplete: any, index: any){
    if(isComplete){
      let toDelete = confirm("Are you sure you want to delete??");

    if(toDelete){
      this.quote.splice(index, 1)
    }
  }
  
  }
  constructor() { }

  ngOnInit(){
  }

}


