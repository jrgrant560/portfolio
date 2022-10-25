import { Component, OnInit } from '@angular/core';
import { GlobalFunctionsService } from 'src/app/services/global-functions.service';

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

  constructor(
    private globalFuncs: GlobalFunctionsService
  ) { }

  //global functions
  revealMe(elementTarg: string) { this.globalFuncs.revealMe(elementTarg) };
  hideMe(elementTarg: string) { this.globalFuncs.hideMe(elementTarg) };
  copyMe(text: string) { this.globalFuncs.copyMe(text) };

  ngOnInit(): void {

  }

  alertEmailCopied() {
    let emailAlertBox = document.querySelector('#emailAlertBox') as HTMLElement;
    emailAlertBox.style.opacity = '100%';
    setTimeout(function () {
      emailAlertBox.style.opacity = '0%';
    }, 2000)
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
