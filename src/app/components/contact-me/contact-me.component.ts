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
    console.log(copyItem.innerText);
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyItem.innerText);
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
