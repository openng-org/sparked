import { Routes } from '@angular/router';

export default [
    { path: 'access', loadComponent: () => import('./access').then((m) => m.Access) },
    { path: 'error', loadComponent: () => import('./error').then((m) => m.Error) },
    { path: 'login', loadComponent: () => import('./login').then((m) => m.Login) }
] as Routes;
