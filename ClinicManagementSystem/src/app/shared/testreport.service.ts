import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import{Testreport} from './testreport';

@Injectable({
  providedIn: 'root'
})
export class TestreportService {
  testreports:Testreport[];
  formData:Testreport=new Testreport();
  constructor(private httpClient:HttpClient) {}
  bindListTestReports(){
    this.httpClient.get(environment.apiUrl+'/TestReports/').toPromise().then(response=>{
      console.log("From Service");
      console.log(response);
      this.testreports=response as Testreport[];
    })
  }

}
