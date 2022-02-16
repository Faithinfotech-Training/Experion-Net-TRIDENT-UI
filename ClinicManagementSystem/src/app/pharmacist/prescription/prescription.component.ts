import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { PharmacistService } from '../../shared/services/pharmacist.service';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.scss'],
})
export class PrescriptionComponent implements OnInit {
  patientId: number = 0;
  //declare variables
  username = sessionStorage.getItem('userName');
  staffId = sessionStorage.getItem('staffId');

  constructor(
    private router: Router,
    private authService: AuthService,
    public pharmService: PharmacistService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.patientId = this.route.snapshot.params['id'];
    console.log(this.patientId);

    this.pharmService.bindListMedicineAdvicesById(this.patientId);
    // this.pharmService.bindListMedicineAdvicesById(3);
  }
  //logout function
  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
