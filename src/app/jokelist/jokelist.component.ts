import { Component, OnInit } from '@angular/core';
import { Joke } from './../joke';

@Component({
  selector: 'app-jokelist',
  templateUrl: './jokelist.component.html',
  styleUrls: ['./jokelist.component.css']
})
export class JokelistComponent implements OnInit {
  jokes: Object[];
  constructor() {
    this.jokes = [
      new Joke("What did the cheese say when it looked in the mirror?",
        "Hello-Me (Halloumi)")
      ,
      new Joke("What kind of cheese do you use to disguise a small horse?",
        "Mask-a-pony (Mascarpone)")
      ,
      new Joke("A kid threw a lump of cheddar at me",
        "I thought ‘That’s not very mature’")
      ,
    ];
  }

  ngOnInit() {
  }

  addJoke(joke: Joke){
    this.jokes.unshift(joke);
  }
  
  deleteJoke(joke: Joke){
    this.jokes.splice(this.jokes.indexOf(joke), 1);
  }
}
