import { Routes, RouterModule } from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  // }, {
  //   path: 'register',
  //   loadChildren: 'app/pages/register/register.module#RegisterModule'
  }, {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: '', pathMatch: 'full' }, //默认路由
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
