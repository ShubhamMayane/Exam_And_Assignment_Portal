import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
  usersCount:any=[];
  totalStudents:any="";
   totalTrainers:any="";
   totalCourses:any="";

   constructor(public http :HttpClient)
   {
    //  this.totalStudents=250;
     this.totalTrainers=11;
    //  this.totalCourses=4;
   }
   ngOnInit(): void {

    //for course select box
    this.http.get("http://localhost:3000/admin/getDashboardData").subscribe((data:any)=>{
    console.log("hello") ;
    console.log(data)
    console.log(data.totalNoOfCourses);
    this.totalCourses=data.totalNoOfCourses;
    console.log(this.totalCourses)
       this.usersCount=data.allCourses;

       this.totalStudents=data.totalNoOfStudents

       this.totalTrainers=data.totalNoOfTrainers;

       
       console.log(this.usersCount);
    });
  }

}
