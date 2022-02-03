import { Component, OnInit } from '@angular/core';
import{ConsultationbillService} from 'src/app/shared/consultationbill.service';
@Component({
  selector: 'app-consultationbill',
  templateUrl: './consultationbill.component.html',
  styleUrls: ['./consultationbill.component.scss']
})
export class ConsultationbillComponent implements OnInit {
  page:number=1;
  filter:string;
  constructor(public consultationbillservice:ConsultationbillService) { }
  ngOnInit(): void {
    this.consultationbillservice.bindListConsultancyBill();
    
  }

}
