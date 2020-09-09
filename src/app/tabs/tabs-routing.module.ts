import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs/investments',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'investments',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../investments/investments.module').then(m => m.InvestmentsPageModule)
          }
        ]
      },
      {
        path: 'investment-details',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../investment-details/investment-details.module').then(m=>m.InvestmentDetailsPageModule)
          }
        ]
      },
      {
        path: 'projects',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../projects/projects.module').then(m => m.ProjectsPageModule)
          }
        ]
      },
      {
        path: 'notifications',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../notifications/notifications.module').then(m => m.NotificationsPageModule)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
