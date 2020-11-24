import { Component, Input, OnInit } from '@angular/core';

export interface BlogSummaryInfo{
  routerLink:string
  imageSrc :string
  title:string
  subTitle :string
  summary:string
}

@Component({
  selector: 'app-blog-summary',
  templateUrl: './blog-summary.component.html',
  styleUrls: ['./blog-summary.component.css']
})
export class BlogSummaryComponent implements OnInit {
  
  info :BlogSummaryInfo;

  @Input('info')  set setInfo(info :BlogSummaryInfo){
    this.info = info;
  }
  
  constructor(  ) {
   }

  ngOnInit(): void {
  }

}
