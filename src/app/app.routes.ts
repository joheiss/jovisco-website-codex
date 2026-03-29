import { Routes } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page.component';
import { HomePageComponent } from './pages/home-page.component';
import { LegalNoticePageComponent } from './pages/legal-notice-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'JOVISCO | Hauptseite',
    pathMatch: 'full',
  },
  {
    path: 'kontakt',
    component: ContactPageComponent,
    title: 'JOVISCO | Kontakt',
  },
  {
    path: 'impressum',
    component: LegalNoticePageComponent,
    title: 'JOVISCO | Impressum',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
