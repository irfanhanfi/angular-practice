import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import { JokelistComponent } from './jokelist/jokelist.component';
import { JokeFormComponent } from './joke-form/joke-form.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';


@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    JokelistComponent,
    JokeFormComponent,
    CarouselComponent,
    CarouselItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
