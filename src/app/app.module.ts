import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgNumbersOnlyInputDirectiveModule} from "ng-numbers-only-input-directive";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgNumbersOnlyInputDirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
