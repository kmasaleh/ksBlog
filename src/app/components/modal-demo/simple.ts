import { ViewContainerRef } from '@angular/core';
import { ALERT_CLASS, ModalConfig, ModalService } from '@ksaleh-ng/modal';
import { Subscription } from 'rxjs';

export class Simple{
    modalSubscribtion:Subscription;
    constructor(private viewContainer:ViewContainerRef,private modalService:ModalService,private ReturnCode:number){
    }
    Show = ()=>{
        let c = new ModalConfig();
        c.Width = 400;
        c.HasCaption=true;
        c.Body = "Process returned code is:" + this.ReturnCode;
        c.TempalteName = "Simple";
        c.BindingContext = this;
        c.Alert = ALERT_CLASS.Success ;
        c.Buttons= [ { Text:'OK',Code:0,Exit:true}  ];
        c.ViewContainer = this.viewContainer;
        this.modalSubscribtion= this.modalService.ShowModal(c).Events.subscribe(
          code=>{
              this.modalSubscribtion.unsubscribe();
            }      
        );
    }
}