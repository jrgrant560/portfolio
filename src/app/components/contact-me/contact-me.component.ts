import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  /* Get the input text field */
  // inputGet: HTMLInputElement = document.getElementById("myInput")! as HTMLInputElement;

  /* Tooltip for the copied text */
  // tooltip = document.getElementById("myTooltip")!;

  constructor() {
  }

  ngOnInit(): void {
    
  }

  copyEmail() {
    /* Get the text field */
    let copyItem= document.getElementById("myEmail")!;
  
    /* Select the text field */
    // copyEmail.select();
    // copyEmail.setSelectionRange(0, 99999); /* For mobile devices */
     /* Copy the text inside the text field */
    navigator.clipboard.writeText('jrgrant560@gmail.com');
    this.alertEmailCopied();
  }

  alertEmailCopied() {
    let emailAlertBox = document.querySelector('#emailAlertBox') as HTMLElement;
    emailAlertBox.style.opacity = '100%';
    setTimeout(function () {
      emailAlertBox.style.opacity = '0%';
    }, 2000)
  }

  //sets target element display to block
  revealMe(elementTarg: string) {
    let element = document.querySelector(elementTarg) as HTMLElement;
    element.style.display = 'block';
  }

  //sets target element display to none
  hideMe(elementTarg: string) {
    let element = document.querySelector(elementTarg) as HTMLElement;
    element.style.display = 'none';
  }



  // copyLinkedIn() {
  //   /* Get the text field */
  //   let copyItem= document.getElementById("myLinkedIn")!;
  
  //   /* Select the text field */
  //   // copyEmail.select();
  //   // copyEmail.setSelectionRange(0, 99999); /* For mobile devices */
  //   console.log(copyItem.innerText);
  //    /* Copy the text inside the text field */
  //   navigator.clipboard.writeText(copyItem.innerText);
  // }

  // copyGitHub() {
  //   /* Get the text field */
  //   let copyItem= document.getElementById("myGitHub")!;
  
  //   /* Select the text field */
  //   // copyEmail.select();
  //   // copyEmail.setSelectionRange(0, 99999); /* For mobile devices */
  //   console.log(copyItem.innerText);
  //    /* Copy the text inside the text field */
  //   navigator.clipboard.writeText(copyItem.innerText);
  // }
}
