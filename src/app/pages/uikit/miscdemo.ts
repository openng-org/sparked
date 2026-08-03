import { Component } from '@angular/core';
import { AvatarModule } from '@openng/optimus-ui/avatar';
import { AvatarGroupModule } from '@openng/optimus-ui/avatargroup';
import { BadgeModule } from '@openng/optimus-ui/badge';
import { ButtonModule } from '@openng/optimus-ui/button';
import { ChipModule } from '@openng/optimus-ui/chip';
import { OverlayBadgeModule } from '@openng/optimus-ui/overlaybadge';
import { ProgressBarModule } from '@openng/optimus-ui/progressbar';
import { ScrollPanelModule } from '@openng/optimus-ui/scrollpanel';
import { ScrollTopModule } from '@openng/optimus-ui/scrolltop';
import { SkeletonModule } from '@openng/optimus-ui/skeleton';
import { TagModule } from '@openng/optimus-ui/tag';

@Component({
    selector: 'app-misc-demo',
    standalone: true,
    imports: [ProgressBarModule, BadgeModule, AvatarModule, ScrollPanelModule, TagModule, ChipModule, ButtonModule, SkeletonModule, AvatarGroupModule, ScrollTopModule, OverlayBadgeModule],
    template: `
        <div class="card">
            <div class="font-semibold text-xl mb-4">ProgressBar</div>
            <div class="flex flex-col md:flex-row gap-4">
                <div class="md:w-1/2">
                    <p-progressbar [value]="value" [showValue]="true" />
                </div>
                <div class="md:w-1/2">
                    <p-progressbar [value]="50" [showValue]="false" />
                </div>
            </div>
        </div>

        <div class="flex flex-col md:flex-row gap-8">
            <div class="md:w-1/2">
                <div class="card">
                    <div class="font-semibold text-xl mb-4">Badge</div>
                    <div class="flex gap-2">
                        <p-badge value="2" />
                        <p-badge value="8" severity="success" />
                        <p-badge value="4" severity="info" />
                        <p-badge value="12" severity="warn" />
                        <p-badge value="3" severity="danger" />
                    </div>

                    <div class="font-semibold my-4">Overlay</div>
                    <div class="flex gap-6">
                        <p-overlaybadge value="2">
                            <i class="pi pi-bell" style="font-size: 2rem"></i>
                        </p-overlaybadge>
                        <p-overlaybadge value="4" severity="danger">
                            <i class="pi pi-calendar" style="font-size: 2rem"></i>
                        </p-overlaybadge>
                        <p-overlaybadge severity="danger">
                            <i class="pi pi-envelope" style="font-size: 2rem"></i>
                        </p-overlaybadge>
                    </div>

                    <div class="font-semibold my-4">Button</div>
                    <div class="flex gap-2">
                        <p-button label="Emails" badge="8" />
                        <p-button label="Messages" icon="pi pi-users" severity="warn" badge="8" badgeSeverity="danger" />
                    </div>

                    <div class="font-semibold my-4">Sizes</div>
                    <div class="flex items-start gap-2">
                        <p-badge [value]="2" />
                        <p-badge [value]="4" badgeSize="large" severity="warn" />
                        <p-badge [value]="6" badgeSize="xlarge" severity="success" />
                    </div>
                </div>

                <div class="card">
                    <div class="font-semibold text-xl mb-4">Avatar</div>
                    <div class="font-semibold mb-4">Group</div>
                    <p-avatargroup styleClass="mb-4">
                        <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" size="large" shape="circle" />
                        <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png" size="large" shape="circle" />
                        <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png" size="large" shape="circle" />
                        <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png" size="large" shape="circle" />
                        <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/xuxuefeng.png" size="large" shape="circle" />
                        <p-avatar label="+2" shape="circle" size="large" [style]="{ 'background-color': '#9c27b0', color: '#ffffff' }" />
                    </p-avatargroup>

                    <div class="font-semibold my-4">Label - Circle</div>
                    <p-avatar class="mr-2" label="P" size="xlarge" shape="circle" />
                    <p-avatar class="mr-2" label="V" size="large" [style]="{ 'background-color': '#2196F3', color: '#ffffff' }" shape="circle" />
                    <p-avatar class="mr-2" label="U" [style]="{ 'background-color': '#9c27b0', color: '#ffffff' }" shape="circle" />

                    <div class="font-semibold my-4">Icon - Badge</div>
                    <p-overlaybadge value="4" severity="danger" class="inline-flex">
                        <p-avatar label="U" size="xlarge" />
                    </p-overlaybadge>
                </div>

                <div class="card">
                    <div class="font-semibold text-xl mb-4">Skeleton</div>
                    <div class="rounded-border border border-surface p-6">
                        <div class="flex mb-4">
                            <p-skeleton shape="circle" size="4rem" styleClass="mr-2" />
                            <div>
                                <p-skeleton width="10rem" styleClass="mb-2" />
                                <p-skeleton width="5rem" styleClass="mb-2" />
                                <p-skeleton height=".5rem" />
                            </div>
                        </div>
                        <p-skeleton width="100%" height="150px" />
                        <div class="flex justify-between mt-4">
                            <p-skeleton width="4rem" height="2rem" />
                            <p-skeleton width="4rem" height="2rem" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="md:w-1/2">
                <div class="card">
                    <div class="font-semibold text-xl mb-4">Tag</div>
                    <div class="font-semibold mb-4">Default</div>
                    <div class="flex gap-2">
                        <p-tag value="Primary" />
                        <p-tag severity="success" value="Success" />
                        <p-tag severity="info" value="Info" />
                        <p-tag severity="warn" value="Warning" />
                        <p-tag severity="danger" value="Danger" />
                    </div>

                    <div class="font-semibold my-4">Pills</div>
                    <div class="flex gap-2">
                        <p-tag value="Primary" [rounded]="true" />
                        <p-tag severity="success" value="Success" [rounded]="true" />
                        <p-tag severity="info" value="Info" [rounded]="true" />
                        <p-tag severity="warn" value="Warning" [rounded]="true" />
                        <p-tag severity="danger" value="Danger" [rounded]="true" />
                    </div>

                    <div class="font-semibold my-4">Icons</div>
                    <div class="flex gap-2">
                        <p-tag icon="pi pi-user" value="Primary" />
                        <p-tag icon="pi pi-check" severity="success" value="Success" />
                        <p-tag icon="pi pi-info-circle" severity="info" value="Info" />
                        <p-tag icon="pi pi-exclamation-triangle" severity="warn" value="Warning" />
                        <p-tag icon="pi pi-times" severity="danger" value="Danger" />
                    </div>
                </div>

                <div class="card">
                    <div class="font-semibold text-xl mb-4">Chip</div>
                    <div class="font-semibold mb-4">Basic</div>
                    <div class="flex items-center flex-col sm:flex-row">
                        <p-chip label="Action" styleClass="m-1" />
                        <p-chip label="Comedy" styleClass="m-1" />
                        <p-chip label="Mystery" styleClass="m-1" />
                        <p-chip label="Thriller" styleClass="m-1" [removable]="true" />
                    </div>

                    <div class="font-semibold my-4">Icon</div>
                    <div class="flex items-center flex-col sm:flex-row">
                        <p-chip label="Apple" icon="pi pi-apple" styleClass="m-1" />
                        <p-chip label="Facebook" icon="pi pi-facebook" styleClass="m-1" />
                        <p-chip label="Google" icon="pi pi-google" styleClass="m-1" />
                        <p-chip label="Microsoft" icon="pi pi-microsoft" styleClass="m-1" [removable]="true" />
                    </div>

                    <div class="font-semibold my-4">Image</div>
                    <div class="flex items-center flex-col sm:flex-row">
                        <p-chip label="Amy Elsner" image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" styleClass="m-1" />
                        <p-chip label="Asiya Javayant" image="https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png" styleClass="m-1" />
                        <p-chip label="Onyama Limba" image="https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png" styleClass="m-1" />
                        <p-chip label="Xuxue Feng" image="https://primefaces.org/cdn/primeng/images/demo/avatar/xuxuefeng.png" styleClass="m-1" [removable]="true" />
                    </div>
                </div>
            </div>
        </div>
    `
})
export class MiscDemo {
    value = 0;

    interval: any;

    ngOnInit() {
        this.interval = setInterval(() => {
            this.value = this.value + Math.floor(Math.random() * 10) + 1;
            if (this.value >= 100) {
                this.value = 100;
                clearInterval(this.interval);
            }
        }, 2000);
    }

    ngOnDestroy() {
        clearInterval(this.interval);
    }
}
