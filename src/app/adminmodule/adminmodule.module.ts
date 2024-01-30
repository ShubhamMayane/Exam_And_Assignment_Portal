import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminmoduleRoutingModule } from './adminmodule-routing.module';
import { AdminmainComponent } from './adminmain/adminmain.component';
import { AdminmasternavbarComponent } from './adminmasternavbar/adminmasternavbar.component';
import { CourcemasterComponent } from './courcemaster/courcemaster.component';
import { ModulemasterComponent } from './modulemaster/modulemaster.component';
import { ModuletopicmasterComponent } from './moduletopicmaster/moduletopicmaster.component';
import { StudentmasterComponent } from './studentmaster/studentmaster.component';
import { TrainermasterComponent } from './trainermaster/trainermaster.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BatchtrainermoduleComponent } from './batchtrainermodule/batchtrainermodule.component';

import { BatchmastersComponent } from './batchmasters/batchmasters.component';
// import { AppRoutingModule } from '../app-routing.module';
import {FullCalendarModule} from '@fullcalendar/angular';
import { AdmincalendarComponent } from './admincalendar/admincalendar.component'

@NgModule({
  declarations: [
    AdminmainComponent,
    AdminmasternavbarComponent,
    CourcemasterComponent,
    ModulemasterComponent,
    ModuletopicmasterComponent,
    StudentmasterComponent,
    TrainermasterComponent,
    BatchtrainermoduleComponent,
    BatchmastersComponent,
    AdmincalendarComponent
  ],
  imports: [
    CommonModule,
    AdminmoduleRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  
    FullCalendarModule
    // AppRoutingModule
  ],
  exports:[
    AdminmainComponent,
    AdminmasternavbarComponent,
    CourcemasterComponent,
    ModulemasterComponent,
    ModuletopicmasterComponent,
    StudentmasterComponent,
    TrainermasterComponent,
    BatchtrainermoduleComponent,
    BatchmastersComponent
  ]
})
export class AdminmoduleModule { }
