import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Profile',
    loadChildren: () =>
      import('./profile/profile.routes').then((m) => m.profileRoutes),
  },
];
