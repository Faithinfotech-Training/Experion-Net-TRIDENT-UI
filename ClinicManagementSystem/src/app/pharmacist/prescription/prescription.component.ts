import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AuthService } from '../../shared/services/auth.service';
import { PharmacistService } from '../../shared/services/pharmacist.service';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.scss'],
})
export class PrescriptionComponent implements OnInit {
  appointmentId: number = 0;
  //declare variables
  username = sessionStorage.getItem('userName');
  staffId = sessionStorage.getItem('staffId');
  medicineName: string;
  todayDate:Date=new Date();
  totalAmount:number=0;
  medicineBill:any;


  constructor(
    private router: Router,
    private authService: AuthService,
    public pharmService: PharmacistService,
    private route: ActivatedRoute,
    private toaster:ToastrService
  ) {}

  ngOnInit(): void {
    this.appointmentId = this.route.snapshot.params['id']; 

   // console.log(this.appointmentId+" : "+this.pharmService.medadid);
    this.pharmService.bindListMedicineAdvicesById(this.appointmentId);
    // this.pharmService.bindListMedicineAdvicesById(3);
  }
  //logout function
  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
  getStock(name) {
    this.medicineName = name;
    this.pharmService.bindListStock(this.medicineName);
  }

  GenBill()
  {
    for(let i=0;i<this.pharmService.medAdvice[0].medicineList.length;i++)
    this.totalAmount=this.totalAmount+(this.pharmService.medAdvice[0].medicineList[i].MedicinePrice*this.pharmService.medAdvice[0].medicineList[i].Quantity);
    this.totalAmount;
    var datepipe=new DatePipe("en-UK");
    let formattedDate:any=datepipe.transform(Date.now(),'yyyy-MM-dd');
    this.medicineBill={};
    this.medicineBill.AppointmentId=+ this.appointmentId;
    this.medicineBill.MedicineAdviceId=+ this.pharmService.medadid;
    this.medicineBill.MedicineBillDate=formattedDate;
    this.medicineBill.TotalAmount=+this.totalAmount;
    console.log(this.medicineBill);
    this.AddMedicineBill(this.medicineBill);
  }

  AddMedicineBill(medbill:any)
  {
    this.pharmService.insertMedicineBill(medbill).subscribe(
      (res) => {
        console.log(res);
        console.log("Inserted Medicine Bill");
        this.toaster.success("Sucessfully Generated Bill","Pharmacist");
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
