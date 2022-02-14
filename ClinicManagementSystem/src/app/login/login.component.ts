import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Staff} from '../shared/class/staff';
import { AuthService } from '../shared/services/auth.service';
import { NgForm } from '@angular/forms';

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
  loginUser: any = new Staff();


  constructor(private formBuilder: FormBuilder, private router: Router,private authService:AuthService ) {}

  ngOnInit(): void {
    //creates a reactive form model
    this.loginForm = this.formBuilder.group({
      //FormControlname Fields
      UserName: ['', [Validators.required]],
      Password: ['', [Validators.required]],
    });
    console.log(this.loginForm.value);
  }
  //login verify
  loginCredentials() {
    console.log('hello');
  }
}
