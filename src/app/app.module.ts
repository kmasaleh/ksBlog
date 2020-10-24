import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

import {ModalModule  } from '@ksaleh-ng/modal';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import '@angular/compiler';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { WidgetDemoComponent } from './componenets/widget-demo/widget-demo.component';
import { HomeComponent } from './componenets/home/home.component';
import { TechnicalBlogsComponent } from './componenets/technical-blogs/technical-blogs.component';
import { CodeComponent } from './componenets/code/code.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetDemoComponent,
    HomeComponent,
    TechnicalBlogsComponent,
    CodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,MatButtonModule,MatToolbarModule,MatSidenavModule,MatListModule,MatCardModule,
    MatTabsModule,MatTooltipModule,
    ModalModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    NgbModule
    
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
