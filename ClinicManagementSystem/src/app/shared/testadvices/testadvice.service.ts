import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Testadvice } from './testadvice';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestadviceService {

  testadvices:Testadvice[];
  formData: Testadvice = new Testadvice();
  constructor(private httpClient: HttpClient) { }


  //get test advices
  bindListTestAdvices(){
    console.log("it coming here before api calling");
    this.httpClient.get(environment.apiUrl + '/api/TestAdvice/GetTestAdvice').toPromise().then(
      response => {
        console.log("from service");
        console.log(response);
        this.testadvices = response as Testadvice[]
      }
    )
  }

  //  //delete test advice
  //  deleteTestAdvices(id:number){
  //   return this.httpClient.delete(environment.apiUrl+ "/api/LabTests/" +id);
  // }

}









  

  