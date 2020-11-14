import { Component, Input, OnInit } from '@angular/core';
declare var window: any;
@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent implements OnInit {
@Input() URL:string;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.InitFB();
  }
  ngOnDestroy() {
    this.DestroyFB();
  }
  InitFB(){
    var d = document;
    var s= 'script';
    var id =  'facebook-jssdk';

    var sdk = d.getElementById(id);
    if (sdk)
        //sdk.parentNode.removeChild(sdk);
        window.FB.XFBML.parse(); //Instead of returning, lets call parse()
      //return;
    var scripts = d.getElementsByTagName(s);
    var firtsScript= scripts[0];
    var scriptParentNode = firtsScript?.parentNode;
    var fbSDK  ;
    fbSDK= d.createElement(s);
    fbSDK.id = id;
    fbSDK.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
    scriptParentNode.insertBefore(fbSDK, firtsScript);
  }

  DestroyFB(){
    (function (d, s, id) {
      let js, fjs = d.getElementsByTagName(s)[0];
      let jssdk = d.getElementById(id);
      if (jssdk)
        fjs.parentNode.removeChild(jssdk);
      delete window.FB;
    })(document, 'script', 'facebook-jssdk');

  }

}
