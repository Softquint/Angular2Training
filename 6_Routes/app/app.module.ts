import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './ParentComponent/app.component';
import { ListComponent } from './ListComponent/app.component';
import { QuoteComponent } from './QuoteComponent/app.child';
import { routing } from './app.routes';

@NgModule({
  imports: [BrowserModule, FormsModule, routing],
  declarations: [AppComponent, ListComponent, QuoteComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }