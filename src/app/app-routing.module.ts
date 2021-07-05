import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'race',
    pathMatch: 'full'
  },
  {
    path: 'pix',
    loadChildren: () => import('./pix/pix.module').then( m => m.PixPageModule)
  },
  {
    path: 'calc',
    loadChildren: () => import('./calc/calc.module').then( m => m.CalcPageModule)
  },
  {
    path: 'race',
    loadChildren: () => import('./race/race.module').then( m => m.RacePageModule)
  },
  {
    path: 'fuel',
    loadChildren: () => import('./fuel/fuel.module').then( m => m.FuelPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
