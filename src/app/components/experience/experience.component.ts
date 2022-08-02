import { Component, OnInit } from '@angular/core';
import { ExpDataModel } from 'src/app/models/exp-data-model/exp-data-model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  // ExpDataModel = new ExpDataModel;
  // ExpDataModels: ExpDataModel[] = [];

  constructor() { }
  // constructor(private outdoorsmanService:OutdoorsmanService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   this.categoryProduct = params['category'];
    //   this.outdoorsmanService.getAllByCategory(this.categoryProduct).subscribe(res => {
    //     this.categoryProducts = res;

    //   })
    // })
  }

  ExpDataModelLanguages: ExpDataModel[] = [
    // {
    //   id: 0,
    //   imgSrc: "assets\\images\\Tokens\\Token-Web-02.png",
    //   title: "HTML, CSS, JavaScript",
    //   article: "I couldn't quite call myself a Full Stack Web Developer without these guys. HTML (HyperText Markup Language) documents are the skeletal building blocks of the World Wide Web. They are made up of elements, which are then styled by... CSS(Cascading Style Sheets), a style language that manipulates the font, colors, layout, and visual effects of HTML elements. JavaScript is the brains of the operation.It is a high- level programming language that runs 98% of front - end web applications, and also runs many backend applications.TypeScript is a derivative of JavaScript that enforces strict syntax. Like most Full - Stack developers, these were the beginning of my web development journey, and these languages make up nearly all projects I have made."
    // },
    {
      id: 0,
      imgSrc: "assets\\images\\Tokens\\Languages\\Token-HTML-01.png",
      title: "HTML",
      article: ""
    },
    {
      id: 1,
      imgSrc: "assets\\images\\Tokens\\Languages\\Token-CSS-01.png",
      title: "CSS",
      article: ""
    },
    {
      id: 2,
      imgSrc: "assets\\images\\Tokens\\Languages\\Token-JavaScript-01.png",
      title: "JavaScript",
      article: ""
    },
    {
      id: 3,
      imgSrc: "assets\\images\\Tokens\\Languages\\Token-CSharp-01.png",
      title: "C Sharp",
      article: 'C Sharp (C#) is a programming language that enforces more strict type declaration than JavaScript, often resulting in cleaner code for its applications. It is one of the languages used by the .NET framework, along with F# and VisualBasic.NET. I was put in charge of making half of the .NET backend for the E-Commerce store "The Outdoorsman", my final group project in Bethel School of Technology.'
    },
    {
      id: 4,
      imgSrc: "assets\\images\\Tokens\\Languages\\Token-SQL-01.png",
      title: "SQL",
      article: "SQL (Structured Query Language) is the most popular database language used for managing relational databases. Relational Databases contain simple tables made up of columns and rows, much like a spreadsheet. Each row has a unique key to identify it, and may also contain keys linking the row to other related tables, therefore being 'relational'. SQL databases are used within, or more safely in conjunction with, most Backend API's. Because of a previous job that required me to use a database system built on SQL, I arguably have the most experience with this language, and I can work with it quite naturally."
    }
  ];


  ExpDataModelFrameworks: ExpDataModel[] = [
    {
      id: 3,
      imgSrc: "assets\\images\\Tokens\\Frameworks\\Token-Angular-01.png",
      title: "Angular",
      article: "Angular is an open-source web framework that is used to compile sleek, highly functional Single-Page Applications (SPA's), which allow clients to download and upload new data on the front end without the need to refresh the application. It utilizes a hierarchical orchestra of components, modules, and services that divide tasks into dedicated documents that communicate with each other and allow for quick edits to specific parts of the application. Angular uses TypeScript as its core programming language. I have the most experience with the Angular framework. This portfolio site is built using Angular, and I have used it for several school and personal projects already, which I have added to the 'Projects' section here."
    },
    {
      id: 4,
      imgSrc: "assets\\images\\Tokens\\Frameworks\\Token-DotNet-01.png",
      title: ".NET",
      article: ".NET is an open-source software framework created by Microsoft. It is capable of compiling web applications using the Model-View-Controller (MVC) architectural pattern. However, the included object-relational mapping tool 'Entity Framework' and the strict requirement for Type declaration makes .NET a a popular choice for building backend Application Programming Interfaces (API's). I was put in charge of making half of the .NET backend for the E-Commerce store 'The Outdoorsman', my final group project in Bethel School of Technology."
    }
  ];

  ExpDataModelLibraries: ExpDataModel[] = [
    {
      id: 5,
      imgSrc: "assets\\images\\Tokens\\Libraries\\Token-nodeJS-03.png",
      title: "Node.js",
      article: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environmentNode.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications."
    },
    {
      id: 6,
      imgSrc: "assets\\images\\Tokens\\Libraries\\Token-p5js-03.png",
      title: "p5.js",
      article: "p5.js is an open-source Javascript library for creative coders that converts a web document into a 'sketchable' canvas. The functions are easy to learn and are made for developers of any experience level to understand and use."
    }
  ];

  ExpDataModelTools: ExpDataModel[] = [
    {
      id: 7,
      imgSrc: "assets\\images\\Tokens\\Tools\\Token-Github-01.png",
      title: "GitHub",
      article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id: 8,
      imgSrc: "assets\\images\\Tokens\\Tools\\Token-AWS-01.png",
      title: "Amazon Web Services",
      article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }

  ];

  ExpDataModelSkills: ExpDataModel[] = [
    {
      id: 9,
      imgSrc: "assets\\images\\Tokens\\Other\\Token-Adobe Illustrator-01.png",
      title: "Graphic Design (Adobe Illustrator)",
      article: "I received Graphic Design training for all Adobe Products, primarily Adobe Illustrator, at Butte College in Oroville, California. I have mostly used Adobe Illustrator for personal projects, but have used it professionally for contracted design work with Alternative Energy Systems and designing various graphics in use on this portfolio site. My intuitive understanding of vector graphics, geometric equations, and coordinate systems enables me to add appealing graphic touches to all of my digital work, as well as work easily with other design teams."
    },
    {
      id: 10,
      imgSrc: "assets\\images\\Tokens\\Other\\Token-GSuite-01.png",
      title: "Google Suite",
      article: "I have been using the Google Suite for a large variety of personal and professional tasks for 7 years (13 years if you include Gmail). I am well-versed with all the popular products: Docs, Sheets, Drive, Meet, Calendar, Slides, etc. When working for a previous employer, I used the dynamic formatting and cloud features of Google Sheets to create a live task chart system for tracking the status of pending equipment deliveries, as well as multiple workflow charts to break down complex administrative responsibilities. I also use Google Sheets every week for my rather complex personal budgeting system."
    },
    {
      id: 11,
      imgSrc: "assets\\images\\Tokens\\Other\\Token-MSOffice-01.png",
      title: "Microsoft Office",
      article: "Like many people my age, I've been using Microsoft Word and Excel since Elementary School. For a previous employer, I became very familiar with Microsoft Outlook, and much more skilled with Word and Excel, using them for complex reports and Sales Materials. I have also done occasional projects with PowerPoint for my church."
    }
  ];
  
  ExpDataModelSchools: ExpDataModel[] = [
    {
      id: 12,
      imgSrc: "assets\\images\\Tokens\\Other\\Token-BethelTech-01.png",
      title: "Bethel School of Technology",
      article: "Bethel School of Technology is a first-of-its-kind faith-based coding bootcamp that equips believers with the most in-demand and hireable technology skills. My focus of study was Full Stack Web Development, with exposure to GitHub, Agile/SCRUM Methodologies, and Web Security Principles. In less than a year, I am not only familiar with the core concepts of computer programming, but am falling in love with the practice, the people, and the industry. And it is all connected to a life-long desire to serve others with excellence and whole-heartedness, to the best of my ability."
    },
    {
      id: 13,
      imgSrc: "assets\\images\\Tokens\\Other\\Token-ButteCollege-01.png",
      title: "Butte College",
      article: "Butte College is a world-class community college nestled in the golden hills of Northern California. Their diverse, engaging curriculum allows their students to sharpen their interests into profitable skills in the arts, sciences, and the trades. During my time here, I excelled in a variety of classes focused on the digital and photographic arts, gaining a proficiency in Adobe Products and the Google Suite, as well as an appreciation for all things well-crafted. It was in these classrooms that I realized I'm capable of making great things."
    }
  ];

  ExpDataModelEmployers: ExpDataModel[] = [
    {
      id: 14,
      imgSrc: "assets\\images\\Tokens\\Other\\Token-WBP-01.png",
      title: "Western Business Products",
      article: "Western Business Products is a small, family-owned company that performs equipment repair and related software services. As Director of Operations, my top 2 priorities were ensuring that the Technicians were equipped to respond to service calls within 4 hours, and the Owner is free to focus only on the highest value decisions, rather than daily operations. My daily tasks changed frequently depending on what was needed, requiring me to welcome interruptions while still maintaining my routine responsibilities, pursuing missing information, and tackling unusual problems as they arose. During my time in this position, I created a live task chart system for tracking the status of pending equipment deliveries, which streamlined communication between departments and drastically reduced the need for the Owner's oversight. I also wrote the company's first Admin Support Guide, explaining the goals of the Admin Department and how to perform complex functions and uncommon scenarios."
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
dropDownButtonClick(dropDownId: string, dropDownIconId:string) {
  this.unExpandAll();
  this.setExpanded(dropDownId, dropDownIconId);
}

// performs swap-related functions when the button is clicked
swapButtonClick(swapId: string) {
  this.setAllSwapsInvisible();
  this.setSwapVisible(swapId);
}

}
