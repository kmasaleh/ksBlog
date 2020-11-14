import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './components/articles/articles.component';
import { HomeComponent } from './components/home/home.component';
import { ModalDemoComponent } from './components/modal-demo/modal-demo.component';
import { TechnicalBlogsComponent } from './components/technical-blogs/technical-blogs.component';
import { WidgetDemoComponent } from './components/widget-demo/widget-demo.component';


const routes: Routes = [
  {path:'articles', component:ArticlesComponent},
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
