import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Labtest } from './labtest';


@Injectable({
  providedIn: 'root'
})
export class LabtestService {

  tests:Labtest[];
  formData: Labtest = new Labtest();
  constructor(private httpClient: HttpClient) { }


  bindListLabTests(){
    this.httpClient.get(environment.apiUrl + '/api/LabTests').toPromise().then(
      response => {
        console.log("from service");
        console.log(response);
        this.tests = response as Labtest[]
      }
    )
  }

   //delete Post
   deleteTest(id:number){
    return this.httpClient.delete(environment.apiUrl+ "/api/LabTests/" +id);
  }
}
