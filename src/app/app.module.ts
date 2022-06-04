import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/projects/calculator/calculator.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TictactoeBoardComponent } from './components/projects/tictactoe/board/board.component';
import { TictactoeSquareComponent } from './components/projects/tictactoe/square/square.component';
import { TictactoeComponent } from './components/projects/tictactoe/tictactoe.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { HomeComponent } from './components/home/home.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SimpleClockComponent } from './components/projects/simple-clock/simple-clock.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ProjectsComponent,
    TictactoeComponent,
    TictactoeBoardComponent,
    TictactoeSquareComponent,
    AboutMeComponent,
    HomeComponent,
    ExperienceComponent,
    SimpleClockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
