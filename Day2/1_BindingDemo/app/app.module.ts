import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './ListComponent/app.listComponent';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, ListComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }