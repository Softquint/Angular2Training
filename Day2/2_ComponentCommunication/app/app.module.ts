import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataListComponent } from './DataListComponent/app.datalistComponent';
import { CounterComponent } from './CounterComponent/app.counterComponent';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, DataListComponent, CounterComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }