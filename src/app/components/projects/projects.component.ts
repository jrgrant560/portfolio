import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  reNavA() {
    window.location.href = "https://jrgrant560.github.io/Final-Project_The-Outdoorsman";
  }
}
