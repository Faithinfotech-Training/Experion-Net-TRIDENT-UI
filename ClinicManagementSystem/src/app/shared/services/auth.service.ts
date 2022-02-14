import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Staff } from '../class/staff';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  //loginverify
  public loginVerify(staff: Staff) {
    return this.httpClient.get(
      environment.apiUrl + '/api/login/' + staff.UserName + '&' + staff.Password
      ///api/Login/sreehari&password
    );
    console.log('loginverify');
  }

  //logout
  public logout() {
    localStorage.removeItem('userName');
    localStorage.removeItem('password');
    sessionStorage.removeItem('userName');
  }
}
