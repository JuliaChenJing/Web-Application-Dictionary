import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CheatSheetComponent } from './cheat-sheet/cheat-sheet.component';


@NgModule({
  declarations: [
    AppComponent,
    CheatSheetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
