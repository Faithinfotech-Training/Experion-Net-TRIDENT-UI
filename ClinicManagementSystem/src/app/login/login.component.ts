import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Staff } from '../shared/class/staff';
import { User } from '../shared/class/user';
import { AuthService } from '../shared/services/auth.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  //declare variables
  loginForm!: FormGroup;
  isSubmitted = false;
  error = '';
  loginUser: any = new User();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    //creates a reactive form model
    this.loginForm = this.formBuilder.group({
      //FormControlname Fields
      LoginId: ['', [Validators.required]],
      Password: ['', [Validators.required]],
    });
    console.log(this.loginForm.value);
  }
  get formControls() {
    return this.loginForm.controls;
  }

  //login verify
  loginCredentials() {
    console.log('hello login');
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      console.log('invalid');
    }
    if (this.loginForm.valid) {
      console.log('valid form');
      //calling login method authservice for authentication and authorise
      this.authService.loginVerify(this.loginForm.value).subscribe((data) => {
        console.log(data);
        console.log('data returned');
        this.loginUser = data;

        //username,rolid and token
        sessionStorage.setItem('userName', this.loginUser.LoginId);
        sessionStorage.setItem('accessRole', this.loginUser.RoleId);
        sessionStorage.setItem('token', this.loginUser.token);
        console.log(sessionStorage.getItem('userName'));
        console.log(sessionStorage.getItem('accessRole'));
        console.log(sessionStorage.getItem('token'));

        //check the role based on roleid
        if (this.loginUser.RoleId === 1) {
          console.log('Doctor');
          localStorage.setItem('userName', this.loginUser.LoginId);
          localStorage.setItem('accessRole', this.loginUser.RoleId.toString());
          sessionStorage.setItem('userName', this.loginUser.LoginId);
          this.router.navigateByUrl('/doctor');
        }        
        else if (this.loginUser.RoleId === 4) {
          console.log('Lab-Technician');
          localStorage.setItem('userName', this.loginUser.LoginId);
          localStorage.setItem('accessRole', this.loginUser.RoleId.toString());
          sessionStorage.setItem('userName', this.loginUser.LoginId);
          this.router.navigateByUrl('/patient-list');
        }
        else {
          this.error = 'Sorry not authorised to access this page';
          this.toastr.error(
            'Sorry not authorised to access this page',
            'Error'
          );
        }
      });
    }
  }
}
