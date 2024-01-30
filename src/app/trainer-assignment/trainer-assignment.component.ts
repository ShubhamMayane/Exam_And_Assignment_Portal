import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-trainer-assignment',
  templateUrl: './trainer-assignment.component.html',
  styleUrls: ['./trainer-assignment.component.css']
})
export class TrainerAssignmentComponent {
  uploadAssignmentForm:FormGroup;

  constructor(public http:HttpClient)
{
   this.uploadAssignmentForm =new FormGroup({
    'assignmentFileUrl':new FormControl(null,Validators.required),
    'assignmentName':new FormControl(null,Validators.required)
   }) 
}

ngOnInit(): void {

    //get uploadAssignment api call
}

 getAlluploadAssignment()
 {
     //get uploadAssignment api call
 }

 //app uploadAssignment logic
 adduploadAssignment()
 {
    console.log("inside uploadAssignment()");

    console.log(this.uploadAssignmentForm);
    console.log(this.uploadAssignmentForm.value);
 }

 //https://drive.google.com/file/d/1Rl96mqPg3W4u6EapJBfiBpKW-9AWYLEo/view?usp=drive_link
  uploadAssignment()
  {

    let assignmentDetails={
      assignmentURL:this.uploadAssignmentForm.value.assignmentFileUrl,
      assignmentName:this.uploadAssignmentForm.value.assignmentName,
      courseName:localStorage.getItem('courseName'),
      moduleName:"Angular"
    }

    console.log(assignmentDetails);
    //post api call

    this.http.post("http://localhost:3000/trainer/addAssignment",assignmentDetails).subscribe((data:any)=>{
      console.log("From Backend" + data.message);
      alert("file is uploaded successfully");
    });
    

    

    //post api call


    
  }
}
