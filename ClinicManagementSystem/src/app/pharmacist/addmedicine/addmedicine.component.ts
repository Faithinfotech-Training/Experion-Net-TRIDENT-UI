import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { PharmacistService } from '../../shared/services/pharmacist.service';

@Component({
  selector: 'app-addmedicine',
  templateUrl: './addmedicine.component.html',
  styleUrls: ['./addmedicine.component.scss']
})
export class AddmedicineComponent implements OnInit {
   //declare variables
   username = sessionStorage.getItem('userName');
   staffId = sessionStorage.getItem('staffId');

  constructor(
    
    private router: Router,
    private authService: AuthService,
    public pharmService: PharmacistService
  ) { }

  ngOnInit(): void {
  }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
