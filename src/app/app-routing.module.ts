import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  { 
    path: "",
    component: HomeComponent
  },
  {
    path: "projects",
    component: ProjectsComponent
  },
  {
    path: "aboutme",
    component:AboutMeComponent
  },
  {
    path: "experience",
    component:ExperienceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
