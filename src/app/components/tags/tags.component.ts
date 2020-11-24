import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags:any[]=[];
  constructor() { 
    this.tags = [
      {label:'C#'},
      {label:'.NET'},
      {label:'ASP.NET MVC'},
      {label:'ASP.NET Core'},
      {label:'WEB API'},
      {label:'Rest'},
      {label:'AWS Serverless Architecture'},
      {label:'AWS Lambda .NET Core'},
      {label:'SQL Server'},
      {label:'Entity Framwork Core'},
      {label:'Angular 2+'},
      {label:'Angular Material'},
      {label:'AngularJs'},
      {label:'JavaScript'},
      {label:'Typescript'},
      {label:'jQuery'},
      {label:'HTML5'},
      {label:'CSS'},
      {label:'Bootstrap'},
      {label:'Python'},
      {label:'GIT'},
      {label:'Windows Forms'},
      {label:'WCF'},
      {label:'C++'},
      {label:'Windows Sockets'},
      {label:'COM+'},
      {label:'OLE'},

    ]
  }

  ngOnInit(): void {
  }

}
