import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-footer',
    changeDetection: ChangeDetectionStrategy.Eager,
    template: `<div class="layout-footer">
        SPARKED by
        <a href="https://optimus.openng.org" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">Optimus UI</a>
    </div>`
})
export class AppFooter {}
