import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularMaterialLibrary } from './angular-material-library/angular-material-library.module';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, AngularMaterialLibrary
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
