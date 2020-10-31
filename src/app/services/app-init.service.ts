import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
//import { environment } from '@environments/environment';

@Injectable()
export class AppInitService{
    constructor(){

    }
    Init(){
        return new Promise<any>((resolve,reject)=>{
     
            // load facebook sdk script
            /*
                (function (d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) { return; }
                    js = d.createElement(s); js.id = id;
                    js.src = "https://connect.facebook.net/en_US/sdk.js";
                    fjs.parentNode.insertBefore(js, fjs);
                    
                }(document, 'script', 'facebook-jssdk'));  
                */
            resolve();
        })
    }
}