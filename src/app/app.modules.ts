import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';

@NgModule({
  imports: [
    BrowserModule,
    FaceSnapComponent,
    AppComponent,
  ],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]})
export class AppModule { }


