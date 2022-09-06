import { Component, OnInit } from '@angular/core';
import { AnimationsComponent } from './animations/animations.component';

@Component({
  providers: [AnimationsComponent],
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css', './project-rows.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private AnimationsComponent: AnimationsComponent) { }

  ngOnInit(): void {
  }

  reNavA() {
    window.location.href = "https://jrgrant560.github.io/Final-Project_The-Outdoorsman";
  }

  // removes "projectVisible" class from all "project-container" elements
  hideAllProjects() {
    // selects all "project-container" elements
    let projectContainersCollection = document.getElementsByClassName("project-container");

    // converts collection of project-container elements to an array
    let projectsContainersArray = Array.from(projectContainersCollection);

    // runs through each project-container element in the array, then removes the "projectVisible" class
    projectsContainersArray.map(projectContainer => {
      projectContainer.classList.remove("projectVisible");
    });
  }

  // removes "projectNavExpanded" class from "projectNav" element
  minimizeNavBar() {
    // selects "projectNav" element
    let projectNavbar = document.getElementById("projectNav")!;
    // removes "projectNavExpanded" class from "projectNav" element
    projectNavbar.classList.remove("projectNavExpanded");
  }

  // adds "projectVisible" class to target element
  setProjectVisible(projectId: string) {
    //variable for parameter element
    let projectContainer = document.getElementById(projectId);
    // adds "projectVisible" class
    projectContainer?.classList.add("projectVisible");
  }

  // performs expansion-related functions when the button is clicked
  revealProject(projectId: string) {
    this.hideAllProjects();
    this.minimizeNavBar();
    this.setProjectVisible(projectId);
  }

  // adds "projectNavExpanded" class to "projectNav" element
  maximizeNavBar() {
    // selects "projectNav" element
    let projectNavbar = document.getElementById("projectNav")!;
    // adds "projectNavExpanded" class to "projectNav" element
    projectNavbar.classList.add("projectNavExpanded");
  }

  loadBouncingBalls() {
    this.AnimationsComponent.loadBouncingBalls();
  }
}
