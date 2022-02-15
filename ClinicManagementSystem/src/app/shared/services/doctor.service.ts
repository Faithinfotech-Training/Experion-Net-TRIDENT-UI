import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Appointments } from '../class/appointments';
import { Patient } from '../class/patient';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  patients: Patient[];
  appointments: Appointments[];

  constructor(private httpClient: HttpClient) {}

  bindListAppointments(id: number) {
    this.httpClient
      .get(
        environment.apiUrl + '/api/Appointments/ViewAppointmentByDoctorId/' + id
      )
      .toPromise()
      .then((response) => {
        this.appointments = response as Appointments[];
        console.log(response);
      });
  }

  bindListAppointmentsByID(id: number) {
    this.httpClient
      .get(environment.apiUrl + '/api/Appointments/ViewAppointmentById/' + id)
      .toPromise()
      .then((response) => {
        this.appointments = response as Appointments[];
        console.log(response);
      });
  }
}
