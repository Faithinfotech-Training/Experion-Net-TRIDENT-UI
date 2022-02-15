import { HttpClient } from '@angular/common/http';
import { InvokeFunctionExpr } from '@angular/compiler';
import { Injectable } from '@angular/core';
import {Appointments} from '../class/appointments';
import {Consultationbill} from '../class/consultationbill';
import {Invoice} from '../class/invoice';
import {Appoint} from '../class/appoint';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceptionistService {
  appointments:Appointments[];
  appFormData:Appoint=new Appoint();
  conFormData:Consultationbill=new Consultationbill();
  consultationbills:Consultationbill[];
  bills:Invoice[];
  billFormData:Invoice=new Invoice();
  roles:any;
  constructor(private httpClient:HttpClient) { }
  bindListAppointments(){
    this.httpClient.get('https://localhost:44381/api/Appointments/ViewAppointments').toPromise().then(response=>{
      console.log("From Receptionist Service\n Fetching View Appointments");
      console.log(response);
      this.appointments=response as Appointments[];
    })
  }
  bindListConsultancyBill(){
    this.httpClient.get('https://localhost:44381/api/ConsultationBill/ViewAllBills').toPromise().then(response=>{
      console.log("From Receptionist Service\n Fetching Consultation Bills");
      console.log(response);
      this.consultationbills=response as Consultationbill[];
    })
}
bindListFinalBill(){
  this.httpClient.get('https://localhost:44381/api/Bills/').toPromise().then(response=>{
    console.log("From Receptionist Service \n Fetching Bills");
    console.log(response);
    this.bills=response as Invoice[];
  })
}
bindDoctorList(){
this.httpClient.get('https://localhost:44381/api/Role/Staff/1').toPromise().then(response=>{
  console.log("From Receptionist Service \n Fetching Doctor Lists");
  console.log(response);
  this.roles=response;
})
}

AddAppointment(form:NgForm):Observable<any>
{
  return this.httpClient.post('https://localhost:44381/api/Appointments',form);
}


}

