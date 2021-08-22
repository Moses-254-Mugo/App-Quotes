import { Component, Input, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Input() list_of_quotes: any[];
  quotes: Quote[] = [
    new Quote('Nelson','Moses Kinyua', 'Find an online version and watch merlin find his son'),
    new Quote('John Doe','George Mugo','I have to buy cookies for the parrot'),
  ];

  

  constructor() { }

}
