import { Component, OnInit } from '@angular/core';
import { AppGrid } from 'src/app/app-grid';
import { vArticleLookUpBase } from 'src/app/v-article-type-list';

@Component({
  selector: 'app-rx-grid',
  templateUrl: './rx-grid.component.html',
  styleUrls: ['./rx-grid.component.css']
})
export class RxGridComponent implements OnInit {

  gridConfig: AppGrid;
  journalArticleTypesList = [];
  constructor() { 
    this.staticData();
  }

  ngOnInit(): void {
    this.bindGrid();
  }

  bindGrid(){
    this.gridConfig = new AppGrid(
      this.journalArticleTypesList, vArticleLookUpBase);
       this.gridConfig.design(document.getElementById("grid"));
  }

  staticData(){
    this.journalArticleTypesList= [
          {"id":1,"journalId":9,"name":"Case Studies","displayOrder":1},
          {"id":2,"journalId":9,"name":"Research Paper","displayOrder":2},
          {"id":3,"journalId":9,"name":"Short Communication","displayOrder":3},
          {"id":4,"journalId":9,"name":"demo","displayOrder":4},
          {"id":5,"journalId":9,"name":"demo2","displayOrder":5},
          {"id":6,"journalId":9,"name":"Editorial","displayOrder":6},
          {"id":7,"journalId":9,"name":"Review Article","displayOrder":7},
          {"id":8,"journalId":9,"name":"Book Review","displayOrder":8},
          {"id":9,"journalId":9,"name":"Technical Note","displayOrder":9},
          {"id":10,"journalId":9,"name":"demo3","displayOrder":10},
          {"id":11,"journalId":9,"name":"demo4","displayOrder":11},
          {"id":12,"journalId":9,"name":"demo5","displayOrder":12}]
      
   }

}
