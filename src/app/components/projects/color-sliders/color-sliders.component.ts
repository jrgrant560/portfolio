import { Component, OnInit } from '@angular/core';

@Component({
  providers: [],
  selector: 'app-color-sliders',
  templateUrl: './color-sliders.component.html',
  styleUrls: [
    './color-sliders.component.css',
    './color-sliders-stylesheets/color-sliders.component.palette-squares.css',
    './color-sliders-stylesheets/color-sliders.component.options.css',
    '../project-rows.css'
  ]
})
export class ColorSlidersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //rgb slider elements
    let rgbRed = document.getElementById("rgbRed") as HTMLInputElement;
    let rgbGreen = document.getElementById("rgbGreen") as HTMLInputElement;
    let rgbBlue = document.getElementById("rgbBlue") as HTMLInputElement;

    //hsl slider elements
    let hslHue = document.getElementById("hslHue") as HTMLInputElement;
    let hslSaturation = document.getElementById("hslSaturation") as HTMLInputElement;
    let hslLight = document.getElementById("hslLight") as HTMLInputElement;

    //hsl paletteSquare elements
    let paletteHslHue = document.getElementById("paletteHslHue")!;
    let paletteHslSaturation = document.getElementById("paletteHslSaturation")!;

    //hex slider elements
    //NOTE FROM DEV: element's value property is a STRING!... -_-
    let hex1 = document.getElementById("hex1") as HTMLInputElement;
    let hex2 = document.getElementById("hex2") as HTMLInputElement;
    let hex3 = document.getElementById("hex3") as HTMLInputElement;
    let hex4 = document.getElementById("hex4") as HTMLInputElement;
    let hex5 = document.getElementById("hex5") as HTMLInputElement;
    let hex6 = document.getElementById("hex6") as HTMLInputElement;

    //hsl paletteSquare elements
    let paletteHex1 = document.getElementById("paletteHex1")!;
    let paletteHex2 = document.getElementById("paletteHex2")!;
    let paletteHex3 = document.getElementById("paletteHex3")!;
    let paletteHex4 = document.getElementById("paletteHex4")!;
    let paletteHex5 = document.getElementById("paletteHex5")!;
    let paletteHex6 = document.getElementById("paletteHex6")!;

    //cmyk slider elements
    let cmykCyan = document.getElementById("cmykCyan") as HTMLInputElement;
    let cmykMagenta = document.getElementById("cmykMagenta") as HTMLInputElement;
    let cmykYellow = document.getElementById("cmykYellow") as HTMLInputElement;
    let cmykBlack = document.getElementById("cmykBlack") as HTMLInputElement;

    //linear gradient slider elements
    let LGAngle = document.getElementById("LGAngle") as HTMLInputElement;
    let LGStop1 = document.getElementById("LGStop1") as HTMLInputElement;
    let LGStop2 = document.getElementById("LGStop2") as HTMLInputElement;
    let LGStop3 = document.getElementById("LGStop3") as HTMLInputElement;

    //linear gradient color select elements
    let LGColor1 = document.getElementById("LGColor1") as HTMLSelectElement;
    let LGColor2 = document.getElementById("LGColor2") as HTMLSelectElement;
    let LGColor3 = document.getElementById("LGColor3") as HTMLSelectElement;

    //radial gradient slider elements
    let RGStop1 = document.getElementById("RGStop1") as HTMLInputElement;
    let RGStop2 = document.getElementById("RGStop2") as HTMLInputElement;
    let RGStop3 = document.getElementById("RGStop3") as HTMLInputElement;
    let RGShineX = document.getElementById("RGShineX") as HTMLInputElement;
    let RGShineY = document.getElementById("RGShineY") as HTMLInputElement;

    //radial gradient color select elements
    let RGColor1 = document.getElementById("RGColor1") as HTMLSelectElement;
    let RGColor2 = document.getElementById("RGColor2") as HTMLSelectElement;
    let RGColor3 = document.getElementById("RGColor3") as HTMLSelectElement;

    //"display" elements
    let displayRGB = document.getElementById("displayRGB")!;
    let displayHSL = document.getElementById("displayHSL")!;
    let displayHex = document.getElementById("displayHex")!;
    let displayCMYK = document.getElementById("displayCMYK")!;
    let displayLinearGradient = document.getElementById("displayLinearGradient")!;
    let displayRadialGradient = document.getElementById("displayRadialGradient")!;

    //display element child article elements
    let displayLinearGradientText = document.getElementById("displayLinearGradientText")!;
    let displayRadialGradientText = document.getElementById("displayRadialGradientText")!;

    // NodeList of all "input" elements
    let inputList = document.querySelectorAll("input");

    // changes "display" element's background whenever input changes
    for (let i = 0; i < inputList.length; i++) {
      inputList[i].addEventListener("input", function () {

        //hex slider values (including alpha conversion)
        let hex1Val = convertHexValue(hex1);
        let hex2Val = convertHexValue(hex2);
        let hex3Val = convertHexValue(hex3);
        let hex4Val = convertHexValue(hex4);
        let hex5Val = convertHexValue(hex5);
        let hex6Val = convertHexValue(hex6);

        //paletteSquares
        paletteHslHue.style.background = "hsl(" + hslHue.value + ", 100%, 50%)";
        paletteHslSaturation.style.backgroundImage = "linear-gradient(90deg, hsl(" + hslHue.value + ", 0%, 50%), hsl(" + hslHue.value + ", 100%, 50%))";

        paletteHex1.style.background = "#" + hex1Val + hex2Val + "0000";
        // paletteHex1.innerText = hex1Val;
        paletteHex2.style.background = "#" + hex1Val + hex2Val + "0000";
        // paletteHex2.innerText = hex2Val;
        paletteHex3.style.background = "#00" + hex3Val + hex4Val + "00";
        // paletteHex3.innerText = hex3Val;
        paletteHex4.style.background = "#00" + hex3Val + hex4Val + "00";
        // paletteHex4.innerText = hex4Val;
        paletteHex5.style.background = "#0000" + hex5Val + hex6Val;
        // paletteHex5.innerText = hex5Val;
        paletteHex6.style.background = "#0000" + hex5Val + hex6Val;
        // paletteHex6.innerText = hex6Val;

        //calculated backgrounds
        let rgbBG = "rgb(" + rgbRed.value + ", " + rgbGreen.value + ", " + rgbBlue.value + ")";
        let hslBG = "hsl(" + hslHue.value + ", " + hslSaturation.value + "%, " + hslLight.value + "%)";
        let hexBG = "#" + hex1Val + hex2Val + hex3Val + hex4Val + hex5Val + hex6Val;
        let lGradientBG = "linear-gradient(" + LGAngle.value + "deg, " + LGColor1.value + " " + LGStop1.value + "%, " + LGColor2.value + " " + LGStop2.value + "%, " + LGColor3.value + " " + LGStop3.value + "%)";
        let rGradientBG = "radial-gradient(ellipse at " + RGShineX.value + "% " + RGShineY.value + "%, " + RGColor1.value + " " + RGStop1.value + "%, " + RGColor2.value + " " + RGStop2.value + "%, " + RGColor3.value + " " + RGStop3.value + "%)";
        let cmykBG = cmykToRgb(parseInt(cmykCyan.value), parseInt(cmykMagenta.value), parseInt(cmykYellow.value), parseInt(cmykBlack.value));

        // changes "display" element's background to calculated bg values
        displayRGB.style.background = rgbBG;
        displayHSL.style.background = hslBG;
        displayHex.style.background = hexBG;
        displayCMYK.style.background = cmykBG;
        displayLinearGradient.style.backgroundImage = lGradientBG;
        displayRadialGradient.style.backgroundImage = rGradientBG;

        //changes "display" element's inner text to reflect the background color
        displayRGB.innerText = rgbBG;
        displayHSL.innerText = hslBG;
        displayHex.innerText = hexBG;
        displayLinearGradientText.innerText = lGradientBG;
        displayRadialGradientText.innerText = rGradientBG;
        displayCMYK.innerText = "cmyk(" + cmykCyan.value + "%, " + cmykMagenta.value + "%, " + cmykYellow.value + "%, " + cmykBlack.value + "%)";;
      });
    }

    // variable that is a list of all "select" elements
    let selectList = document.querySelectorAll("select");

    // changes "display" element's background whenever select changes
    for (let i = 0; i < selectList.length; i++) {
      selectList[i].addEventListener("change", function () {

        //select element text colors
        LGColor1.style.color = LGColor1.value;
        LGColor2.style.color = LGColor2.value;
        LGColor3.style.color = LGColor3.value;
        RGColor1.style.color = RGColor1.value;
        RGColor2.style.color = RGColor2.value;
        RGColor3.style.color = RGColor3.value;

        if (selectList[i].value == "white" || selectList[i].value == "yellow") {
          selectList[i].style.textShadow = "black 0px 0px 3px";
        } else (
          selectList[i].style.textShadow = ""
        )

        //calculated background values
        let lGradientBG = "linear-gradient(" + LGAngle.value + "deg, " + LGColor1.value + " " + LGStop1.value + "%, " + LGColor2.value + " " + LGStop2.value + "%, " + LGColor3.value + " " + LGStop3.value + "%)";
        let rGradientBG = "radial-gradient(ellipse at " + RGShineX.value + "% " + RGShineY.value + "%, " + RGColor1.value + " " + RGStop1.value + "%, " + RGColor2.value + " " + RGStop2.value + "%, " + RGColor3.value + " " + RGStop3.value + "%)";

        // changes "displayGradient" element's background to calculated linearGradient Values
        displayLinearGradient.style.backgroundImage = lGradientBG;
        displayRadialGradient.style.backgroundImage = rGradientBG;

        //changes "displayGradient" element's inner text to reflect the background color
        displayLinearGradientText.innerText = lGradientBG;
        displayRadialGradientText.innerText = rGradientBG;
      });
    }

    //converts hex codes 10-15 into a-f
    function convertHexValue(hex: HTMLInputElement) {
      let checkHexval = hex.value;
      let hexVal = checkHexval;
      switch (checkHexval) {
        case '10':
          hexVal = "a";
          break;
        case '11':
          hexVal = "b";
          break;
        case '12':
          hexVal = "c";
          break;
        case '13':
          hexVal = "d";
          break;
        case '14':
          hexVal = "e";
          break;
        case '15':
          hexVal = "f";
      };
      return hexVal;
    };

    function cmykToRgb(C: number, M: number, Y: number, K: number) {
      var r = 255 * (1 - (C / 100)) * (1 - (K / 100));
      var g = 255 * (1 - (M / 100)) * (1 - (K / 100));
      var b = 255 * (1 - (Y / 100)) * (1 - (K / 100));
      console.log("rgb(" + r + ", " + g + ", " + b + ")");
      return "rgb(" + r + ", " + g + ", " + b + ")";
    }
  }

}
