import { type Routes } from '@angular/router';
import { ProfileComponent } from './pages';
import { LayoutComponent } from './components';

export const profileRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', title: 'Github Profile', component: ProfileComponent },
    ],
  },
];
