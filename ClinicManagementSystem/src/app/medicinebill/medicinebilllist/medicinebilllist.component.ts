import { Component, OnInit } from '@angular/core';
import {MedicinebillService} from 'src/app/shared/medicinebill.service';
@Component({
  selector: 'app-medicinebilllist',
  templateUrl: './medicinebilllist.component.html',
  styleUrls: ['./medicinebilllist.component.scss']
})
export class MedicinebilllistComponent implements OnInit {
  page:number=1;
  filter:string;
  age:number;
  constructor(public medicinebillsservice:MedicinebillService) { }

  ngOnInit(): void {
    this.medicinebillsservice.bindMedicineBill();
    var value=<HTMLElement>document.getElementById('age');
    let date=new Date(value.innerHTML);
    this.age=ageCalculator(date);
    console.log(date);
    let day=<HTMLElement>document.getElementById('no');
    value.innerHTML=""+this.age;
    
  }
}


  function ageCalculator(date:Date):number{
  
    const convertAge = new Date(date);
    const timeDiff = Math.abs(Date.now() - convertAge.getTime());
    return (Math.floor((timeDiff / (1000 * 3600 * 24))/365));
  
}


