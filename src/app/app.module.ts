import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TictactoeBoardComponent } from './components/projects/tictactoe/board/board.component';
import { TictactoeSquareComponent } from './components/projects/tictactoe/square/square.component';
import { TictactoeComponent } from './components/projects/tictactoe/tictactoe.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ProjectsComponent,
    TictactoeComponent,
    TictactoeBoardComponent,
    TictactoeSquareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
