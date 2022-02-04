import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Doctor } from './doctor';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  //get all appointments
  appointments: Doctor[];

  constructor(private httpclient: HttpClient) {}

  //1.get staff details
  getStaffDetails(id: number): Observable<any> {
    return this.httpclient.get(environment.apiUrl + '/api/staff/' + id);
  }
}
