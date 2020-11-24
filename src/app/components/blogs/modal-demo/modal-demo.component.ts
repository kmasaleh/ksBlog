declare var window: any;
import { Component, ElementRef, Inject, OnInit, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';

import {TemplateRefBinderDirective,TemplateProviderService, ALERT_CLASS, ModalConfig,ModalButton,ModalService } 
from '@ksaleh-ng/modal';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import {Info} from './info';
import { RandomPictures } from './random-pictures';
import { Simple } from './simple';
import { CodePanelDescriptor } from '../../widget-demo/widget-demo.component';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { isDevMode } from '@angular/core';

@Component({
  selector: 'app-modal-demo',
  templateUrl: './modal-demo.component.html',
  styleUrls: ['./modal-demo.component.css']
})
export class ModalDemoComponent implements OnInit {
  
  

  @ViewChild('msgBox', { read: ViewContainerRef })  msgBox : ViewContainerRef
  @ViewChildren(TemplateRefBinderDirective) templateRefs : QueryList<TemplateRefBinderDirective>;
  modal_demo_css :string;
  modal_demo_html:string;
  modal_demo_ts :string;
  info_ts:string;
  simple_ts:string;
  random_pictures_ts:string;
  modalSubscribtion :Subscription;
  info:Info;
  URL;

  CodeDescriptors : CodePanelDescriptor[]=[];  
  constructor(private templateProviderService:TemplateProviderService,
    private modalSerivce:ModalService,  private http:HttpClient,
    @Inject(DOCUMENT) private document: Document,router:Router) { 
    
      this.loadAssets();
      let port =  "" ;//isDevMode? ":4200":"";
      this.URL = document.location.protocol +'//'+ document.location.hostname + port + router.url ;
      setTimeout( ()=>{
      this.CodeDescriptors.push(new CodePanelDescriptor("modal-demo.component.ts","ts",this.modal_demo_ts));
      this.CodeDescriptors.push(new CodePanelDescriptor("modal-demo.component.html","html",this.modal_demo_html));
      this.CodeDescriptors.push(new CodePanelDescriptor("modal-demo.component.cs","css",this.modal_demo_css));
      this.CodeDescriptors.push(new CodePanelDescriptor("info.ts","ts",this.info_ts));
      this.CodeDescriptors.push(new CodePanelDescriptor("simple.ts","ts",this.simple_ts));
      this.CodeDescriptors.push(new CodePanelDescriptor("random-pictures.ts","ts",this.random_pictures_ts));

      
      },3000);
    }




  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.templateProviderService.Add(this.templateRefs.toArray());
  }

  loadAssetFile(path){
    return this.http.get(path, { responseType: 'text' });
  }
  loadAssets(){
      this.loadAssetFile('./assets/modal-demo/modal-demo.component.ts').subscribe(data =>this.modal_demo_ts=data );
      this.loadAssetFile('./assets/modal-demo/modal-demo.component.css').subscribe(data =>this.modal_demo_css =data);
      this.loadAssetFile('./assets/modal-demo/modal-demo.component.html').subscribe(data =>this.modal_demo_html=data );
      this.loadAssetFile('./assets/modal-demo/info.ts').subscribe(data =>this.info_ts =data);
      this.loadAssetFile('./assets/modal-demo/simple.ts').subscribe(data =>this.simple_ts =data);
      this.loadAssetFile('./assets/modal-demo/random-pictures.ts').subscribe(data =>this.random_pictures_ts=data );
  }
  OnInfoModal(){
    this. info  = new Info(this.modalSerivce,this.msgBox,"khaled saleh",new Date ("08/20/1965"),"01011824456","someone@gmail.com");
    this.info.Show();
  }
  OnDeleteModal(){
    let c = new ModalConfig();
        c.Width = 300;
        c.HasCaption =true;
        c.Title = "Delete Record";
        c.TempalteName = "Delete";
        c.Alert = ALERT_CLASS.Danger ;
        c.Buttons= [ { Text:'Yes',Code:0,Exit:true}, 
                     {Text:'No',Code:1,Exit:true}
        ];
        c.ViewContainer = this.msgBox;
        this.modalSubscribtion= this.modalSerivce.ShowModal(c).Events.subscribe(
          code=>{
            if(code===0) alert('User clicked OK');
            if(code===1) alert('User clicked NO');

            this.modalSubscribtion.unsubscribe();
            });
  }

  OnThreeButtonsModal(){
    new RandomPictures(this.http,this.msgBox,this.modalSerivce).Show();
  }
  OnSimpleModal(){
    new Simple(this.msgBox,this.modalSerivce,200).Show();
  }
  ngOnDestroy() {
  }
}
