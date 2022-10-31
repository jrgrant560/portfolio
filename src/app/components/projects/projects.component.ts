import { Component, OnInit } from '@angular/core';
import { AnimationsComponent } from './animations/animations.component';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  providers: [AnimationsComponent],
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(
    private AnimationsComponent: AnimationsComponent,
    public breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
    const projectNavMenu = document.getElementById('projectNav') as HTMLElement;

    //monitors viewport breakpoints and runs code if the observed viewpoint is reached
    this.breakpointObserver
      .observe(['(min-width: 768px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          //slides over HB nav menu if the breakpoint leaves mobile view, if it is in view
          if (projectNavMenu.style.left == '16px') {
            this.navSlideOver();

          }
        } else {

        }
      });
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

  //slides over HB navbar
  navSlideOver() {
    const projectNavMenu = document.getElementById('projectNav') as HTMLElement;
    const projectNavCover = document.getElementById('projectNavCover') as HTMLElement;

    if (projectNavMenu.style.left == '16px') {
      projectNavMenu.style.left = '-260px';
      projectNavCover.style.width = '0vw';
    } else {
      projectNavMenu.style.left = '16px';
      projectNavCover.style.width = '100%';

    }
  }

  //only runs navSlideOver() if the breakpoint is within mobile view
  navMenuHide() {
    if (this.breakpointObserver.isMatched(['(max-width: 768px)'])) {
      this.navSlideOver()
    }
  }
}
