import { Component, computed, inject, input, ChangeDetectionStrategy } from '@angular/core';
import { ButtonModule } from '@openng/optimus-ui/button';
import { StyleClassModule } from '@openng/optimus-ui/styleclass';
import { AppConfigurator } from './app.configurator';
import { LayoutService } from '@/app/layout/service/layout.service';

@Component({
    selector: 'app-floating-configurator',
    imports: [ButtonModule, StyleClassModule, AppConfigurator],
    changeDetection: ChangeDetectionStrategy.Eager,
    template: `
        <div class="flex gap-4 top-8 right-8" [class.fixed]="float()">
            <p-button type="button" (onClick)="toggleDarkMode()" [rounded]="true" [icon]="isDarkTheme() ? 'pi pi-moon' : 'pi pi-sun'" severity="secondary" />
            <div class="relative">
                <p-button icon="pi pi-palette" pStyleClass="@next" enterFromClass="hidden" enterActiveClass="animate-scalein" leaveToClass="hidden" leaveActiveClass="animate-fadeout" [hideOnOutsideClick]="true" type="button" rounded />
                <app-configurator />
            </div>
        </div>
    `
})
export class AppFloatingConfigurator {
    LayoutService = inject(LayoutService);

    float = input<boolean>(true);

    isDarkTheme = computed(() => this.LayoutService.layoutConfig().darkTheme);

    toggleDarkMode() {
        this.LayoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
    }
}
