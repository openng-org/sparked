import { Component, inject, OnInit, signal } from '@angular/core';
import { TreeNode } from '@openng/optimus-ui/api';
import { TreeModule } from '@openng/optimus-ui/tree';
import { FormsModule } from '@angular/forms';
import { TreeTableModule } from '@openng/optimus-ui/treetable';
import { NodeService } from '@/app/pages/service/node.service';

@Component({
    selector: 'app-tree-demo',
    standalone: true,
    imports: [FormsModule, TreeModule, TreeTableModule],
    template: `
        <div class="card">
            <div class="font-semibold text-xl">Tree</div>
            <p-tree [value]="treeValue()" selectionMode="checkbox" [(selection)]="selectedTreeValue" />
        </div>

        <div class="card">
            <div class="font-semibold text-xl mb-4">TreeTable</div>
            <p-treetable [value]="treeTableValue()" [columns]="cols" selectionMode="checkbox" [(selectionKeys)]="selectedTreeTableValue" dataKey="key" [scrollable]="true" [tableStyle]="{ 'min-width': '50rem' }">
                <ng-template #header let-columns>
                    <tr>
                        @for (col of columns; track col.field) {
                            <th>
                                {{ col.header }}
                            </th>
                        }
                    </tr>
                </ng-template>
                <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
                    <tr [ttRow]="rowNode" [ttSelectableRow]="rowNode">
                        @for (col of columns; track col.field; let i = $index) {
                            <td>
                                <span class="flex items-center gap-2">
                                    @if (i === 0) {
                                        <p-treeTableToggler [rowNode]="rowNode" />
                                        <p-treeTableCheckbox [value]="rowNode" />
                                    }
                                    {{ rowData[col.field] }}
                                </span>
                            </td>
                        }
                    </tr>
                </ng-template>
            </p-treetable>
        </div>
    `,
    providers: [NodeService]
})
export class TreeDemo implements OnInit {
    treeValue = signal<TreeNode[]>([]);

    treeTableValue = signal<TreeNode[]>([]);

    selectedTreeValue: TreeNode[] = [];

    selectedTreeTableValue = {};

    cols: any[] = [];

    nodeService = inject(NodeService);

    ngOnInit() {
        this.nodeService.getFiles().then((files) => this.treeValue.set(files));
        this.nodeService.getTreeTableNodes().then((files: any) => this.treeTableValue.set(files));

        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];

        this.selectedTreeTableValue = {
            '0-0': {
                partialChecked: false,
                checked: true
            }
        };
    }
}
