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
    {
      id: 0,
      imgSrc: "assets\\images\\Tokens\\Token-Web-02.png",
      title: "HTML, CSS, JavaScript",
      article: "I couldn't quite call myself a Full Stack Web Developer without these guys. HTML (HyperText Markup Language) documents are the skeletal building blocks of the World Wide Web. They are made up of elements, which are then styled by... CSS(Cascading Style Sheets), a style language that manipulates the font, colors, layout, and visual effects of HTML elements. JavaScript is the brains of the operation.It is a high- level programming language that runs 98% of front - end web applications, and also runs many backend applications.TypeScript is a derivative of JavaScript that enforces strict syntax. Like most Full - Stack developers, these were the beginning of my web development journey, and these languages make up nearly all projects I have made."
    },
    {
      id: 1,
      imgSrc: "assets\\images\\Tokens\\Languages\\Token-CSharp-01.png",
      title: "C Sharp",
      article: 'C Sharp (C#) is a programming language that enforces more strict type declaration than JavaScript, often resulting in cleaner code for its applications. It is one of the languages used by the .NET framework, along with F# and VisualBasic.NET. I was put in charge of making half of the .NET backend for the E-Commerce store "The Outdoorsman", my final group project in Bethel School of Technology.'
    },
    {
      id: 2,
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

  ExpDataModelTools: ExpDataModel[] = [
    {
      id: 5,
      imgSrc: "assets\\images\\Tokens\\Tools\\Token-Github-01.png",
      title: "GitHub",
      article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id: 6,
      imgSrc: "assets\\images\\Tokens\\Tools\\Token-AWS-01.png",
      title: "Amazon Web Services",
      article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }

  ];

  ExpDataModelSkills: ExpDataModel[] = [
    {
      id: 7,
      imgSrc: "assets\\images\\Tokens\\Other\\Token-Adobe Illustrator-01.png",
      title: "Graphic Design with Adobe Illustrator",
      article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id: 8,
      imgSrc: "assets\\images\\Tokens\\Other\\Token-GSuite-01.png",
      title: "Google Suite",
      article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id: 9,
      imgSrc: "assets\\images\\Tokens\\Other\\Token-MSOffice-01.png",
      title: "Microsoft Office",
      article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];
  
  ExpDataModelSchools: ExpDataModel[] = [
    {
      id: 10,
      imgSrc: "assets\\images\\Tokens\\Other\\Token-BethelTech-01.png",
      title: "Bethel School of Technology",
      article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id: 11,
      imgSrc: "assets\\images\\Tokens\\Other\\Token-ButteCollege-01.png",
      title: "Butte College",
      article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];

  ExpDataModelEmployers: ExpDataModel[] = [
    {
      id: 12,
      imgSrc: "assets\\images\\Tokens\\Tools\\Token-WBP-01.png",
      title: "Western Business Products",
      article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];

}
