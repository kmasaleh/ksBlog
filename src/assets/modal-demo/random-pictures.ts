import { HttpClient } from '@angular/common/http';
import { ViewContainerRef } from '@angular/core';
import { ModalService, ALERT_CLASS, ModalConfig } from '@ksaleh-ng/modal';
import { Subscription } from 'rxjs';

export class RandomPictures{
    modalSubscribtion:Subscription;
    Data = {Size:null};        
    Image=null;

    constructor(private http:HttpClient,private viewContainer:ViewContainerRef,private modalService:ModalService){
    }
    Show = ()=>{
        let c = new ModalConfig();
        c.Width = 400;
        c.HasCaption =true;
        c.Title = "Hello World";
        c.TempalteName = "RandomPictures";
        c.BindingContext = this;
        c.Alert = ALERT_CLASS.Primary ;
        c.Buttons= [ 
                        { Text:'Yes',Code:0,Exit:true}, 
                        {Text:'No',Code:2,Exit:true},
                        {Text:'Change Picture',Code:8,Exit:false}     
                      ];
  
        c.ViewContainer = this.viewContainer;
        this.modalSubscribtion= this.modalService.ShowModal(c).Events.subscribe(
          code=>{
            if(code===0||code===2 || code=== -1){
              c.BindingContext.ProcessOK();
              this.modalSubscribtion.unsubscribe();
            }
            if(code===8)
              c.BindingContext.ProcessImage();
          }
        );
        this.ProcessImage();
    }

    ProcessImage = ()=>{
        let That =this;
        let size = Number(That.Data.Size) || 200;
        size = size>350?350:size;

          That.http.get(`https://picsum.photos/${size}` ,{ responseType: 'blob' }).subscribe((data)=>{
              
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
            });
      }
}   
  

    
        
