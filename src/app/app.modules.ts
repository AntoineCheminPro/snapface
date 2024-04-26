import { NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { FaceSnapComponent, FaceSnapModule } from './face-snap/face-snap.component';
import { __importDefault } from 'tslib';
import { RouterOutlet } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { HeaderComponent } from './header/header.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import localeFr from '@angular/common/locales/fr';
@NgModule({
  imports: [
    RouterOutlet,
    BrowserModule,
    FaceSnapModule,
    FaceSnapComponent,
    AppComponent,
    HeaderComponent,
    FaceSnapListComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    { provide: DatePipe, useClass: DatePipe, deps: [LOCALE_ID] }
  ],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor() {
    registerLocaleData(localeFr);
  }
}


