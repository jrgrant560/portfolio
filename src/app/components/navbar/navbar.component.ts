import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public breakpointObserver: BreakpointObserver
    // public router: Router
  ) { }

  ngOnInit() {
    const homeNavButtons = Array.from(document.getElementsByClassName('home')) as HTMLElement[];

    //set home nav buttons to active styling when loading navbar
    homeNavButtons.forEach(homeNavButton => {
      homeNavButton.style.color = '#3e3f3a';
      homeNavButton.style.backgroundColor = '#fff';
    })

    const HBnavBtnGroup = document.querySelector('.btnGroupHB') as HTMLElement;

    //monitors viewport breakpoints and runs code if the observed viewpoint is reached
    this.breakpointObserver
      .observe(['(min-width: 768px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          //slides over HB nav menu if the breakpoint leaves mobile view, if it is in view
          if (HBnavBtnGroup.style.left == '0px') {
            this.navSlideOver();
          }
        } else {

        }
      });
  }

  //slides over primary navbar
  navSlideOver() {
    const navbarBtnGroupHB = document.querySelector('#navbarPrimary>.btnGroupHB') as HTMLElement;
    const navCover = document.getElementById('navCover') as HTMLElement;

    if (navbarBtnGroupHB.style.left == '0px') {
      navbarBtnGroupHB.style.left = '-350px';
      navCover.style.width = '0vw';
    } else {
      navbarBtnGroupHB.style.left = '0px';
      navCover.style.width = '100%';
    }
  }

  //closes the HB nav Menu if it is open
  closeHBnavMenu() {
    const HBnavBtnGroup = document.querySelector('.btnGroupHB') as HTMLElement;

    //monitors viewport breakpoints and runs code if the observed viewpoint is reached
    this.breakpointObserver
      .observe(['(max-width: 768px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          if (HBnavBtnGroup.style.left == '0px') {
            this.navSlideOver();
          }
        } else {

        }
      });
  }

  // resets colors on HB menu buttons
  resetNavButtons() {
    const navButtons = Array.from(document.getElementsByClassName('buttonRouterNav')) as HTMLElement[];

    navButtons.forEach(navButton => {
      navButton.style.removeProperty('color');
      navButton.style.removeProperty('background-color');
    })
  }

  // changes style of target HBnavButton
  navButtonSelected(targetButtons: string) {
    this.resetNavButtons();

    const selectedNavButtons = Array.from(document.getElementsByClassName(targetButtons)) as HTMLElement[];

    selectedNavButtons.forEach(selectedNavButton => {
      selectedNavButton.style.backgroundColor = '#fff';

      if (selectedNavButton.classList.contains('contact')) {
        selectedNavButton.style.color = '#29abe0';
      } else {
        selectedNavButton.style.color = '#3e3f3a';
      }
    })

    this.closeHBnavMenu();
  }

}
