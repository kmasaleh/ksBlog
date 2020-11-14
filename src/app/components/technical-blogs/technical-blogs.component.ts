import { Component, OnInit } from '@angular/core';
import { BlogSummaryInfo } from '../blog-summary/blog-summary.component';

@Component({
  selector: 'app-technical-blogs',
  templateUrl: './technical-blogs.component.html',
  styleUrls: ['./technical-blogs.component.css']
})
export class TechnicalBlogsComponent implements OnInit {

  BLOGS  : BlogSummaryInfo[] =[]; 
  constructor() { 

  }

  ngOnInit(): void {

    let summary1  : BlogSummaryInfo  = {
      routerLink : '/modal',
      imageSrc:"./../../../assets/angular-icon-1.svg",
      title:  'Angular Custom Modal Component',
      subTitle:'Published 10/26/2020 . 15 min read',
      summary:  `The modal component is a reusable widget that can be used for multiple purposes.
                 It may display a simple informational message telling the user something like 
                 the application is about to delete somthing or displaying a feed back from a server process.
                  You will desgin the template that is used inside the modal by yourself, 
                  so you may tell if it has a draggable caption, contain some icon or picture or even buttons and inputs.
                `
    }
    this.BLOGS.push(summary1);
  
    summary1   = {
      routerLink : '/',
      imageSrc:"../assets/blog-post-thumb-1.jpg",
      title:  'Why Every Developer Should Have A Blog',
      subTitle:'Published 10/20/2020 . 5 min read',
      summary:  `Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                 Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                 natoque penatibus et magnis dis parturient montes, nascetur
                 ridiculus mus. Donec quam felis, ultricies...
                `
    }
    this.BLOGS.push(summary1);
  }

}
