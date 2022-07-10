import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
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
  },
  {
    path: "contactMe",
    component: ContactMeComponent
  },
  {
    path: "blog",
    component:BlogComponent
  },
  {
    path: "blog/:blogId",
    component:BlogPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
