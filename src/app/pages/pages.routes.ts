import { Routes } from '@angular/router';

export default [
    { path: 'documentation', loadComponent: () => import('./documentation/documentation').then((m) => m.Documentation) },
    { path: 'crud', loadComponent: () => import('./crud/crud').then((m) => m.Crud) },
    { path: 'empty', loadComponent: () => import('./empty/empty').then((m) => m.Empty) },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
