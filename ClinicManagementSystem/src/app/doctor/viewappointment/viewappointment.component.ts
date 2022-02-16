import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DoctorService } from 'src/app/shared/services/doctor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Notes } from 'src/app/shared/class/notes';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-viewappointment',
  templateUrl: './viewappointment.component.html',
  styleUrls: ['./viewappointment.component.scss'],
})
export class ViewappointmentComponent implements OnInit {
  //declare variables
  username = sessionStorage.getItem('userName');
  staffId = sessionStorage.getItem('staffId');
  patientId: number;
  appointmentId = this.doctorService.appointmentId;
  public patientDetails: Observable<any>;
  // form controls
  addPostForm!: FormGroup;
  isSubmitted = false;
  error = '';
  addedNote: any = new Notes();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute,
    public doctorService: DoctorService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.addPostForm = this.formBuilder.group({
      //FormControlname Fields
      AppointmentId: this.doctorService.appointmentId,
      PatientId: this.patientId,
      StaffId: this.staffId,
      Notes: ['', [Validators.required]],
    });

    this.patientId = this.route.snapshot.params['id'];
    this.doctorService.bindListAppointmentsByID(+this.patientId);

    console.log('patient details');
    this.doctorService.bindlistPatientNotes(+this.patientId);

    this.doctorService.bindListTests();
    this.doctorService.bindListMedicines();
  }
  //get form controls
  get formControls() {
    return this.addPostForm.controls;
  }
  //logout function
  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  //addpost function
  addPost() {
    this.isSubmitted = true;
    if (this.addPostForm.invalid) {
      console.log('invalid');
    } else if (this.addPostForm.valid) {
      console.log('valid');
      this.addedNote.Notes = this.addPostForm.value.Notes;
      this.addedNote.PatientId = this.patientId;
      this.addedNote.StaffId = this.staffId;
      this.doctorService.addDoctorsNotes(
        +this.patientId,
        this.doctorService.appointmentId,
        +this.staffId,
        this.addedNote
      );
    }
  }
}
