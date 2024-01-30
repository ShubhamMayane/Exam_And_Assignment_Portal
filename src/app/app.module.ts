import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AdminsidebarComponent } from './adminsidebar/adminsidebar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TrainersidebarComponent } from './trainersidebar/trainersidebar.component';
import { StudentDashBoardComponent } from './student-dash-board/student-dash-board.component';
import { BatchmatesComponent } from './batchmates/batchmates.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ExaminationComponent } from './examination/examination.component';
import { TopicsComponent } from './topics/topics.component';
import { TrainerComponent } from './trainer/trainer.component';

import { HttpClientModule } from '@angular/common/http';

import { SyllabusComponent } from './syllabus/syllabus.component';


import { RouterModule } from '@angular/router';
import { AdminmoduleModule } from './adminmodule/adminmodule.module';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { StudentNavbarComponent } from './student-navbar/student-navbar.component';
import { StudentSidebarComponent } from './student-sidebar/student-sidebar.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { TrainerHomeComponent } from './trainer-home/trainer-home.component';
import { TrainerNavbarComponent } from './trainer-navbar/trainer-navbar.component';
import { TrainerSidebarComponent } from './trainer-sidebar/trainer-sidebar.component';
import { TrainerDashboardComponent } from './trainer-dashboard/trainer-dashboard.component';
import { TrainerAssignmentComponent } from './trainer-assignment/trainer-assignment.component';
import { StudentCalenderComponent } from './student-calender/student-calender.component';
import { TrainerCalenderComponent } from './trainer-calender/trainer-calender.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { TrainerProfileComponent } from './trainer-profile/trainer-profile.component';
import { SyllabusService } from './syllabus.service';

import { SendEmailService } from './send-email.service';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';







@NgModule({
  declarations: [
    AppComponent,
    AssignmentComponent,
    NavbarComponent,
    AdminsidebarComponent,
    SidebarComponent,
    TrainersidebarComponent,
    StudentDashBoardComponent,
    BatchmatesComponent,
    LoginComponent,
    ExaminationComponent,
    TopicsComponent,
    TrainerComponent,
    SyllabusComponent,
    HomeComponent,
    ProfileComponent,
    AdminHomeComponent,
    LandingpageComponent,
    StudentHomeComponent,
    StudentNavbarComponent,
    StudentSidebarComponent,
    AdminProfileComponent,
    TrainerHomeComponent,
    TrainerNavbarComponent,
    TrainerSidebarComponent,
    TrainerDashboardComponent,
    TrainerAssignmentComponent,
    StudentCalenderComponent,
    TrainerCalenderComponent,
    TrainerProfileComponent,
    ForgetpassComponent
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AdminmoduleModule,
    FullCalendarModule
   


  ],
  exports: [
    
    ],
  providers: [
   SyllabusService,
   SendEmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
