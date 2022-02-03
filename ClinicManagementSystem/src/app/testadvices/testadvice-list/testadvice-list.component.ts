import { Component, OnInit } from '@angular/core';
import { TestadviceService } from 'src/app/shared/testadvices/testadvice.service';

@Component({
  selector: 'app-testadvice-list',
  templateUrl: './testadvice-list.component.html',
  styleUrls: ['./testadvice-list.component.scss']
})
export class TestadviceListComponent implements OnInit {

  pageTwo:number=0;
  filterTwo:string;
  constructor(public testAdviceService: TestadviceService) { }

  ngOnInit(): void {
    console.log("hi there!");

    this.testAdviceService.bindListTestAdvices();
  }

  // updateTestAdvice(taID:number){
  //   console.log(taID);
  //   //navigate to edit form with selected test advice details
  // }


  //Delete Post
  // deleteTestAdvice(TestAdviceId:number){
  //   console.log(TestAdviceId);
  //   if(confirm('are you sure you want to DELETE this TestAdvice?')){
  //     this.testAdviceService.deleteTestAdvice(TestAdviceId).subscribe(
  //       response =>{
  //         console.log("its coming before calling bindlistLabTests");
  //         this.testAdviceService.bindListTestAdvices();
  //       },
  //       error =>{
  //         console.log(error);
  //       }
  //     );
  //   }
  // }

}
