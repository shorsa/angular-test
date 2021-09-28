import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesConstants } from 'src/app/core/constants';
import { TradesResolver } from 'src/app/core/resolvers/tarades.resolver';
import { DashboardLayoutComponent } from 'src/app/shared/layouts/dashboard-layout/dashboard-layout.component';

const routes: Routes = [
  {
    path: RoutesConstants.INDEX,
    component: DashboardLayoutComponent,
    children: [
      {
        path: RoutesConstants.DASHBOARD_TRADES,
        loadChildren: () => import('./trades/trades.module').then(m => m.TradesModule),
        resolve: {
          tradesData: TradesResolver
        }
      },
      {
        path: RoutesConstants.INDEX,
        redirectTo: RoutesConstants.DASHBOARD_TRADES,
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
