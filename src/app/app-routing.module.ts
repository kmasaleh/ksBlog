import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componenets/home/home.component';
import { ModalDemoComponent } from './componenets/modal-demo/modal-demo.component';
import { TechnicalBlogsComponent } from './componenets/technical-blogs/technical-blogs.component';
import { WidgetDemoComponent } from './componenets/widget-demo/widget-demo.component';


const routes: Routes = [
  {path:'modal', component:ModalDemoComponent},
  {path:'technical-blogs', component:TechnicalBlogsComponent},
  {path:'home', component:HomeComponent},
  { path: '**', component:  HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
