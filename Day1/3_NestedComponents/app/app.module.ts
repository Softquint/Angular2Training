import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainComponent } from './mainComponent/app.mainComponent';
import { ComponentOne } from './componentOne/app.componentOne';
import { ComponentTwo } from './componentTwo/app.componentTwo';

@NgModule({
    imports: [BrowserModule],
    declarations: [MainComponent, ComponentOne, ComponentTwo],
    bootstrap: [MainComponent]
})
export class AppModule { }