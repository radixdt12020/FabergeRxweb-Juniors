import { gridColumn, actionColumn } from "@rxweb/grid";
@actionColumn({
    name: 'action',
    allowSorting: false,
    configuredTemplate: { templateName: 'articleTypeActionTemplate' }, columnIndex: 3, headerTitle: 'Action', class: ['div-td'.split(' ')]
})
export class  vArticleLookUpBase{

   
        @gridColumn({ visible: false, columnIndex: 0, allowSorting: true, headerKey: 'id', keyColumn: true })
        id: number;
       


       
        @gridColumn({ visible: true, columnIndex: 1, allowSorting: true, headerKey: 'ArticleName', headerTitle: 'ArticleName', keyColumn: false })
        name: string;
        

        
         @gridColumn({ visible: true, columnIndex: 2, allowSorting: true, headerKey: 'DisplayOrder', headerTitle: 'DisplayOrder', keyColumn: false })
        displayOrder: string;
   
}