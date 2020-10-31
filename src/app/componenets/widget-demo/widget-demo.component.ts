
import { Component, OnInit, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';

import { CodeComponent } from '../code/code.component';
import { Input } from '@angular/core';

export class CodePanelDescriptor{
  constructor(public Title:string,public Class,public CodeText:string){

  }
}

@Component({
  selector: 'app-widget-demo',
  templateUrl: './widget-demo.component.html',
  styleUrls: ['./widget-demo.component.css']
})
export class WidgetDemoComponent implements OnInit {
  CodeView:boolean =false;
  
  @ViewChildren(CodeComponent) Codes : QueryList<CodeComponent>;

  @Input() Title:string;
  @Input() CSS:string;
  @Input() TS:string;
  @Input() HTML:string;

  @Input() CodeDescriptors: CodePanelDescriptor[];

  constructor(      
) { }


  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.CallCodeHighlight(0);
  }
  
  
    CallCodeHighlight(index:number){
      setTimeout(()=>{
      let Codes = this.Codes.toArray();
      let page = Codes[index];
      page?.HighlightCode();
      },100);
    }
    tabSelected(tab){
      this.CallCodeHighlight(tab.index);
    }  

    ToggleCode(){
      this.CodeView = !this.CodeView;
      this.CallCodeHighlight(0);
    }
}
