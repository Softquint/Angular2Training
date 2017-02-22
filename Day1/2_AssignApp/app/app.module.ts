import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ComponentOne } from './componentOne/app.componentOne';
import { ComponentTwo } from './componentTwo/app.componentTwo';

@NgModule({
    imports: [BrowserModule],
    declarations: [ComponentOne, ComponentTwo],
    bootstrap: [ComponentOne, ComponentTwo]
})
export class AppModule { }