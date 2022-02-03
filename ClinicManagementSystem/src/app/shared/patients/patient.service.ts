import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PatientClass } from './patient-class';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  patients:PatientClass[];
  constructor(private httpClient: HttpClient) { }

  ///1
  //get all posts
  // getAllPatients():Observable<any>{
  //   return this.httpClient.get(environment.apiUrl + '/api/Post/GetAllPatients');
  // }

  ///2
  bindListPatients(){
    this.httpClient.get(environment.apiUrl + '/api/Patients/GetAllPatients').toPromise().then(
      response => {
        console.log("from service");
        console.log(response);
        this.patients = response as PatientClass[]
      }
    )
  }


}
