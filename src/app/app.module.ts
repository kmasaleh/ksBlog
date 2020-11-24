import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip'
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ModalModule  } from '@ksaleh-ng/modal';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import '@angular/compiler';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { WidgetDemoComponent } from './components/widget-demo/widget-demo.component';
import { HomeComponent } from './components/home/home.component';
import { TechnicalBlogsComponent } from './components/technical-blogs/technical-blogs.component';
import { CodeComponent } from './components/code/code.component';
import { ModalDemoComponent } from './components/blogs/modal-demo/modal-demo.component';
import { AppInitService } from './services/app-init.service';
import { FacebookComponent } from './components/facebook/facebook.component';
import { FacebookHRefDirective } from './components/facebook/facebook-href.directive';
import { ArticlesComponent } from './components/articles/articles.component';
import { BlogSummaryComponent } from './components/blog-summary/blog-summary.component';
import { WorkExperienceComponent } from './components/blogs/work-experience/work-experience.component';
import { TagsComponent } from './components/tags/tags.component';

import { DropdownLookupDemoComponent } from './components/blogs/dropdown-lookup-demo/dropdown-lookup-demo.component';
import {DropdownLookupModule} from '@ksaleh-ng/dropdown-lookup';

export function initApp( appInitService:AppInitService ){
  return (): Promise<any> => {
      return appInitService.Init();
  } 
}

@NgModule({
  declarations: [
    AppComponent,
    WidgetDemoComponent,
    HomeComponent,
    TechnicalBlogsComponent,
    CodeComponent,
    ModalDemoComponent,
    FacebookComponent,
    FacebookHRefDirective,
    ArticlesComponent,
    BlogSummaryComponent,
    WorkExperienceComponent,
    TagsComponent,
    DropdownLookupDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,MatButtonModule,MatToolbarModule,MatSidenavModule,MatListModule,MatCardModule,
    MatTabsModule,MatTooltipModule,MatFormFieldModule, MatInputModule,
    ModalModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    DropdownLookupModule
  ],
  providers: [AppInitService,{provide:APP_INITIALIZER,useFactory:initApp,deps:[AppInitService],multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
