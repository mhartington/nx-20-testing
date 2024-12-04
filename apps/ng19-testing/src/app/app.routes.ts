import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'detail',
    loadChildren: () =>
      import('./components/detail.module').then((m) => m.DetailModule),
  },
  { path: '', pathMatch: 'full', redirectTo: '/detail' },
];
