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
import { Medicinedetails } from 'src/app/shared/class/medicinedetails';
import { Testdetails } from 'src/app/shared/class/testdetails';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-viewappointment',
  templateUrl: './viewappointment.component.html',
  styleUrls: ['./viewappointment.component.scss'],
})
export class ViewappointmentComponent implements OnInit {
  // visible non visible
  visible: boolean = false;
  show: boolean = false;
  //form declaration
  //1. form for notes
  notesForm: FormGroup;

  //declare variables
  username = sessionStorage.getItem('userName');
  staffId = sessionStorage.getItem('staffId');
  appointmentId: number = 0;
  patientId: number;
  DoctorId: number;

  patch: any; // Updating Status
  //----Medicine Group-----------
  medicineAdvice: any;
  medicineDetails: any;
  MedDetails: Array<Medicinedetails> = [];
  MedQty: number = 0;
  MedId: number = 0;
  MedAdId: number = 0; // to show response of Medicine Advice
  //----------------------------
  testAdvice: any;
  testDetails: any;
  TestDetails: Array<Testdetails> = [];
  TestId: number = 0;
  TestAdId: number = 0; //to show response of Test Advice
  //------------------------------
  public patientDetails: Observable<any>;
  // form controls
  addPostForm!: FormGroup;
  isSubmitted = false;
  error = '';
  addedNote: any = new Notes();
  myNote: string = '';
  PharmID: number = 0;
  TechID: number = 0;

  //selected lab tests
  labTests: Array<Test> = [];
  prescriptions: any[] = [];
  //test
  TestName: string;

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
    console.log('Binding Appointments');
    this.doctorService.bindListAppointmentsByID(+this.patientId);
    console.log('patient id is ' + this.patientId);

    // this.appointmentId = this.doctorService.appointmentId;

    this.notesForm = new FormGroup({
      NoteId: new FormControl(0),
      Note: new FormControl(''),
      DoctorId: new FormControl(+this.staffId),
      PatientId: new FormControl(0),
      AppointmentId: new FormControl(+this.patientId),
    });

