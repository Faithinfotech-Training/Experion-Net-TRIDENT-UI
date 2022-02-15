import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Patient } from '../class/patient';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  patients: Patient[];

  constructor(private httpClient: HttpClient) {}

  bindListAppointments(doctorId: number): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(
      environment.apiUrl +
        '/api/Appointments/ViewAppointmentByDoctorId/' +
        doctorId
    );
  }
}
