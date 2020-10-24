import { HttpClient } from '@angular/common/http';
import { Component, OnInit, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import {TemplateRefBinderDirective,TemplateProviderService, ALERT_CLASS, ModalConfig,ModalButton,ModalService } 
from '@ksaleh-ng/modal';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { CodeComponent } from '../code/code.component';

class BC {
  constructor(private http:HttpClient){

  }
  Data = {Extra:"bg"};
  BandName :string = "BeeGees";
  Icon:any = faSave;  
  Image : any;
  
  OnInputChange = ($event)=>{
    alert($event.target.value);
  }
  ProcessOK =()=>{
    let text = `Handlin OK , BandName = ${this.Data.Extra}`;
    alert(text);
  };
  
  ProcessImage = ()=>{
    let That =this;
    this.http.get("https://picsum.photos/150" ,{ responseType: 'blob' }).subscribe((data)=>{
      
        let createImageFromBlob =function(image : Blob) {
          let reader = new FileReader();
          reader.addEventListener("load", () => {
              That.Image =  reader.result;
          }, false);
        
          if (image) {
              reader.readAsDataURL(image);
              
          }
        };
        
        createImageFromBlob(data); 
    })
    
  }
}

@Component({
  selector: 'app-widget-demo',
  templateUrl: './widget-demo.component.html',
  styleUrls: ['./widget-demo.component.css']
})
export class WidgetDemoComponent implements OnInit {
  CodeView:boolean =true;
  
  @ViewChild('msgBox', { read: ViewContainerRef })  msgBox : ViewContainerRef
  @ViewChildren(TemplateRefBinderDirective) templateRefs : QueryList<TemplateRefBinderDirective>;
  @ViewChildren(CodeComponent) Codes : QueryList<CodeComponent>;


  constructor(      private templateProviderService:TemplateProviderService,
    private modalSerivce:ModalService,
    private http:HttpClient
) { }
css=`
.code-container{
  border-style: solid;
  border-color: silver;
/*   width: 950px;*/
  border-width: 1.0pt;
  border-radius: 10px;
}
`;

html =
`
\<!doctype html\>
\<html lang="en"\>
<head>
  <meta charset="utf-8">
  <title>KsBlog</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  
  <link rel="stylesheet"
      href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.1/styles/default.min.css">
  <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.1/highlight.min.js"></script>

<script>
    hljs.initHighlightingOnLoad();
//    hljs.configure({ 'languages': ['html'] });
  </script>



</head>
<body class="mat-typography">
  <app-root></app-root>
</body>
</html>

`
/*
.replace(/&/g, "&amp;")
.replace(/</g, "&lt;")
.replace(/>/g, "&gt;")
.replace(/"/g, "&quot;")
.replace(/'/g, "&#039;");
*/;


//__________________________________________________________
code = `
@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'ksBlog';
 @ViewChild('msgBox', { read: ViewContainerRef })  msgBox : ViewContainerRef
 @ViewChildren(TemplateRefBinderDirective) templateRefs : QueryList<TemplateRefBinderDirective>;

constructor(
     private templateProviderService:TemplateProviderService,
         private modalSerivce:ModalService,
         private http:HttpClient
){
   let t= \` $\{code \} \`;
}
`;




  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.templateProviderService.Add(this.templateRefs.toArray());
    this.CallCodeHighlight(0);
  }
  
  modalSubscribtion :Subscription;
  OnMsgBox($event){
  
    let c = new ModalConfig();
        c.Width = 400;
        c.HasCaption =true;
        c.Title = "Hello World";
        //c.Body = "This Angular 9";
        c.TempalteName = "BeeGees";
        c.BindingContext = new BC(this.http); // {BandName : "BeeGees",Icon:faSave};
        c.Alert = ALERT_CLASS.Danger ;
        c.Buttons= [ 
                        { Text:'Yes',Code:0,Exit:true}, 
                        {Text:'No',Code:2,Exit:true},
                        {Text:'Do Something',Code:8,Exit:false}     
                      ];
  
        c.ViewContainer = this.msgBox;
        this.modalSubscribtion= this.modalSerivce.ShowModal(c).Events.subscribe(
          code=>{
            if(code===0||code===2){
              c.BindingContext.ProcessOK();
              this.modalSubscribtion.unsubscribe();
            }
            if(code===8)
              c.BindingContext.ProcessImage();
          }
        );
    }
  
    CallCodeHighlight(index:number){
      let Codes = this.Codes.toArray();
      let page = Codes[index];
      page?.HighlightCode();

    }
    tabSelected(tab){
      this.CallCodeHighlight(tab.index);
    }  

    ToggleCode(){
      this.CodeView = !this.CodeView;
    }
}
