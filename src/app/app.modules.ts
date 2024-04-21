import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { FaceSnapModule } from './face-snap/face-snap.component';
import { __importDefault } from 'tslib';
import { RouterOutlet } from '@angular/router';
@NgModule({
  imports: [
    RouterOutlet,
    BrowserModule,
    FaceSnapModule,
    AppComponent,
  ],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }


