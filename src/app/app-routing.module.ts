import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {PhotoServiceCreateComponent} from './photo-service-create/photo-service-create.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {PhotoListComponent} from './photo-list/photo-list.component';


const routes: Routes = [
  { path:"",component:NavBarComponent},
  { path:"photocreate", component: PhotoServiceCreateComponent},
  { path:"photo-list", component: PhotoListComponent}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
