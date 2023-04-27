import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'store-feature-game-detail',
    loadChildren: () =>
      import('@bg-hoard/store/feature-game-detail').then(
        (m) => m.StoreFeatureGameDetailModule
      ),
  },
];
