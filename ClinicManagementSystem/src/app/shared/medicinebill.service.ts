import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Medicinebill } from './medicinebill';

@Injectable({
  providedIn: 'root'
})
export class MedicinebillService {
  medicinebills:Medicinebill[];
  formData:Medicinebill=new Medicinebill();
  constructor(private httpClient:HttpClient) { }
  bindMedicineBill(){
    this.httpClient.get(environment.apiUrl+'/MedicineBill/ViewMedicineBills').toPromise().then(response=>{
      console.log("From Service: Got MedicineBill");
      console.log(response);
      this.medicinebills=response as Medicinebill[];
    })
  }
}
