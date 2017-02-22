import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './ListComponent/app.component';
import { QuoteComponent } from './QuoteComponent/app.child';
export const routes: Routes = [
    { path: 'list', component: ListComponent },
    { path: 'quote', component: QuoteComponent },
    { path: 'quote/:id', component: QuoteComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);