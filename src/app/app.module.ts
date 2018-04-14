import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AngularMaterialLibrary } from './angular-material-library.module';

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
