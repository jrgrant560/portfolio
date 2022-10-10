import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';

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
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { ContactFooterComponent } from './components/contact-me/contact-footer/contact-footer.component';
import { ContactButtonComponent } from './components/contact-me/contact-button/contact-button.component';
import { InterestsComponent } from './components/interests/interests.component';
import { ClocksAnalogComponent } from './components/projects/clocks-analog/clocks-analog.component';
import { ClocksDigitalComponent } from './components/projects/clocks-digital/clocks-digital.component';
import { AnimationsComponent } from './components/projects/animations/animations.component';
import { ColorSlidersComponent } from './components/projects/color-sliders/color-sliders.component';
import { ColorGradientSlidersComponent } from './components/projects/color-gradient-sliders/color-gradient-sliders.component';
import { ScreensaverComponent } from './components/projects/animations/screensaver/screensaver.component';
import { AnimationBarberpoleComponent } from './components/projects/animations/animation-barberpole/animation-barberpole.component';
import { EyeballComponent } from './components/projects/animations/eyeball/eyeball.component';
import { AnimationTypingComponent } from './components/projects/animations/animation-typing/animation-typing.component';
import { NavbarComponent } from './components/navbar/navbar.component';

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
    BlogPageComponent,
    ContactMeComponent,
    ContactFooterComponent,
    ContactButtonComponent,
    InterestsComponent,
    ClocksAnalogComponent,
    ClocksDigitalComponent,
    AnimationsComponent,
    ColorSlidersComponent,
    ColorGradientSlidersComponent,
    ScreensaverComponent,
    AnimationBarberpoleComponent,
    EyeballComponent,
    AnimationTypingComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
