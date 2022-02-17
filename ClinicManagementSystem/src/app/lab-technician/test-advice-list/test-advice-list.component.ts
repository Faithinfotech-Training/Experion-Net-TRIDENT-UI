import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LabtTestService } from 'src/app/shared/services/labt-test.service';

@Component({
  selector: 'app-test-advice-list',
  templateUrl: './test-advice-list.component.html',
  styleUrls: ['./test-advice-list.component.scss']
})
export class TestAdviceListComponent implements OnInit {

  loggedUser:string;
  page:number=1;
  filter:string;
  constructor(private authService: AuthService,public labtestService:LabtTestService,private router: Router) { }

  ngOnInit(): void {
    this.loggedUser = localStorage.getItem("userName");
    this.labtestService.bindListTestAdvices();
  }

  //logout
  logOut(){
    this.authService.logout();
    this.router.navigateByUrl('login');
  }
}
