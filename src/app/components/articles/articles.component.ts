import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as s3 from 'aws-sdk/clients/s3';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
BUCKET_NAME = 'ksalehblog';
FOLDER_NAME = 'assets/articles/';
  Bucket = new s3({
    accessKeyId  : 'AKIATGNIJI56ARKXVABE',
    secretAccessKey :'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',
    region : "us-east-1"
  });
  @ViewChild('someDiv', {read: ElementRef}) elementRef: ElementRef;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.loadArticles();
    this.readArticle('sample.html');
  }


  readArticle(name :string){
    
    const params = {
      Bucket: this.BUCKET_NAME,
      Key: `${this.FOLDER_NAME}${name}`
    };
    const That=this;
    this.Bucket.getObject(params, function(err, data) {
      if (err) {
        console.error(err); // an error occurred
      } else {
        let parser = new DOMParser();
        var html = new TextDecoder("utf-8").decode(data.Body as Uint8Array);

        let parsedHtml = parser.parseFromString(data.Body as string, 'text/html');
        let summ = parsedHtml.getElementById('summary')
        console.log(html);
        That.elementRef.nativeElement.innerHTML = html;     
        /*
        const string = new TextDecoder('utf-8').decode(data.Body);
        console.log(string);
        */
      }
    });    
  }
  loadArticles(){
    const params = {
      Bucket: this.BUCKET_NAME,
      Prefix: this.FOLDER_NAME
    };


    this.Bucket.listObjects(params, function (err, data) {
      if (err) {
        console.log('There was an error getting your files: ' + err);
        return;
      }
 
      console.log('Successfully get files.', data);
 
      const fileDatas = data.Contents;
 
      fileDatas.forEach(function (file) {
        console.log(file.Key);
      });
    });
  }    
}
