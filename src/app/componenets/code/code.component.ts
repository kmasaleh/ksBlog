import { Component, Input, OnInit } from '@angular/core';
declare var hljs;

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {
  @Input() CodeText:string;
  @Input() CodeClass:string ;
  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit(){
   }

   public HighlightCode(){
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    }); 

   }
}