    console.log('patient details');
    this.doctorService.bindlistPatientNotes(+this.patientId);
    this.doctorService.BindPharmList();
    this.doctorService.BindTechnicianList();
    this.doctorService.bindListTests();
    this.doctorService.bindListMedicines();
  }
  //get form controls
  get formControls() {
    return this.addPostForm.controls;
  }
  // ? form submission notes
  noteSubmit(notes) {
    console.log('notes submitted');
    console.log(notes);

    if (notes.NoteId == 0 || notes.NoteId == null) {
      this.doctorService.insertNotes(notes).subscribe(
        (res) => {
          console.log(res);
          this.toastr.success('Success', 'Note Added');

          window.location.reload();
        },
        (err) => {
          console.log(err);
          this.toastr.error('Error', 'Note not Added');
        }
      );
    } else {
      this.doctorService.updateNotes(notes).subscribe(
        (res) => {
          console.log(res);
          this.toastr.success('Success', 'Note Updated');

          window.location.reload();
        },
        (err) => {
          console.log(err);
          this.toastr.error('Error', 'Note not Updated');
        }
      );
    }
  }

  //logout function
  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    let addId = this.doctorService.formData.NoteId;
    if (addId == 0 || addId == null) {
      this.insertNote(form.value);
      console.log('posted the values');
      this.toastr.success('Success', 'Inserted');

      this.resetForm(form);
    } else {
      //update
      console.log('updated');
      this.updateNote(form);
      this.resetForm(form);
      this.toastr.success('Success', 'Updated');
    }
  }
  //insert method
  insertNote(form: NgForm) {
    console.log('inserted record');
    this.doctorService.insertNotes(form.value).subscribe(
      (res) => {
        console.log(res);
        console.log('success post');
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

  //push labtest to labtest array
  addLabTest(test) {
    this.labTests.push(test);
    console.log(test.value);
    console.log('labtest added');
  }

  //push prescription to prescription array
  addPrescription(prescription) {
    this.prescriptions.push(prescription);
  }
  //============================Medicine Advice=========================
  addMedicineadvice(pharmId: number) {
    this.medicineAdvice = {};
    this.appointmentId = this.doctorService.appointmentId;
    this.medicineAdvice.AppointmentId = this.appointmentId;
    this.medicineAdvice.DoctorId = +this.staffId;
    this.medicineAdvice.PharmacistId = +pharmId;
    console.log(this.medicineAdvice);
    this.AddMedAdv(this.medicineAdvice);
    this.show = !this.show;
    this.toastr.success('Medicine Advice Added Successfully', 'Success!');
    //----------Adding Medicine Advice---------------
    //this.MedAdId=1;
    //alert('Appointment Id:'+this.appointmentId+' Doctor ID:'+this.staffId +' PharmId:'+pharmId);
  }
  AddMedAdv(medadv: any) {
    console.log('Inserting  Medicine Advice record');
    this.doctorService.insertMedicineAdvice(medadv).subscribe(
      (res) => {
        console.log(res);
        this.MedAdId = +res;
        console.log('Inserted Medicine Advice');
      },
      (error) => {
        console.log(error);
      }
    );
  }
  //============================Medicine Details=========================
  addMedPrescription(Mid: number, Mqty: number) {
    this.toastr.show('Added Medicine Id: ' + Mid + 'and Quantity : ' + Mqty);
    this.medicineDetails = {};
    this.medicineDetails.MedicineAdviceId = +this.MedAdId;
    this.medicineDetails.MedicineId = +Mid;
    this.medicineDetails.Quantity = +Mqty;
    console.log(this.medicineDetails);
    this.MedDetails.push(this.medicineDetails);
  }
  MedSubmit() {
    for (let i = 0; i < this.MedDetails.length; i++) {
      console.log(this.MedDetails[i]);
      this.doctorService.insertMedicineDetails(this.MedDetails[i]).subscribe(
        (res) => {
          console.log(res);
          console.log('Inserted Medicine Detail' + i);
          this.show = !this.show;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  //=====================Test Advice / Report=======================
  addLabTestAdvice(techId: number) {
    //alert('Appointment Id:'+this.appointmentId+' Doctor ID:'+this.staffId +' LabTechId:'+techId);
    this.testAdvice = {};
    this.testAdvice.AppointmentId = +this.doctorService.appointmentId;
    this.testAdvice.DoctorId = +this.staffId;
    this.testAdvice.LabTechnicianId = +techId;
    this.testAdvice.TestAmount = 0;
    console.log(this.testAdvice);
    this.AddTestAdv(this.testAdvice); //uncomment
    // show div
    this.visible = !this.visible;
  }
  AddTestAdv(testadv: any) {
    console.log('Inserting  Test Advice record');
    this.doctorService.insertMedicineAdvice(testadv).subscribe(
      (res) => {
        console.log(res);
        this.TestAdId = +res;
        console.log('Inserted Test Advice');
      },
      (error) => {
        console.log(error);
      }
    );
  }
  //-------------------Test Details---------------
  addTestPrescription(TId: number) {
    // alert('Added Test Id: ' + TId);
    this.toastr.show('Added Test Id: ' + TId);
    this.testDetails = {};
    this.testDetails.TestId = +TId;
    this.testDetails.TestReportId = +this.TestAdId;
    this.testDetails.TestValue = 0;
    this.TestDetails.push(this.testDetails);
  }
  TestSubmit() {
    for (let i = 0; i < this.TestDetails.length; i++) {
      console.log(this.TestDetails[i]);
      this.doctorService.insertTestDetails(this.TestDetails[i]).subscribe(
        (res) => {
          console.log(res);
          console.log('Inserted Test Details' + i);
          this.visible = !this.visible;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  //-----------------------------Mark as Done---------------------------------
  markAsDone() {
    if (confirm('Do you want to  Mark as Done ?')) {
      this.patch = [{ value: 3, path: 'status', op: 'replace' }];
      this.UpdatePath(this.doctorService.appointmentId, this.patch);
      console.log(this.patch);
      console.log(
        'Appointment :' + this.doctorService.appointmentId + 'is Marked Done'
      );
      // this.toaster.info("Patient is Serviced ","Doctor ");
      // Navigate Back
    }
  }
  UpdatePath(aid: number, pah: any) {
    this.doctorService.UpdateAppointment(aid, pah).subscribe(
      (result) => {
        console.log(result);
        // alert('Patient Got Served');
        this.toastr.success('Patient Got Served', 'Doctor');
        this.toastr.info('Sucessfully Updated', 'Serviced Patient');
        //this.router.navigateByUrl('/doctor');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
