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
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';

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
    SimpleClockComponent,
    UnderConstructionComponent,
    BlogComponent,
    BlogPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
