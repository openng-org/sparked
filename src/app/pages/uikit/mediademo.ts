import { Component, inject, OnInit, signal } from '@angular/core';
import { ButtonModule } from '@openng/optimus-ui/button';
import { CarouselModule } from '@openng/optimus-ui/carousel';
import { GalleriaModule } from '@openng/optimus-ui/galleria';
import { ImageModule } from '@openng/optimus-ui/image';
import { TagModule } from '@openng/optimus-ui/tag';
import { PhotoService } from '@/app/pages/service/photo.service';
import { Product, ProductService } from '@/app/pages/service/product.service';

@Component({
    selector: 'app-media-demo',
    standalone: true,
    imports: [CarouselModule, ButtonModule, GalleriaModule, ImageModule, TagModule],
    template: `<div class="card">
            <div class="font-semibold text-xl mb-4">Carousel</div>
            <p-carousel [value]="products()" [numVisible]="3" [numScroll]="3" [circular]="false" [responsiveOptions]="carouselResponsiveOptions">
                <ng-template let-product #item>
                    <div class="border border-surface rounded-border m-2 p-4">
                        <div class="mb-4">
                            <div class="relative mx-auto">
                                <img src="/demo/images/product/{{ product.image }}" [alt]="product.name" class="w-full rounded-border" />
                                <div class="absolute bg-black/70 rounded-border" [style]="{ 'left.px': 5, 'top.px': 5 }">
                                    <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)" />
                                </div>
                            </div>
                        </div>
                        <div class="mb-4 font-medium">{{ product.name }}</div>
                        <div class="flex justify-between items-center">
                            <div class="mt-0 font-semibold text-xl">{{ '$' + product.price }}</div>
                            <span>
                                <p-button icon="pi pi-heart" severity="secondary" [outlined]="true" />
                                <p-button icon="pi pi-shopping-cart" styleClass="ml-2" />
                            </span>
                        </div>
                    </div>
                </ng-template>
            </p-carousel>
        </div>

        <div class="card">
            <div class="font-semibold text-xl mb-4">Image</div>
            <p-image src="/demo/images/galleria/galleria10.jpg" alt="Image" width="250" />
        </div>

        <div class="card">
            <div class="font-semibold text-xl mb-4">Galleria</div>
            <p-galleria [value]="images()" [responsiveOptions]="galleriaResponsiveOptions" [containerStyle]="{ 'max-width': '640px' }" [numVisible]="5">
                <ng-template #item let-item>
                    <img [src]="item.itemImageSrc" style="width:100%" />
                </ng-template>
                <ng-template #thumbnail let-item>
                    <img [src]="item.thumbnailImageSrc" />
                </ng-template>
            </p-galleria>
        </div>`,
    providers: [ProductService, PhotoService]
})
export class MediaDemo implements OnInit {
    productService = inject(ProductService);

    photoService = inject(PhotoService);

    products = signal<Product[]>([]);

    images = signal<any[]>([]);

    galleriaResponsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '960px',
            numVisible: 4
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    carouselResponsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    ngOnInit() {
        this.productService.getProductsSmall().then((products) => this.products.set(products));
        this.photoService.getImages().then((images) => this.images.set(images));
    }

    getSeverity(status: string) {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warn';
            case 'OUTOFSTOCK':
                return 'danger';
            default:
                return 'success';
        }
    }
}
