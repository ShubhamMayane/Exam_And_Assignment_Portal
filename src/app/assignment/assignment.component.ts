import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent {

  allModule:any=[];
  AllAssignments:any=[];
  constructor(public http: HttpClient)
  {

  }
  ngOnInit(): void {
       

     
      this.http.get("http://localhost:3000/admin/getModule/"+localStorage.getItem('courseName')).subscribe((data:any)=>{
  
       console.log(data)
       this.allModule=data.module;
       console.log(this.allModule)
    });

    this.http.get("http://localhost:3000/student/getAllAssignment").subscribe((data:any)=>{
  
      console.log(data);
      this.AllAssignments=data.assignments;
      console.log(this.AllAssignments);
 });

    

  }
}
