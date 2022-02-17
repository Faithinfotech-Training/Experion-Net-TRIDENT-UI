import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PatientService } from 'src/app/shared/services/patient.service';
import { ReceptionistService } from 'src/app/shared/services/receptionist.service';

@Component({
  selector: 'app-addappointment',
  templateUrl: './addappointment.component.html',
  styleUrls: ['./addappointment.component.scss']
})
export class AddappointmentComponent implements OnInit {
  dates =<HTMLInputElement> document.getElementById('date');
  dmin;
  tokenlen;
  frame;
  constructor(public receptionservice:ReceptionistService,public patientservice:PatientService,private toaster:ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.dmin=new Date().toISOString().slice(0, 10)+ "T00:00";
  this.receptionservice.bindDoctorList();
this.tokenlen=Math.floor(Math.random()*(30-1+1)+1);
this.patientservice.bindListPatients();

  }
 
OnSubmit(form:NgForm)
{
  form.value.DoctorId=+form.value.DoctorId;
  form.value.PatientId=+form.value.PatientId;
  form.value.Status=+1;
  form.value.ReceptionistId=+sessionStorage.getItem("staffId");
  this.addAppointment(form);
console.log(form.value);

}
addPatients()
{
  console.log("Clicked");
  this.router.navigateByUrl('/add-patient');

}
addAppointment(form:NgForm)
{
  console.log('Adding Appointment')
  this.receptionservice.AddAppointment(form.value).subscribe(
    (result)=>{
      console.log(form.value);
      console.log(result);
      this.toaster.success("Sucessfully Added","Appointment");
    },
    (error)=>{
      console.log(error);
    }
  );
  form.resetForm();
  this.tokenlen=Math.floor(Math.random()*(30-1+1)+1);
}
 isDateBeforeToday() {
      let todayDate = new Date();
      let h=todayDate.getHours();
      let m=todayDate.getMinutes();
      let dat=todayDate.toISOString().slice(0, 10) + "T"+h+":"+m;
      console.log(dat);
      //console.log(this.dates.value);
      /*if(this.dates.value<dat)
      {
          alert("You Can't Book for already past time");
          this.dates.value=dat;
          this.dates.focus();
      }*/
  }
}
