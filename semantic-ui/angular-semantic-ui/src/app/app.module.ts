import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CheatSheetComponent } from './cheat-sheet/cheat-sheet.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SuiModule } from 'ng2-semantic-ui';

@NgModule({
  declarations: [
    AppComponent,
    CheatSheetComponent,
    HeaderComponent,
    FooterComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    SuiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
