import { Component, OnInit } from '@angular/core';
import { LabtTestService } from 'src/app/shared/services/labt-test.service';

@Component({
  selector: 'app-viewreport',
  templateUrl: './viewreport.component.html',
  styleUrls: ['./viewreport.component.scss']
})
export class ViewreportComponent implements OnInit {
  page:number=1;
  filter:string;
  items = [];
 pageOfItems: Array<any>;
  constructor(public labtestservice:LabtTestService) { }

  ngOnInit(): void {
    this.labtestservice.bindListTestReports();
    this.items = Array(2).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}
}
