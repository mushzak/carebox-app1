import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CareboxSearchLibModule} from "carebox-search-lib-2";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CareboxSearchLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
