import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdminComponent } from './pages/admin/admin.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'admin', component: AdminComponent },
    { path: '**', component: PageNotFoundComponent }
];
