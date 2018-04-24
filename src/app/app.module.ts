import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularMaterialLibrary } from './angular-material-library/angular-material-library.module';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';



@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, AngularMaterialLibrary
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
