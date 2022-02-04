import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorComponent } from './doctor/doctor.component';
import { AppointmentCardComponent } from './doctor/appointment-card/appointment-card.component';
import { HttpClientModule } from '@angular/common/http';
import { DoctorService } from './shared/doctor.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { ViewPatientsComponent } from './doctor/view-patients/view-patients.component';
import { PharmasictComponent } from './pharmasict/pharmasict.component';
import { PrescriptionsViewComponent } from './pharmasict/prescriptions-view/prescriptions-view.component';
// import { PharmascistComponent } from './pharmascist/pharmascist.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    AppointmentCardComponent,
    ViewPatientsComponent,
    PharmasictComponent,
    PrescriptionsViewComponent,
    // PharmascistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
  ],
  providers: [DoctorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
