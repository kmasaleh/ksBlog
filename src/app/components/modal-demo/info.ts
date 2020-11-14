import { ViewContainerRef } from '@angular/core';
import { ALERT_CLASS, ModalConfig, ModalService } from "@ksaleh-ng/modal";
import { Subscription } from 'rxjs';


export class Info{
    modalSubscribtion :Subscription;
    ModalConfig  :ModalConfig ; 
    Data = {Name:"",EMail:"",Mob:"",DateOfBirth:null};
    constructor(
        private modalSerivce:ModalService,private viewContainer:ViewContainerRef,
        public Name:string,DateOfBirth :Date,public Mob:string,public email:string){
        this.Data.Name = Name;    
        this.Data.EMail=email;
        this.Data.Mob=Mob;
        this.Data.DateOfBirth=DateOfBirth;
        this.ModalConfig = new ModalConfig();
        this.ModalConfig.BindingContext=this;
        this.ModalConfig.Width = 300;
        this.ModalConfig.HasCaption =true;
        this.ModalConfig.Title = "Profile Data!";
        this.ModalConfig.TempalteName = "Info";
        this.ModalConfig.Alert = ALERT_CLASS.Info ;
        this.ModalConfig.Buttons= [ { Text:'Got it',Code:0,Exit:true}];
        this.ModalConfig.ViewContainer = this.viewContainer;
    }

    Show(){
        this.modalSubscribtion= this.modalSerivce.ShowModal(this.ModalConfig).Events.subscribe(
            code=>{
              if(code===0) alert('User clicked Got it');
              this.modalSubscribtion.unsubscribe();
              });
    }
}