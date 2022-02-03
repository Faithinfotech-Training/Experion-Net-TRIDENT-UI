import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import{Consultationbill } from './consultationbill';

@Injectable({
  providedIn: 'root'
})
export class ConsultationbillService {
  consultationbill:Consultationbill[];
  formData:Consultationbill =new Consultationbill();
  constructor(private httpClient:HttpClient) {}
  bindListConsultancyBill(){
    this.httpClient.get(environment.apiUrl+'/ConsultationBill/ViewAllBills').toPromise().then(response=>{
      console.log("From Service");
      console.log(response);
      this.consultationbill=response as Consultationbill[];
    })
  }
}