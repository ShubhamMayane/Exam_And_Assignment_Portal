import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentComponent } from './assignment/assignment.component';
import { BatchmatesComponent } from './batchmates/batchmates.component';
import { StudentDashBoardComponent } from './student-dash-board/student-dash-board.component';
import { ExaminationComponent } from './examination/examination.component';
import { TopicsComponent } from './topics/topics.component';
import { TrainerComponent } from './trainer/trainer.component';
import { SyllabusComponent } from './syllabus/syllabus.component';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BatchtrainermoduleComponent } from './adminmodule/batchtrainermodule/batchtrainermodule.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { TrainerHomeComponent } from './trainer-home/trainer-home.component';
import { TrainerDashboardComponent } from './trainer-dashboard/trainer-dashboard.component';
import { AdmincalendarComponent } from './adminmodule/admincalendar/admincalendar.component';
import { TrainerAssignmentComponent } from './trainer-assignment/trainer-assignment.component';
import { StudentCalenderComponent } from './student-calender/student-calender.component';
import { TrainerCalenderComponent } from './trainer-calender/trainer-calender.component';
import { TrainerProfileComponent } from './trainer-profile/trainer-profile.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';


const routes: Routes = [
  { path: '', redirectTo: 'landingpage', pathMatch: 'full' },
  {path:'landingpage',component:LandingpageComponent},
  { path: 'login', component: LoginComponent },
  { path: 'forgetpassword', component: ForgetpassComponent },
  {
    path: 'home', component: HomeComponent,
    children: [
      {
        path: '',
        component: AdminHomeComponent
      },
      {
        path: 'admincalendar',
        component: AdmincalendarComponent
      },
      // {
      //   path: 'trainer',
      //   component: TrainerComponent
      // },
      // {
      //   path: 'batchmates',
      //   component: BatchmatesComponent
      // },
      // {
      //   path: 'dashboard',
      //   component: StudentDashBoardComponent
      // },
      {
        path: 'adminhome',
        component: AdminHomeComponent
      },
      // {
      //   path: 'assignment',
      //   component: AssignmentComponent
      // },
      // {
      //   path: 'examination',
      //   component: ExaminationComponent
      // },
      // {
      //   path: 'syllbus',
      //   component: SyllabusComponent
      // },
      {
        path: 'batchtrainermodule',
        component: BatchtrainermoduleComponent
      },
      {
        path: 'adminprofile',
        component: AdminProfileComponent
      },
      {
        path: 'master',
        loadChildren: () => import('./adminmodule/adminmodule.module').then(m => m.AdminmoduleModule)
      }
    ]
  },

  { path: 'studenthome', component: StudentHomeComponent ,
  children: [
    {
      path: '',
      component: StudentDashBoardComponent
    },
    {
      path: 'trainer',
      component: TrainerComponent
    },
    {
      path: 'batchmates',
      component: BatchmatesComponent
    },
    {
      path: 'assignment',
      component: AssignmentComponent
    },
    {
      path: 'examination',
      component: ExaminationComponent
    },
    {
      path: 'syllbus',
      component: SyllabusComponent
    },
    {
      path: 'dashboard',
        component: StudentDashBoardComponent
       },
       {
          path: 'syllbus',
          component: SyllabusComponent
        },
        {
          path: 'profile',
          component: ProfileComponent
        },
        {
          path:'topic',
          component:TopicsComponent
        },
        {
          path:'calender',
          component:StudentCalenderComponent
        }
        
]},

{ path: 'trainerhome', component: TrainerHomeComponent,
children: [
  {
    path: '',
    component: TrainerDashboardComponent
  },

  {
    path:'trainerdashboard',
    component:TrainerDashboardComponent
  },
  {
    path:'trainerassignment',
    component:TrainerAssignmentComponent
  },
  {
    path:'calender',
    component:TrainerCalenderComponent
  },
  {
    path:'tarinerprofile',
    component:TrainerProfileComponent
  }
]
}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
