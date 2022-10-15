import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CareboxSearchModule} from "carebox-search-mz";
import {CareboxDetailsModule} from "carebox-details-mz";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CareboxSearchModule,
    CareboxDetailsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
