import { Component, ChangeDetectionStrategy } from '@angular/core';

import { RouterModule } from '@angular/router';
import { MenuItem } from '@openng/optimus-ui/api';
import { AppMenuitem } from './app.menuitem';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [AppMenuitem, RouterModule],
    changeDetection: ChangeDetectionStrategy.Eager,
    template: `<ul class="layout-menu">
        @for (item of model; track item.label) {
            @if (!item.separator) {
                <li app-menuitem [item]="item" [root]="true"></li>
            } @else {
                <li class="menu-separator"></li>
            }
        }
    </ul> `
})
export class AppMenu {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'COMMONS.HOME',
                items: [{ label: 'COMMONS.DASHBOARD', icon: 'pi pi-fw pi-home', routerLink: ['/'] }]
            },
            {
                label: 'COMMONS.UI_COMPONENTS',
                items: [
                    { label: 'COMMONS.FORM_LAYOUT', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
                    { label: 'COMMONS.INPUT', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
                    { label: 'COMMONS.BUTTON', icon: 'pi pi-fw pi-mobile', class: 'rotated-icon', routerLink: ['/uikit/button'] },
                    { label: 'COMMONS.TABLE', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table'] },
                    { label: 'COMMONS.LIST', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list'] },
                    { label: 'COMMONS.TREE', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree'] },
                    { label: 'COMMONS.PANEL', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel'] },
                    { label: 'COMMONS.OVERLAY', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay'] },
                    { label: 'COMMONS.MEDIA', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media'] },
                    { label: 'COMMONS.MENU', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu'] },
                    { label: 'COMMONS.MESSAGE', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message'] },
                    { label: 'COMMONS.FILE', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file'] },
                    { label: 'COMMONS.CHART', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts'] },
                    { label: 'COMMONS.TIMELINE', icon: 'pi pi-fw pi-calendar', routerLink: ['/uikit/timeline'] },
                    { label: 'COMMONS.MISC', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/misc'] }
                ]
            },
            {
                label: 'COMMONS.PAGES',
                icon: 'pi pi-fw pi-briefcase',
                path: '/pages',
                items: [
                    {
                        label: 'COMMONS.LANDING',
                        icon: 'pi pi-fw pi-globe',
                        routerLink: ['/landing']
                    },
                    {
                        label: 'COMMONS.AUTH',
                        icon: 'pi pi-fw pi-user',
                        path: '/auth',
                        items: [
                            {
                                label: 'COMMONS.LOGIN',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/auth/login']
                            },
                            {
                                label: 'COMMONS.ERROR',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/auth/error']
                            },
                            {
                                label: 'COMMONS.ACCESS_DENIED',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/auth/access']
                            }
                        ]
                    },
                    {
                        label: 'COMMONS.CRUD',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/pages/crud']
                    },
                    {
                        label: 'COMMONS.NOT_FOUND',
                        icon: 'pi pi-fw pi-exclamation-circle',
                        routerLink: ['/pages/notfound']
                    },
                    {
                        label: 'COMMONS.EMPTY',
                        icon: 'pi pi-fw pi-circle-off',
                        routerLink: ['/pages/empty']
                    }
                ]
            },
            {
                label: 'COMMONS.HIERARCHY',
                path: '/hierarchy',
                items: [
                    {
                        label: 'COMMONS.SUBMENU_1',
                        icon: 'pi pi-fw pi-bookmark',
                        path: '/hierarchy/submenu_1',
                        items: [
                            {
                                label: 'COMMONS.SUBMENU_1_1',
                                icon: 'pi pi-fw pi-bookmark',
                                path: '/hierarchy/submenu_1/submenu_1_1',
                                items: [
                                    { label: 'COMMONS.SUBMENU_1_1_1', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'COMMONS.SUBMENU_1_1_2', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'COMMONS.SUBMENU_1_1_3', icon: 'pi pi-fw pi-bookmark' }
                                ]
                            },
                            {
                                label: 'COMMONS.SUBMENU_1_2',
                                icon: 'pi pi-fw pi-bookmark',
                                path: '/hierarchy/submenu_1/submenu_1_2',
                                items: [{ label: 'COMMONS.SUBMENU_1_2_1', icon: 'pi pi-fw pi-bookmark' }]
                            }
                        ]
                    },
                    {
                        label: 'COMMONS.SUBMENU_2',
                        icon: 'pi pi-fw pi-bookmark',
                        path: '/hierarchy/submenu_2',
                        items: [
                            {
                                label: 'COMMONS.SUBMENU_2_1',
                                icon: 'pi pi-fw pi-bookmark',
                                path: '/hierarchy/submenu_2/submenu_2_1',
                                items: [
                                    { label: 'COMMONS.SUBMENU_2_1_1', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'COMMONS.SUBMENU_2_1_2', icon: 'pi pi-fw pi-bookmark' }
                                ]
                            },
                            {
                                label: 'COMMONS.SUBMENU_2_2',
                                icon: 'pi pi-fw pi-bookmark',
                                path: '/hierarchy/submenu_2/submenu_2_2',
                                items: [{ label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' }]
                            }
                        ]
                    }
                ]
            },
            {
                label: 'COMMONS.GET_STARTED',
                items: [
                    {
                        label: 'COMMONS.DOCUMENTATION',
                        icon: 'pi pi-fw pi-book',
                        routerLink: ['/documentation']
                    },
                    {
                        label: 'COMMONS.VIEW_SOURCE',
                        icon: 'pi pi-fw pi-github',
                        url: 'https://github.com/openng-org/sparked',
                        target: '_blank'
                    }
                ]
            }
        ];
    }
}
