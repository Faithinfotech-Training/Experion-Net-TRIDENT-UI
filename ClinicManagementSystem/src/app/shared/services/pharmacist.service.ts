import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Advice } from '../class/advice';
import { Medicine } from '../class/medicine';
import { Medicinebill } from '../class/medicinebill';

@Injectable({
  providedIn: 'root',
})
export class PharmacistService {
  //declare variables
  advice: Advice[];
  medAdvice: Advice[];
  med: Medicine[];
  medicinebills:Medicinebill[];

  constructor(private httpClient: HttpClient) {}

  bindListMedicineAdvices() {
    this.httpClient
      .get(environment.apiUrl + '/api/MedicineAdvice')
      .toPromise()
      .then((response) => {
        this.advice = response as Advice[];
        console.log(response);
      });
  }
  bindListMedicineAdvicesById(id: number) {
    this.httpClient
      .get(environment.apiUrl + '/api/MedicineAdvice/patient/' + id)
      .toPromise()
      .then((response) => {
        this.medAdvice = response as Advice[];
        console.log(response);
      });
  }
  bindMedicineBill(){
    this.httpClient.get(environment.apiUrl+'/api/MedicineBill/ViewMedicineBills').toPromise().then(response=>{
      console.log("From  Pharmacist Service: Got MedicineBills");
      console.log(response);
      this.medicinebills=response as Medicinebill[];
    })
  }
  bindListMedicines() {
    this.httpClient
      .get(environment.apiUrl + '/api/Medicines')
      .toPromise()
      .then((response) => {
        this.med = response as Medicine[];
        console.log(response);
      });
  }
}
