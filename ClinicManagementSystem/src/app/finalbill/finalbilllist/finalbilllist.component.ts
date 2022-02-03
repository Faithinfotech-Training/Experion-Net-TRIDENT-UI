import { Component, OnInit } from '@angular/core';
import{FinalbillService} from 'src/app/shared/finalbill.service';
@Component({
  selector: 'app-finalbilllist',
  templateUrl: './finalbilllist.component.html',
  styleUrls: ['./finalbilllist.component.scss']
})
export class FinalbilllistComponent implements OnInit {
  page:number=1;
  filter:string;
  constructor(public finalbillservice:FinalbillService) { }

  ngOnInit(): void {
    this.finalbillservice.bindListFinalBill();
  }

}
