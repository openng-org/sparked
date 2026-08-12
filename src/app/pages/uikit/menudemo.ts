import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BreadcrumbModule } from '@openng/optimus-ui/breadcrumb';
import { TieredMenuModule } from '@openng/optimus-ui/tieredmenu';
import { ContextMenuModule } from '@openng/optimus-ui/contextmenu';

import { MenuModule } from '@openng/optimus-ui/menu';
import { ButtonModule } from '@openng/optimus-ui/button';
import { MegaMenuModule } from '@openng/optimus-ui/megamenu';
import { PanelMenuModule } from '@openng/optimus-ui/panelmenu';
import { TabsModule } from '@openng/optimus-ui/tabs';
import { MenubarModule } from '@openng/optimus-ui/menubar';
import { InputTextModule } from '@openng/optimus-ui/inputtext';
import { StepperModule } from '@openng/optimus-ui/stepper';
import { IconField, IconFieldModule } from '@openng/optimus-ui/iconfield';
import { InputIcon, InputIconModule } from '@openng/optimus-ui/inputicon';

@Component({
    selector: 'app-menu-demo',
    standalone: true,
    imports: [
        BreadcrumbModule,
        TieredMenuModule,
        IconFieldModule,
        InputIconModule,
        MenuModule,
        ButtonModule,
        ContextMenuModule,
        MegaMenuModule,
        PanelMenuModule,
        TabsModule,
        MenubarModule,
        InputTextModule,
        TabsModule,
        StepperModule,
        TabsModule,
        IconField,
        InputIcon
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    template: `
        <div class="card">
            <div class="font-semibold text-xl mb-4">Menubar</div>
            <p-menubar [model]="nestedMenuItems">
                <ng-template #end>
                    <p-iconfield>
                        <p-inputicon class="pi pi-search" />
                        <input type="text" pInputText placeholder="Search" />
                    </p-iconfield>
                </ng-template>
            </p-menubar>
        </div>

        <div class="card">
            <div class="font-semibold text-xl mb-4">Breadcrumb</div>
            <p-breadcrumb [model]="breadcrumbItems" [home]="breadcrumbHome" />
        </div>

        <div class="flex flex-col md:flex-row gap-8">
            <div class="md:w-1/2">
                <div class="card">
                    <div class="font-semibold text-xl mb-4">Steps</div>
                    <p-stepper [value]="1">
                        <p-step-list>
                            <p-step [value]="1">Header I</p-step>
                            <p-step [value]="2">Header II</p-step>
                            <p-step [value]="3">Header III</p-step>
                        </p-step-list>
                    </p-stepper>
                </div>
            </div>
            <div class="md:w-1/2">
                <div class="card">
                    <div class="font-semibold text-xl mb-4">TabMenu</div>
                    <p-tabs [value]="0">
                        <p-tablist>
                            <p-tab [value]="0">Header I</p-tab>
                            <p-tab [value]="1">Header II</p-tab>
                            <p-tab [value]="2">Header III</p-tab>
                        </p-tablist>
                    </p-tabs>
                </div>
            </div>
        </div>

        <div class="flex flex-col md:flex-row gap-8 mt-6">
            <div class="md:w-1/3">
                <div class="card">
                    <div class="font-semibold text-xl mb-4">Tiered Menu</div>
                    <p-tieredmenu [model]="tieredMenuItems" />
                </div>
            </div>
            <div class="md:w-1/3">
                <div class="card">
                    <div class="font-semibold text-xl mb-4">Plain Menu</div>
                    <p-menu [model]="menuItems" />
                </div>
            </div>
            <div class="md:w-1/3">
                <div class="card">
                    <div class="font-semibold text-xl mb-4">Overlay Menu</div>
                    <p-menu #menu [popup]="true" [model]="overlayMenuItems" />
                    <button type="button" pButton icon="pi pi-chevron-down" label="Options" (click)="menu.toggle($event)" style="width:auto"></button>
                </div>

                <div class="card" #anchor>
                    <div class="font-semibold text-xl mb-4">Context Menu</div>
                    Right click to display.
                    <p-contextmenu [target]="anchor" [model]="contextMenuItems" />
                </div>
            </div>
        </div>

        <div class="flex flex-col md:flex-row gap-8 mt-8">
            <div class="md:w-1/2">
                <div class="card">
                    <div class="font-semibold text-xl mb-4">MegaMenu | Horizontal</div>
                    <p-megamenu [model]="megaMenuItems" />

                    <div class="font-semibold text-xl mb-4 mt-8">MegaMenu | Vertical</div>
                    <p-megamenu [model]="megaMenuItems" orientation="vertical" />
                </div>
            </div>
            <div class="md:w-1/2">
                <div class="card">
                    <div class="font-semibold text-xl mb-4">PanelMenu</div>
                    <p-panelmenu [model]="panelMenuItems" />
                </div>
            </div>
        </div>
    `
})
export class MenuDemo {
    nestedMenuItems = [
        {
            label: 'Customers',
            icon: 'pi pi-fw pi-table',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-user-plus',
                    items: [
                        {
                            label: 'Customer',
                            icon: 'pi pi-fw pi-plus'
                        },
                        {
                            label: 'Duplicate',
                            icon: 'pi pi-fw pi-copy'
                        }
                    ]
                },
                {
                    label: 'Edit',
                    icon: 'pi pi-fw pi-user-edit'
                }
            ]
        },
        {
            label: 'Orders',
            icon: 'pi pi-fw pi-shopping-cart',
            items: [
                {
                    label: 'View',
                    icon: 'pi pi-fw pi-list'
                },
                {
                    label: 'Search',
                    icon: 'pi pi-fw pi-search'
                }
            ]
        },
        {
            label: 'Shipments',
            icon: 'pi pi-fw pi-envelope',
            items: [
                {
                    label: 'Tracker',
                    icon: 'pi pi-fw pi-compass'
                },
                {
                    label: 'Map',
                    icon: 'pi pi-fw pi-map-marker'
                },
                {
                    label: 'Manage',
                    icon: 'pi pi-fw pi-pencil'
                }
            ]
        },
        {
            label: 'Profile',
            icon: 'pi pi-fw pi-user',
            items: [
                {
                    label: 'Settings',
                    icon: 'pi pi-fw pi-cog'
                },
                {
                    label: 'Billing',
                    icon: 'pi pi-fw pi-file'
                }
            ]
        },
        {
            label: 'Quit',
            icon: 'pi pi-fw pi-sign-out'
        }
    ];
    breadcrumbHome = { icon: 'pi pi-home', to: '/' };
    breadcrumbItems = [{ label: 'Computer' }, { label: 'Notebook' }, { label: 'Accessories' }, { label: 'Backpacks' }, { label: 'Item' }];
    tieredMenuItems = [
        {
            label: 'Customers',
            icon: 'pi pi-fw pi-table',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-user-plus',
                    items: [
                        {
                            label: 'Customer',
                            icon: 'pi pi-fw pi-plus'
                        },
                        {
                            label: 'Duplicate',
                            icon: 'pi pi-fw pi-copy'
                        }
                    ]
                },
                {
                    label: 'Edit',
                    icon: 'pi pi-fw pi-user-edit'
                }
            ]
        },
        {
            label: 'Orders',
            icon: 'pi pi-fw pi-shopping-cart',
            items: [
                {
                    label: 'View',
                    icon: 'pi pi-fw pi-list'
                },
                {
                    label: 'Search',
                    icon: 'pi pi-fw pi-search'
                }
            ]
        },
        {
            label: 'Shipments',
            icon: 'pi pi-fw pi-envelope',
            items: [
                {
                    label: 'Tracker',
                    icon: 'pi pi-fw pi-compass'
                },
                {
                    label: 'Map',
                    icon: 'pi pi-fw pi-map-marker'
                },
                {
                    label: 'Manage',
                    icon: 'pi pi-fw pi-pencil'
                }
            ]
        },
        {
            label: 'Profile',
            icon: 'pi pi-fw pi-user',
            items: [
                {
                    label: 'Settings',
                    icon: 'pi pi-fw pi-cog'
                },
                {
                    label: 'Billing',
                    icon: 'pi pi-fw pi-file'
                }
            ]
        },
        {
            separator: true
        },
        {
            label: 'Quit',
            icon: 'pi pi-fw pi-sign-out'
        }
    ];
    overlayMenuItems = [
        {
            label: 'Save',
            icon: 'pi pi-save'
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh'
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash'
        },
        {
            separator: true
        },
        {
            label: 'Home',
            icon: 'pi pi-home'
        }
    ];
    menuItems = [
        {
            label: 'Customers',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-plus'
                },
                {
                    label: 'Edit',
                    icon: 'pi pi-fw pi-user-edit'
                }
            ]
        },
        {
            label: 'Orders',
            items: [
                {
                    label: 'View',
                    icon: 'pi pi-fw pi-list'
                },
                {
                    label: 'Search',
                    icon: 'pi pi-fw pi-search'
                }
            ]
        }
    ];
    contextMenuItems = [
        {
            label: 'Save',
            icon: 'pi pi-save'
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh'
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash'
        },
        {
            separator: true
        },
        {
            label: 'Options',
            icon: 'pi pi-cog'
        }
    ];
    megaMenuItems = [
        {
            label: 'Fashion',
            icon: 'pi pi-fw pi-tag',
            items: [
                [
                    {
                        label: 'Woman',
                        items: [{ label: 'Woman Item' }, { label: 'Woman Item' }, { label: 'Woman Item' }]
                    },
                    {
                        label: 'Men',
                        items: [{ label: 'Men Item' }, { label: 'Men Item' }, { label: 'Men Item' }]
                    }
                ],
                [
                    {
                        label: 'Kids',
                        items: [{ label: 'Kids Item' }, { label: 'Kids Item' }]
                    },
                    {
                        label: 'Luggage',
                        items: [{ label: 'Luggage Item' }, { label: 'Luggage Item' }, { label: 'Luggage Item' }]
                    }
                ]
            ]
        },
        {
            label: 'Electronics',
            icon: 'pi pi-fw pi-desktop',
            items: [
                [
                    {
                        label: 'Computer',
                        items: [{ label: 'Computer Item' }, { label: 'Computer Item' }]
                    },
                    {
                        label: 'Camcorder',
                        items: [{ label: 'Camcorder Item' }, { label: 'Camcorder Item' }, { label: 'Camcorder Item' }]
                    }
                ],
                [
                    {
                        label: 'TV',
                        items: [{ label: 'TV Item' }, { label: 'TV Item' }]
                    },
                    {
                        label: 'Audio',
                        items: [{ label: 'Audio Item' }, { label: 'Audio Item' }, { label: 'Audio Item' }]
                    }
                ],
                [
                    {
                        label: 'Sports.7',
                        items: [{ label: 'Sports.7.1' }, { label: 'Sports.7.2' }]
                    }
                ]
            ]
        },
        {
            label: 'Furniture',
            icon: 'pi pi-fw pi-image',
            items: [
                [
                    {
                        label: 'Living Room',
                        items: [{ label: 'Living Room Item' }, { label: 'Living Room Item' }]
                    },
                    {
                        label: 'Kitchen',
                        items: [{ label: 'Kitchen Item' }, { label: 'Kitchen Item' }, { label: 'Kitchen Item' }]
                    }
                ],
                [
                    {
                        label: 'Bedroom',
                        items: [{ label: 'Bedroom Item' }, { label: 'Bedroom Item' }]
                    },
                    {
                        label: 'Outdoor',
                        items: [{ label: 'Outdoor Item' }, { label: 'Outdoor Item' }, { label: 'Outdoor Item' }]
                    }
                ]
            ]
        },
        {
            label: 'Sports',
            icon: 'pi pi-fw pi-star',
            items: [
                [
                    {
                        label: 'Basketball',
                        items: [{ label: 'Basketball Item' }, { label: 'Basketball Item' }]
                    },
                    {
                        label: 'Football',
                        items: [{ label: 'Football Item' }, { label: 'Football Item' }, { label: 'Football Item' }]
                    }
                ],
                [
                    {
                        label: 'Tennis',
                        items: [{ label: 'Tennis Item' }, { label: 'Tennis Item' }]
                    }
                ]
            ]
        }
    ];
    panelMenuItems = [
        {
            label: 'Customers',
            icon: 'pi pi-fw pi-table',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-user-plus',
                    items: [
                        {
                            label: 'Customer',
                            icon: 'pi pi-fw pi-plus'
                        },
                        {
                            label: 'Duplicate',
                            icon: 'pi pi-fw pi-copy'
                        }
                    ]
                },
                {
                    label: 'Edit',
                    icon: 'pi pi-fw pi-user-edit'
                }
            ]
        },
        {
            label: 'Orders',
            icon: 'pi pi-fw pi-shopping-cart',
            items: [
                {
                    label: 'View',
                    icon: 'pi pi-fw pi-list'
                },
                {
                    label: 'Search',
                    icon: 'pi pi-fw pi-search'
                }
            ]
        },
        {
            label: 'Shipments',
            icon: 'pi pi-fw pi-envelope',
            items: [
                {
                    label: 'Tracker',
                    icon: 'pi pi-fw pi-compass'
                },
                {
                    label: 'Map',
                    icon: 'pi pi-fw pi-map-marker'
                },
                {
                    label: 'Manage',
                    icon: 'pi pi-fw pi-pencil'
                }
            ]
        },
        {
            label: 'Profile',
            icon: 'pi pi-fw pi-user',
            items: [
                {
                    label: 'Settings',
                    icon: 'pi pi-fw pi-cog'
                },
                {
                    label: 'Billing',
                    icon: 'pi pi-fw pi-file'
                }
            ]
        }
    ];
}
