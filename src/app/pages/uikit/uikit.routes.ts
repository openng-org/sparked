import { Routes } from '@angular/router';

export default [
    { path: 'button', data: { breadcrumb: 'Button' }, loadComponent: () => import('./buttondemo').then((m) => m.ButtonDemo) },
    { path: 'charts', data: { breadcrumb: 'Charts' }, loadComponent: () => import('./chartdemo').then((m) => m.ChartDemo) },
    { path: 'file', data: { breadcrumb: 'File' }, loadComponent: () => import('./filedemo').then((m) => m.FileDemo) },
    { path: 'formlayout', data: { breadcrumb: 'Form Layout' }, loadComponent: () => import('./formlayoutdemo').then((m) => m.FormLayoutDemo) },
    { path: 'input', data: { breadcrumb: 'Input' }, loadComponent: () => import('./inputdemo').then((m) => m.InputDemo) },
    { path: 'list', data: { breadcrumb: 'List' }, loadComponent: () => import('./listdemo').then((m) => m.ListDemo) },
    { path: 'media', data: { breadcrumb: 'Media' }, loadComponent: () => import('./mediademo').then((m) => m.MediaDemo) },
    { path: 'message', data: { breadcrumb: 'Message' }, loadComponent: () => import('./messagesdemo').then((m) => m.MessagesDemo) },
    { path: 'misc', data: { breadcrumb: 'Misc' }, loadComponent: () => import('./miscdemo').then((m) => m.MiscDemo) },
    { path: 'panel', data: { breadcrumb: 'Panel' }, loadComponent: () => import('./panelsdemo').then((m) => m.PanelsDemo) },
    { path: 'timeline', data: { breadcrumb: 'Timeline' }, loadComponent: () => import('./timelinedemo').then((m) => m.TimelineDemo) },
    { path: 'table', data: { breadcrumb: 'Table' }, loadComponent: () => import('./tabledemo').then((m) => m.TableDemo) },
    { path: 'overlay', data: { breadcrumb: 'Overlay' }, loadComponent: () => import('./overlaydemo').then((m) => m.OverlayDemo) },
    { path: 'tree', data: { breadcrumb: 'Tree' }, loadComponent: () => import('./treedemo').then((m) => m.TreeDemo) },
    { path: 'menu', data: { breadcrumb: 'Menu' }, loadComponent: () => import('./menudemo').then((m) => m.MenuDemo) },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
