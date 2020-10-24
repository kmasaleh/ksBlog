import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componenets/home/home.component';
import { TechnicalBlogsComponent } from './componenets/technical-blogs/technical-blogs.component';
import { WidgetDemoComponent } from './componenets/widget-demo/widget-demo.component';


const routes: Routes = [
  {path:'modal', component:WidgetDemoComponent},
  {path:'technical-blogs', component:TechnicalBlogsComponent},
  {path:'home', component:HomeComponent},
  { path: '**', component:  HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
