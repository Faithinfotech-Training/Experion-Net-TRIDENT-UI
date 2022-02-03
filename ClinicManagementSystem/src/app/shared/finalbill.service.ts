import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Finalbill } from './finalbill';

@Injectable({
  providedIn: 'root'
})
export class FinalbillService {
 bill:Finalbill[];
  formData:Finalbill =new Finalbill();
  constructor(private httpClient:HttpClient) {}
  bindListFinalBill(){
    this.httpClient.get(environment.apiUrl+'/Bills/').toPromise().then(response=>{
      console.log("From Service");
      console.log(response);
      this.bill=response as Finalbill[];
    })
}
}
