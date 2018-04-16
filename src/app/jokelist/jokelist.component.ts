import { Component, OnInit, ViewChild, ViewChildren, QueryList, ElementRef,ContentChildren, ContentChild, AfterContentInit, AfterViewInit } from '@angular/core';
import { Joke } from './../joke';
import { JokeComponent } from '../joke/joke.component';

@Component({
  selector: 'app-jokelist',
  templateUrl: './jokelist.component.html',
  styleUrls: ['./jokelist.component.css']
})
export class JokelistComponent implements OnInit, AfterContentInit, AfterViewInit {

  @ViewChild(JokeComponent) jokeViewChild: JokeComponent;
  @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>;
  @ViewChild("header") headerEl: ElementRef;
  @ContentChild(JokeComponent) jokeContentChild: JokeComponent;

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

    console.log(`new - jokeViewChild is ${this.jokeViewChild}`);
    
  }

  ngOnInit() {
  }

  addJoke(joke: Joke){
    this.jokes.unshift(joke);
  }
  
  deleteJoke(joke: Joke){
    this.jokes.splice(this.jokes.indexOf(joke), 1);
  }

  ngAfterViewInit() {
    console.log(`ngAfterViewInit - jokeViewChild is`, this.jokeViewChild);
    let jokes: JokeComponent[] = this.jokeViewChildren.toArray();  
    console.log(jokes);
    console.log(`ngAfterViewInit - headerEl is ${this.headerEl}`);
    //noinspection TypeScriptUnresolvedVariable
    this.headerEl.nativeElement.textContent = "Best Joke Machine";
  }

  ngAfterContentInit() { 
    console.log(`ngAfterContentInit - jokeContentChild is`, this.jokeContentChild);
  }
}
