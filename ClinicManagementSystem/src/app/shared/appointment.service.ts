import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  appointments:Appointment[];
  formData:Appointment=new Appointment();
  constructor(private httpClient:HttpClient) {}
  bindListPosts(){
    this.httpClient.get(environment.apiUrl+'/Appointments/ViewAppointments').toPromise().then(response=>{
      console.log("From Service");
      console.log(response);
      this.appointments=response as Appointment[];
    })
  }
}
