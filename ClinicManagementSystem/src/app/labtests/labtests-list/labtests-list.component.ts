import { Component, OnInit } from '@angular/core';
import { LabtestService } from 'src/app/shared/labtests/labtest.service';

@Component({
  selector: 'app-labtests-list',
  templateUrl: './labtests-list.component.html',
  styleUrls: ['./labtests-list.component.scss']
})
export class LabtestsListComponent implements OnInit {

  pageOne:number =1;
  filterOne:string;
  constructor(public labtestService: LabtestService) { }

  ngOnInit(): void {

    console.log("hi there!");

    this.labtestService.bindListLabTests();
  }

  updateTest(tID:number){
    console.log(tID);
    //navigate to edit form with selected employee details
  }


  //Delete Post
  deleteTest(TestId:number){
    console.log(TestId);
    if(confirm('are you sure you want to DELETE this LabTest?')){
      this.labtestService.deleteTest(TestId).subscribe(
        response =>{
          console.log("its coming before calling bindlistLabTests");
          this.labtestService.bindListLabTests();
        },
        error =>{
          console.log(error);
        }
      );
    }
  }


}
