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

  imgDefault: string = "assets\\images\\Tokens\\Frameworks\\Token-Angular-01.png";

  ExpDataModelInterests: ExpDataModel[] = [
    {
      id: 0,
      imgSrc: "assets\\images\\Interests\\stocksChart.png",
      title: "Stock Investing",
      subTitle: "",
      experience: 0,
      article: ""
    },
    {
      id: 1,
      imgSrc: "assets\\images\\Interests\\finance.png",
      title: "Finance & Economics",
      subTitle: "",
      experience: 0,
      article: ""
    },
    {
      id: 2,
      imgSrc: "assets\\images\\Interests\\business.png",
      title: "Business",
      subTitle: "",
      experience: 0,
      article: ""
    },
    {
      id: 3,
      imgSrc: "assets\\images\\Interests\\emotions.png",
      title: "Emotional Wholeness",
      subTitle: "",
      experience: 0,
      article: ""
    },
    {
      id: 4,
      imgSrc: "assets\\images\\Interests\\icon_animation.png",
      title: "Animation",
      subTitle: "",
      experience: 0,
      article: ""
    },
    {
      id: 5,
      imgSrc: "assets\\images\\Interests\\storybook.png",
      title: "Film & Storytelling",
      subTitle: "",
      experience: 0,
      article: ""
    }
  ];

  ExpDataModelHobbies: ExpDataModel[] = [
    {
      id: 0,
      imgSrc: this.imgDefault,
      title: "Electric Bike Riding",
      subTitle: "",
      experience: 0,
      article: ""
    },
    {
      id: 1,
      imgSrc: this.imgDefault,
      title: "Paddleboarding",
      subTitle: "",
      experience: 0,
      article: ""
    },
    {
      id: 2,
      imgSrc: this.imgDefault,
      title: "Pickleball",
      subTitle: "",
      experience: 0,
      article: ""
    },
    {
      id: 3,
      imgSrc: this.imgDefault,
      title: "Exploring New Places",
      subTitle: "",
      experience: 0,
      article: ""
    },
    {
      id: 4,
      imgSrc: this.imgDefault,
      title: "Playing with Legos!",
      subTitle: "",
      experience: 0,
      article: ""
    }
  ];

  //Essentialism
  //Walt Disney: An American Original
  //Creativity, Inc.
  //The 4 Hour Workweek by Tim Ferriss
  //Business Secrets from the Bible by Rabbi Daniel Lapin
  //~SKIP~ Make Your Bed by William H McRaven
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
      imgSrc: this.imgDefault,
      title: "Essentialism",
      subTitle: "by Greg McKeown",
      experience: 0,
      article: ""
    },
    {
      id: 1,
      imgSrc: this.imgDefault,
      title: "Walt Disney: An American Original",
      subTitle: "by Bob Thomas",
      experience: 0,
      article: ""
    },
    {
      id: 2,
      imgSrc: this.imgDefault,
      title: "Creativity, Inc.",
      subTitle: "by Ed Catmull and Amy Wallace",
      experience: 0,
      article: ""
    },
    {
      id: 3,
      imgSrc: this.imgDefault,
      title: "The 4 Hour Workweek",
      subTitle: "by Tim Ferriss",
      experience: 0,
      article: ""
    },
    {
      id: 4,
      imgSrc: this.imgDefault,
      title: "Business Secrets from the Bible",
      subTitle: "by Rabbi Daniel Lapin",
      experience: 0,
      article: ""
    },
    {
      id: 5,
      imgSrc: this.imgDefault,
      title: "My Life and Work",
      subTitle: "by Henry Ford",
      experience: 0,
      article: ""
    },
    {
      id: 6,
      imgSrc: this.imgDefault,
      title: "The Enneagram: A Christian Perspective",
      subTitle: "by Richard Rohr and Andreas Ebert",
      experience: 0,
      article: ""
    },
    {
      id: 7,
      imgSrc: this.imgDefault,
      title: "12 Rules for Life",
      subTitle: "by Jordan B Peterson",
      experience: 0,
      article: ""
    },
    {
      id: 8,
      imgSrc: this.imgDefault,
      title: "Beyond Order: 12 More Rules for Life",
      subTitle: "by Jordan B Peterson",
      experience: 0,
      article: ""
    },
    {
      id: 9,
      imgSrc: this.imgDefault,
      title: "The Brain that Changes Itself",
      subTitle: "by Norman Doidge",
      experience: 0,
      article: ""
    },
    {
      id: 10,
      imgSrc: this.imgDefault,
      title: "Rich Dad Poor Dad",
      subTitle: "by Robert Kiyosaki and Sharon Lechter",
      experience: 0,
      article: ""
    },
    {
      id: 11,
      imgSrc: this.imgDefault,
      title: "The 5 Second Rule",
      subTitle: "by Mel Robbins",
      experience: 0,
      article: ""
    },
    {
      id: 12,
      imgSrc: this.imgDefault,
      title: "Man's Search for Meaning",
      subTitle: "by Viktor Frankl",
      experience: 0,
      article: ""
    },
    {
      id: 13,
      imgSrc: this.imgDefault,
      title: "The Snowball: Warren Buffett and the Business of Life",
      subTitle: "by Alice Schroeder",
      experience: 0,
      article: ""
    },
    {
      id: 14,
      imgSrc: this.imgDefault,
      title: "Never Split the Difference",
      subTitle: "by Chris Voss",
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
  //The Unincorporated Man by Dani Kollin & Eytan Kollin
  //Riyria Revelations by Michael J. Sullivan
    //Theft of Swords
    //Rise of Empire
    //Heir of Novron

  ExpDataModelBooksFiction: ExpDataModel[] = [
    {
      id: 0,
      imgSrc: this.imgDefault,
      title: "The Mistborn Series",
      subTitle: "by Brandon Sanderson",
      experience: 0,
      article: ""
    },
    {
      id: 1,
      imgSrc: this.imgDefault,
      title: "Warbreaker",
      subTitle: "by Brandon Sanderson",
      experience: 0,
      article: ""
    },
    {
      id: 2,
      imgSrc: this.imgDefault,
      title: "The Stormlight Archives",
      subTitle: "by Brandon Sanderson",
      experience: 0,
      article: ""
    },
    {
      id: 3,
      imgSrc: this.imgDefault,
      title: "The Kingkiller Chronicles",
      subTitle: "by Patrick Rothfuss",
      experience: 0,
      article: ""
    },
    {
      id: 4,
      imgSrc: this.imgDefault,
      title: "The Alchemist",
      subTitle: "by Paulo Coelho",
      experience: 0,
      article: ""
    },
    {
      id: 5,
      imgSrc: this.imgDefault,
      title: "The Unincorporated Man",
      subTitle: "by Dani Kollin & Eytan Kollin",
      experience: 0,
      article: ""
    },
    {
      id: 6,
      imgSrc: this.imgDefault,
      title: "Riyria Revelations",
      subTitle: "by Michael J. Sullivan",
      experience: 0,
      article: ""
    }
  ];

  //The Lord of The Rings
    //Fellowship of the Ring
    //The Two Towers
    //Return of the King
  //Star Wars
    //Episode 1
    //Episode 2
    //Episode 3
    //Episode 4
    //Episode 5
    //Episode 6
    //Rogue One
  //Marvel Cinematic Universe
  //Captain America: The Winter Soldier
  //Avengers: Infinity War
  //Avengers: Endgame
  //A Silent Voice
  //Your Name
  //The Incredibles
  //Beauty and the Beast (animated)

  ExpDataModelMovies: ExpDataModel[] = [
    {
      id: 0,
      imgSrc: this.imgDefault,
      title: "The Lord of The Rings",
      subTitle: "directed by Peter Jackson",
      experience: 0,
      article: ""
    },
    {
      id: 1,
      imgSrc: this.imgDefault,
      title: "Star Wars (most of them)",
      subTitle: "Lucasfilm",
      experience: 0,
      article: ""
    },
    {
      id: 2,
      imgSrc: this.imgDefault,
      title: "Captain America: The Winter Soldier",
      subTitle: "Marvel",
      experience: 0,
      article: ""
    },
    {
      id: 3,
      imgSrc: this.imgDefault,
      title: "Avengers: Infinity War & Endgame",
      subTitle: "Marvel",
      experience: 0,
      article: ""
    },
    {
      id: 4,
      imgSrc: this.imgDefault,
      title: "A Silent Voice",
      subTitle: "Kyoto Animation",
      experience: 0,
      article: ""
    },
    {
      id: 5,
      imgSrc: this.imgDefault,
      title: "Your Name",
      subTitle: "directed by Makoto Shinkai",
      experience: 0,
      article: ""
    },
    {
      id: 6,
      imgSrc: this.imgDefault,
      title: "The Incredibles",
      subTitle: "Pixar",
      experience: 0,
      article: ""
    },
    {
      id: 7,
      imgSrc: this.imgDefault,
      title: "Beauty and the Beast (Animated)",
      subTitle: "Disney",
      experience: 0,
      article: ""
    },
    {
      id: 8,
      imgSrc: this.imgDefault,
      title: "Whisper of the Heart",
      subTitle: "Studio Ghibli",
      experience: 0,
      article: ""
    },
    {
      id: 9,
      imgSrc: this.imgDefault,
      title: "Spirited Away",
      subTitle: "Studio Ghibli",
      experience: 0,
      article: ""
    },
    {
      id: 10,
      imgSrc: this.imgDefault,
      title: "Princess Mononoke",
      subTitle: "Studio Ghibli",
      experience: 0,
      article: ""
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
      id: 0,
      imgSrc: this.imgDefault,
      title: "Avatar: The Last Airbender",
      subTitle: "Created by Michael Dante DiMartino, Bryan Konietzko, and Aaron Ehasz",
      experience: 0,
      article: ""
    },
    {
      id: 1,
      imgSrc: this.imgDefault,
      title: "Star Wars: The Clone Wars",
      subTitle: "Lucasfilm",
      experience: 0,
      article: ""
    },
    {
      id: 2,
      imgSrc: this.imgDefault,
      title: "Over the Garden Wall",
      subTitle: "Cartoon Network",
      experience: 0,
      article: ""
    },
    {
      id: 3,
      imgSrc: this.imgDefault,
      title: "The Amazing World of Gumball",
      subTitle: "Cartoon Network",
      experience: 0,
      article: ""
    },
    {
      id: 4,
      imgSrc: this.imgDefault,
      title: "The Simpsons (classic)",
      subTitle: "Created by Matt Groening",
      experience: 0,
      article: ""
    },
    {
      id: 5,
      imgSrc: this.imgDefault,
      title: "Fullmetal Alchemist: Brotherhood",
      subTitle: "Studio Bones",
      experience: 0,
      article: ""
    },
    {
      id: 6,
      imgSrc: this.imgDefault,
      title: "Re:Zero",
      subTitle: "White Fox",
      experience: 0,
      article: ""
    },
    {
      id: 7,
      imgSrc: this.imgDefault,
      title: "Mob Psycho 100",
      subTitle: "Studio Bones",
      experience: 0,
      article: ""
    },
    {
      id: 8,
      imgSrc: this.imgDefault,
      title: "Erased",
      subTitle: "A-1 Pictures",
      experience: 0,
      article: ""
    }
  ];

  //Jesus Christ
  //Jordan Peterson
  //Walt Disney
  //Tim Ferriss
  //Joseph Carlson
  //Chris Voss
  //Kris Vallotton
  //Bill Johnson

  ExpDataModelInfluencers: ExpDataModel[] = [
    {
      id: 0,
      imgSrc: this.imgDefault,
      title: "Jesus Christ",
      subTitle: "Son of God, The Messiah, lots of titles",
      experience: 0,
      article: ""
    },
    {
      id: 1,
      imgSrc: this.imgDefault,
      title: "Jordan B Peterson",
      subTitle: "Psychology Professor, Clinical Psychologist, Philosopher",
      experience: 0,
      article: ""
    },
    {
      id: 2,
      imgSrc: this.imgDefault,
      title: "Walt Disney",
      subTitle: "Founder of The Walt Disney Company and Disney Animation",
      experience: 0,
      article: ""
    },
    {
      id: 3,
      imgSrc: this.imgDefault,
      title: "Tim Ferriss",
      subTitle: "Entepreneur, Lifestyle Guru",
      experience: 0,
      article: ""
    },
    {
      id: 4,
      imgSrc: this.imgDefault,
      title: "Joseph Carlson",
      subTitle: "Finance Influencer, Stock Investor",
      experience: 0,
      article: ""
    },
    {
      id: 5,
      imgSrc: this.imgDefault,
      title: "Chris Voss",
      subTitle: "CEO of The Black Swan Group, FBI Hostage Negotiator",
      experience: 0,
      article: ""
    },
    {
      id: 6,
      imgSrc: this.imgDefault,
      title: "Kris Vallotton",
      subTitle: "Christian Influencer, Senior Leader at Bethel Church",
      experience: 0,
      article: ""
    },
    {
      id: 7,
      imgSrc: this.imgDefault,
      title: "Bill Johnson",
      subTitle: "Christian Influencer, Senior Leader at Bethel Church",
      experience: 0,
      article: ""
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
      id: 0,
      imgSrc: this.imgDefault,
      title: "The Legend of Zelda: Ocarina of Time",
      subTitle: "Nintendo",
      experience: 0,
      article: ""
    },
    {
      id: 1,
      imgSrc: this.imgDefault,
      title: "Undertale",
      subTitle: "Toby Fox",
      experience: 0,
      article: ""
    },
    {
      id: 2,
      imgSrc: this.imgDefault,
      title: "Factorio",
      subTitle: "Wube Software",
      experience: 0,
      article: ""
    },
    {
      id: 3,
      imgSrc: this.imgDefault,
      title: "Psychonauts",
      subTitle: "Double Fine Productions",
      experience: 0,
      article: ""
    },
    {
      id: 4,
      imgSrc: this.imgDefault,
      title: "Star Wars: Battlefront 2 (Classic)",
      subTitle: "LucasArts",
      experience: 0,
      article: ""
    },
    {
      id: 5,
      imgSrc: this.imgDefault,
      title: "Command & Conquer: Generals",
      subTitle: "EA Games",
      experience: 0,
      article: ""
    },
    {
      id: 6,
      imgSrc: this.imgDefault,
      title: "Half-Life 2",
      subTitle: "Valve",
      experience: 0,
      article: ""
    },
    {
      id: 7,
      imgSrc: this.imgDefault,
      title: "Team Fortress 2",
      subTitle: "Valve",
      experience: 0,
      article: ""
    },
    {
      id: 8,
      imgSrc: this.imgDefault,
      title: "Rome: Total War",
      subTitle: "Activision",
      experience: 0,
      article: ""
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
