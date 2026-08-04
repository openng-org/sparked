import { Component, inject, signal } from '@angular/core';
import { RippleModule } from '@openng/optimus-ui/ripple';
import { TableModule } from '@openng/optimus-ui/table';
import { ButtonModule } from '@openng/optimus-ui/button';
import { CurrencyPipe } from '@angular/common';
import { Product, ProductService } from '@/app/pages/service/product.service';

@Component({
    standalone: true,
    selector: 'app-recent-sales-widget',
    imports: [TableModule, ButtonModule, RippleModule, CurrencyPipe],
    template: `<div class="card mb-8!">
        <div class="font-semibold text-xl mb-4">Recent Sales</div>
        <p-table [value]="products()" [paginator]="true" [rows]="5" responsiveLayout="scroll">
            <ng-template #header>
                <tr>
                    <th>Image</th>
                    <th pSortableColumn="name">Name <p-sortIcon field="name" /></th>
                    <th pSortableColumn="price">Price <p-sortIcon field="price" /></th>
                    <th>View</th>
                </tr>
            </ng-template>
            <ng-template #body let-product>
                <tr>
                    <td style="width: 15%; min-width: 5rem;">
                        <img src="/demo/images/product/{{ product.image }}" class="shadow-lg" alt="{{ product.name }}" width="50" />
                    </td>
                    <td style="width: 35%; min-width: 7rem;">{{ product.name }}</td>
                    <td style="width: 35%; min-width: 8rem;">{{ product.price | currency: 'USD' }}</td>
                    <td style="width: 15%;">
                        <button pButton pRipple type="button" icon="pi pi-search" class="p-button p-component p-button-text p-button-icon-only"></button>
                    </td>
                </tr>
            </ng-template>
        </p-table>
    </div>`,
    providers: [ProductService]
})
export class RecentSalesWidget {
    products = signal<Product[]>([]);

    productService = inject(ProductService);

    ngOnInit() {
        this.productService.getProductsSmall().then((data) => this.products.set(data));
    }
}
