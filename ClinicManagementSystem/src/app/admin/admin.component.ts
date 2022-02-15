import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  username = sessionStorage.getItem('userName');
  constructor(private router: Router, private authService: AuthService ) { }

  ngOnInit(): void {

  }
 logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
