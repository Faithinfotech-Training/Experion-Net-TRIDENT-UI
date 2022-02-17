import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Advice } from '../class/advice';
import { Medicine } from '../class/medicine';

@Injectable({
  providedIn: 'root',
})
export class PharmacistService {
  //declare variables
  advice: Advice[];
  medAdvice: Advice[];
  med: Medicine[];

  // form controls
  //retrieve all data from getAll employees -- http -- HttpClient
  medicines: Medicine[]; // all employee data
  medicinesData: Medicine[];
  formData: Medicine = new Medicine(); // stores one employee details

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
  bindListMedicines() {
    this.httpClient
      .get(environment.apiUrl + '/api/Medicines')
      .toPromise()
      .then((response) => {
        this.med = response as Medicine[];
        console.log(response);
      });
  }

  //crud for medicines
  //insert medicines
  insertMedicine(medicines: Medicine): Observable<any> {
    return this.httpClient.post(
      environment.apiUrl + '/api/Medicines',
      medicines
    );
  }

  //update medicines
  updateMedicine(medicines: Medicine): Observable<any> {
    return this.httpClient.put(
      environment.apiUrl + '/api/Medicines',
      medicines
    );
  }

  //delete medicines
  deleteMedicine(id: number) {
    this.httpClient
      .delete(environment.apiUrl + '/api/Medicines/' + id)
      .toPromise()
      .then((response) => {
        console.log(response);
      });
  }

  //bind list medicines by id
  bindListMedicinesById(id: number) {
    this.httpClient
      .get(environment.apiUrl + '/api/Medicines/' + id)
      .toPromise()
      .then((response) => {
        this.medicinesData = response as Medicine[];
        console.log(response);
      });
  }

  // get medicines by id
  getMedicineById(id: number): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/api/Medicines/' + id);
  }
}
