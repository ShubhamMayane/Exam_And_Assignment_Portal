import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentmasterComponent } from './studentmaster/studentmaster.component';
import { CourcemasterComponent } from './courcemaster/courcemaster.component';
import { ModulemasterComponent } from './modulemaster/modulemaster.component';
import { ModuletopicmasterComponent } from './moduletopicmaster/moduletopicmaster.component';
import { TrainermasterComponent } from './trainermaster/trainermaster.component';
import { AdminmainComponent } from './adminmain/adminmain.component';
import { BatchtrainermoduleComponent } from './batchtrainermodule/batchtrainermodule.component';
import { AdminmasternavbarComponent } from './adminmasternavbar/adminmasternavbar.component';

import { BatchmastersComponent } from './batchmasters/batchmasters.component';

const routes: Routes = [
  {
    path: '', component: AdminmasternavbarComponent,
    children: [
      { path: '', redirectTo: 'courseMaster', pathMatch: 'full' },
      { path: 'courseMaster', component: CourcemasterComponent },
      { path: 'moduleMaster', component: ModulemasterComponent },
      { path: 'moduletopicMaster', component: ModuletopicmasterComponent },
      { path: 'trainerMaster', component: TrainermasterComponent },
      { path: 'studentMaster', component: StudentmasterComponent },
      { path: 'batchMaster', component: BatchmastersComponent }
      // { path: 'batchtrainerModule', component: BatchtrainermoduleComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminmoduleRoutingModule { }
