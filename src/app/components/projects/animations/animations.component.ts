import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css', './animations.component.bounceBall.css', './animations.component.travelCircle.css']
})
export class AnimationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  setOpacity100(id: string) {
    let element = document.querySelector(id) as HTMLElement;
    element.style.opacity='100%';
  }

  setOpacity75(id: string) {
    let element = document.querySelector(id) as HTMLElement;
    element.style.opacity='75%';
  }
}
