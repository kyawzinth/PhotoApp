import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {PhotoService} from './photo-service/photo.service';
import {PhotoServiceCreateComponent} from './photo-service-create/photo-service-create.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PhotoListComponent } from './photo-list/photo-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PhotoServiceCreateComponent,
    NavBarComponent,
    PhotoListComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
