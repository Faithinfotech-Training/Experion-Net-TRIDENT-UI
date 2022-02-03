import { Component, OnInit } from '@angular/core';
import {TestreportService} from 'src/app/shared/testreport.service';

@Component({
  selector: 'app-testreportlist',
  templateUrl: './testreportlist.component.html',
  styleUrls: ['./testreportlist.component.scss']
})


export class TestreportlistComponent implements OnInit {
  page:number=1;
  filter:string;
  constructor(public testreportservice:TestreportService) { }
  ngOnInit(): void {
   this.testreportservice.bindListTestReports();
   
  }
  
}



