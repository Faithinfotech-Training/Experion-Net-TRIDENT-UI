import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/shared/appointment.service';


@Component({
  selector: 'app-appointmentlist',
  templateUrl: './appointmentlist.component.html',
  styleUrls: ['./appointmentlist.component.scss']
})
export class AppointmentListComponent implements OnInit {
page:number=1;
filter:string;
  constructor(public appointmentservice:AppointmentService) { }

  ngOnInit(): void {
    this.appointmentservice.bindListPosts();
    
   
  }
}




