import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutesConstants } from './core/constants';


const routes: Routes = [
  {
    path: RoutesConstants.INDEX,
    children: [
      {
        path: RoutesConstants.DASHBOARD_INDEX,
        loadChildren: () => import('src/app/features/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: RoutesConstants.INDEX,
        redirectTo: RoutesConstants.DASHBOARD_INDEX,
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
