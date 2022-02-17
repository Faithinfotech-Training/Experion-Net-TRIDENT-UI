import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DoctorService } from 'src/app/shared/services/doctor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Notes } from 'src/app/shared/class/notes';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Test } from 'src/app/shared/class/test';

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
  myNote: string = '';

  //selected lab tests
  labTests: Test[] = [];
  prescriptions: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute,
    public doctorService: DoctorService,
    private httpClient: HttpClient,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.patientId = this.route.snapshot.params['id'];
    this.doctorService.bindListAppointmentsByID(+this.patientId);

    this.addPostForm = this.formBuilder.group({
      //FormControlname Fields
      AppointmentId: this.doctorService.appointmentId,
      PatientId: this.patientId,
      StaffId: this.staffId,
      Note: [this.myNote, [Validators.required]],
    });

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
    console.log(this.addPostForm.value);
    console.log('hello form submitted using form submit');
  }
  //log the post values
  DoPost(post) {
    this.myNote = post;
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    let addId = this.doctorService.formData.NoteId;
    if (addId == 0 || addId == null) {
      this.insertNote(form.value);
      console.log('posted');

      this.resetForm(form);
    } else {
      //update
      console.log('updated');
      this.updateNote(form);
      this.resetForm(form);
      this.showSuccess();
    }
  }
  //insert method
  insertNote(form: NgForm) {
    console.log('inserted record');
    this.doctorService.insertNotes(form.value).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //update employee record
  updateNote(form: NgForm) {
    console.log('updated record');
    this.doctorService.updateNotes(form.value).subscribe(
      (res) => {
        console.log(res);
        console.log('success put');
      },
      (error) => {
        console.log(error);
        console.log('error');
      }
    );
  }

  //clear all contents after submit-- initialise
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }

  showSuccess() {
    this.toastr.success('Employee Updated Successfully', 'Success!');
  }
  showFailure() {
    this.toastr.error('Employee Updated Failed', 'Failure!');
  }

  //push labtest to labtest array
  addLabTest(test) {
    this.labTests.push(test);
    console.log('labtest added');
  }

  //push prescription to prescription array
  addPrescription(prescription) {
    this.prescriptions.push(prescription);
  }
 
}
