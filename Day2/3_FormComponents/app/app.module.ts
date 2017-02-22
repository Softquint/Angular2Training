import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemlateFormComponent } from './TemplateForm/app.templateform';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent,TemlateFormComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
