import { Component, OnInit } from '@angular/core';
import { ExpDataModel } from 'src/app/models/exp-data-model/exp-data-model';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ExpDataModelInterests: ExpDataModel[] = [
    {
      id: 0,
      imgSrc: "assets\\images\\Interests\\stocksChart.png",
      title: "Stock Investing",
      experience: 0,
      article: ""
    },
    {
      id: 1,
      imgSrc: "assets\\images\\Interests\\finance.png",
      title: "Finance & Economics",
      experience: 0,
      article: ""
    },
    {
      id: 2,
      imgSrc: "assets\\images\\Interests\\business.png",
      title: "Business",
      experience: 0,
      article: ""
    },
    {
      id: 3,
      imgSrc: "assets\\images\\Interests\\emotions.png",
      title: "Emotional Wholeness",
      experience: 0,
      article: ""
    },
    {
      id: 4,
      imgSrc: "assets\\images\\Tokens\\Languages\\Token-JavaScript-01.png",
      title: "Animation",
      experience: 0,
      article: ""
    },
    {
      id: 5,
      imgSrc: "assets\\images\\Tokens\\Languages\\Token-JavaScript-01.png",
      title: "Storytelling",
      experience: 0,
      article: ""
    }
  ];

  ExpDataModelHobbies: ExpDataModel[] = [
    {
      id: 0,
      imgSrc: "assets\\images\\Tokens\\Languages\\Token-JavaScript-01.png",
      title: "Electric Bike Riding",
      experience: 0,
      article: ""
    },
    {
      id: 1,
      imgSrc: "assets\\images\\Tokens\\Languages\\Token-JavaScript-01.png",
      title: "Paddleboarding",
      experience: 0,
      article: ""
    },
    {
      id: 2,
      imgSrc: "assets\\images\\Tokens\\Languages\\Token-JavaScript-01.png",
      title: "Pickleball",
      experience: 0,
      article: ""
    },
    {
      id: 3,
      imgSrc: "assets\\images\\Tokens\\Languages\\Token-JavaScript-01.png",
      title: "Exploring New Places",
      experience: 0,
      article: ""
    },
    {
      id: 4,
      imgSrc: "assets\\images\\Tokens\\Languages\\Token-JavaScript-01.png",
      title: "Legos!",
      experience: 0,
      article: ""
    }
  ];

  //Essentialism
  //Walt Disney: An American Original
  //Creativity, Inc.
  //The 4 Hour Workweek by Tim Ferriss
  //Business Secrets from the Bible by Rabbi Daniel Lapin
  //Make Your Bed by William H McRaven
  //My Life and Work by Henry Ford
  //The Enneagram: A Christian Perspective
  //12 Rules for Life
  //Beyond Order: 12 More Rules for Life
  //The Brain that Changes Itself
  //Rich Dad Poor Dad
  //The 5 Second Rule by Mel Robbins
  //Man's Search for Meaning
  //The Snowball: Warren Buffett and the Business of Life by Alice Schroeder
  //Never Split the Difference by Chris Voss

  ExpDataModelBooksNonfiction: ExpDataModel[] = [
    {
      id: 0,
      imgSrc: "assets\\images\\Tokens\\Languages\\Token-JavaScript-01.png",
      title: "Essentialism by Greg McKeown",
      experience: 0,
      article: ""
    },
    {
      id: 1,
      imgSrc: "assets\\images\\Tokens\\Languages\\Token-JavaScript-01.png",
      title: "Walt Disney: An American Original by Bob Thomas",
      experience: 0,
      article: ""
    },
    {
      id: 2,
      imgSrc: "assets\\images\\Tokens\\Languages\\Token-JavaScript-01.png",
      title: "Creativity, Inc.",
      experience: 0,
      article: ""
    },
    {
      id: 3,
      imgSrc: "assets\\images\\Tokens\\Languages\\Token-JavaScript-01.png",
      title: "Never Split the Difference",
      experience: 0,
      article: ""
    }
  ];

  //The Mistborn Series by Brandon Sanderson
    //The Final Empire
    //The Well of Ascension
    //The Hero of Ages
    //The Alloy of Law
    //The Shadows of Self
    //The Bands of Mourning
  //Warbreaker by Brandon Sanderson
  //The Stormlight Archives by Brandon Sanderson
    //The Way of Kings
    //Words of Radiance
    //Oathbringer
    //Rhythm of War
  //The Kingkiller Chronicles by Patrick Rothfuss
    //The Name of the Wind
    //The Wise Man's Fear
  //The Alchemist by Paulo Coelho
  //The Rithmatist by Brandon Sanderson
  //The Unincorporated Man by Dani Kollin & Eytan Kollin
  //Riyria Revelations by Michael J. Sullivan
    //Theft of Swords
    //Rise of Empire
    //Heir of Novron

  ExpDataModelBooksFiction: ExpDataModel[] = [
    {
      id: 3,
      imgSrc: "assets\\images\\Tokens\\Frameworks\\Token-Angular-01.png",
      title: "Angular",
      experience: 0,
      article: "Angular is an open-source web framework that is used to compile sleek, highly functional Single-Page Applications (SPA's), which allow clients to download and upload new data on the front end without the need to refresh the application. It utilizes a hierarchical orchestra of components, modules, and services that divide tasks into dedicated documents that communicate with each other and allow for quick edits to specific parts of the application. Angular uses TypeScript as its core programming language. I have the most experience with the Angular framework. This portfolio site is built using Angular, and I have used it for several school and personal projects already, which I have added to the 'Projects' section here."
    }
  ];

  //The Lord of The Rings
    //Fellowship of the Ring
    //The Two Towers
    //Return of the King
  //Marvel Cinematic Universe
    //Captain America: The Winter Soldier
    //Avengers: Infinity War
    //Avengers: Endgame
  //A Silent Voice
  //Your Name
  //The Incredibles
  //Beauty and the Beast (animated)
  //Star Wars
    //Episode 1
    //Episode 2
    //Episode 3
    //Episode 4
    //Episode 5
    //Episode 6
    //Rogue One

  ExpDataModelMovies: ExpDataModel[] = [
    {
      id: 3,
      imgSrc: "assets\\images\\Tokens\\Frameworks\\Token-Angular-01.png",
      title: "Angular",
      experience: 0,
      article: "Angular is an open-source web framework that is used to compile sleek, highly functional Single-Page Applications (SPA's), which allow clients to download and upload new data on the front end without the need to refresh the application. It utilizes a hierarchical orchestra of components, modules, and services that divide tasks into dedicated documents that communicate with each other and allow for quick edits to specific parts of the application. Angular uses TypeScript as its core programming language. I have the most experience with the Angular framework. This portfolio site is built using Angular, and I have used it for several school and personal projects already, which I have added to the 'Projects' section here."
    }
  ];

  //Avatar: The Last Airbender
  //Star Wars: The Clone Wars
  //Erased
  //Fullmetal Alchemist: Brotherhood
  //Re:Zero
  //Mob Psycho 100
  //Over the Garden Wall
  //The Amazing World of Gumball

  ExpDataModelShows: ExpDataModel[] = [
    {
      id: 3,
      imgSrc: "assets\\images\\Tokens\\Frameworks\\Token-Angular-01.png",
      title: "Angular",
      experience: 0,
      article: "Angular is an open-source web framework that is used to compile sleek, highly functional Single-Page Applications (SPA's), which allow clients to download and upload new data on the front end without the need to refresh the application. It utilizes a hierarchical orchestra of components, modules, and services that divide tasks into dedicated documents that communicate with each other and allow for quick edits to specific parts of the application. Angular uses TypeScript as its core programming language. I have the most experience with the Angular framework. This portfolio site is built using Angular, and I have used it for several school and personal projects already, which I have added to the 'Projects' section here."
    }
  ];

  //Jesus Christ
  //Jordan Peterson
  //Walt Disney
  //Tim Ferriss
  //Joseph Carlson
  //Chris Voss
  //Kris Vallotton

  ExpDataModelInfluencers: ExpDataModel[] = [
    {
      id: 1,
      imgSrc: "assets\\images\\Tokens\\Frameworks\\Token-Angular-01.png",
      title: "Angular",
      experience: 0,
      article: "Angular is an open-source web framework that is used to compile sleek, highly functional Single-Page Applications (SPA's), which allow clients to download and upload new data on the front end without the need to refresh the application. It utilizes a hierarchical orchestra of components, modules, and services that divide tasks into dedicated documents that communicate with each other and allow for quick edits to specific parts of the application. Angular uses TypeScript as its core programming language. I have the most experience with the Angular framework. This portfolio site is built using Angular, and I have used it for several school and personal projects already, which I have added to the 'Projects' section here."
    }
  ];

  //The Legend of Zelda: Ocarina of Time
  //Undertale
  //Factorio
  //Psychonauts
  //Star Wars: Battlefront 2 (Classic)
  //Command & Conquer: Generals
  //Half-Life 2
  //Team Fortress 2
  //Rome: Total War

  ExpDataModelVideogames: ExpDataModel[] = [
    {
      id: 1,
      imgSrc: "assets\\images\\Tokens\\Frameworks\\Token-Angular-01.png",
      title: "Angular",
      experience: 0,
      article: "Angular is an open-source web framework that is used to compile sleek, highly functional Single-Page Applications (SPA's), which allow clients to download and upload new data on the front end without the need to refresh the application. It utilizes a hierarchical orchestra of components, modules, and services that divide tasks into dedicated documents that communicate with each other and allow for quick edits to specific parts of the application. Angular uses TypeScript as its core programming language. I have the most experience with the Angular framework. This portfolio site is built using Angular, and I have used it for several school and personal projects already, which I have added to the 'Projects' section here."
    }
  ];  

  // adds "expanded" class to all "expandable" elements; adds "iconFlipped" class from all "iconFlipped" elements
  expandAll() {
    // selects all "expandable" elements
    let expandableSectionsCollection = document.getElementsByClassName("expandable");

    // converts collection of expandable elements to an array
    let expandableSectionsArray = Array.from(expandableSectionsCollection);

    // runs through each expandable element in the array, then adds the "expanded" class
    expandableSectionsArray.map(expandableSection => {
      expandableSection.classList.add("expanded");
    });

    // selects all "dropDownIcon" elements
    let dropDownIconsCollection = document.getElementsByClassName("dropDownIcon");

    // converts collection of dropDownIcon elements to an array
    let dropDownIconsArray = Array.from(dropDownIconsCollection);

    // runs through each dropDownIcon element in the array, then adds the "iconFlipped" class
    dropDownIconsArray.map(dropDownIcon => {
      dropDownIcon.classList.add("iconFlipped");
    });
  };

  // removes "expanded" class from all "expandable" elements; removes "iconFlipped" class from all "iconFlipped" elements
  unExpandAll() {
    // selects all "expandable" elements
    let expandableSectionsCollection = document.getElementsByClassName("expandable");

    // converts collection of expandable elements to an array
    let expandableSectionsArray = Array.from(expandableSectionsCollection);

    // runs through each expandable element in the array, then removes the "expanded" class
    expandableSectionsArray.map(expandableSection => {
      expandableSection.classList.remove("expanded");
    });

    // selects all "dropDownIcon" elements
    let dropDownIconsCollection = document.getElementsByClassName("dropDownIcon");

    // converts collection of dropDownIcon elements to an array
    let dropDownIconsArray = Array.from(dropDownIconsCollection);

    // runs through each dropDownIcon element in the array, then removes the "iconFlipped" class
    dropDownIconsArray.map(dropDownIcon => {
      dropDownIcon.classList.remove("iconFlipped");
    });
  };

  // adds "expandable" class to target element
  setExpanded(dropDownId: string, dropDownIconId: string) {
    //variable for parameter element dropDownId
    let elementDropDown = document.getElementById(dropDownId);
    // adds "expanded" class
    elementDropDown?.classList.add("expanded");

    //variable for parameter element dropDownIconId
    let elementDropDownIcon = document.getElementById(dropDownIconId);
    // adds "expanded" class
    elementDropDownIcon?.classList.add("iconFlipped");
  };

  // removes "nowVisible" class from all "swappable" elements
  setAllSwapsInvisible() {
    // selects all "swappable" elements
    let swappableSectionsCollection = document.getElementsByClassName("swappable");

    // converts collection of swappable elements to an array
    let swappableSectionsArray = Array.from(swappableSectionsCollection);

    // runs through each swappable element in the array, then removes the "nowVisible" class
    swappableSectionsArray.map(swappableSection => {
      swappableSection.classList.remove("nowVisible");
    });
  };

  // adds "nowVisible" class to target element
  setSwapVisible(swapId: string) {
    //variable for parameter element
    let element = document.getElementById(swapId);
    // adds "nowVisible" class
    element?.classList.add("nowVisible");
  }

  // performs expansion-related functions when the button is clicked
  dropDownButtonClick(dropDownId: string, dropDownIconId: string) {
    this.unExpandAll();
    this.setExpanded(dropDownId, dropDownIconId);
  }

  // performs swap-related functions when the button is clicked
  swapButtonClick(swapId: string) {
    this.setAllSwapsInvisible();
    this.setSwapVisible(swapId);
  }

}
