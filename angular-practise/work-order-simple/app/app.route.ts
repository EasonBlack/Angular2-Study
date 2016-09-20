import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
    // { path: 'home', component: HomeComponent },
    // { path: 'about', component: AboutComponent },
    // { path: '', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);