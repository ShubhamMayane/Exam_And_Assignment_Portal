import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-navbar',
  templateUrl: './student-navbar.component.html',
  styleUrls: ['./student-navbar.component.css']
})
export class StudentNavbarComponent {
  loggedUserId:any;
  loggedInUserName:any;


constructor(public hobj:HttpClient,private router: Router){
  
 console.log(localStorage.getItem('userid'));
  
 this.loggedUserId=localStorage.getItem('userid');

  this.hobj.get("http://localhost:3000/student/getStudentById/"+this.loggedUserId).subscribe((dataFromServer:any)=>{
    console.log(dataFromServer);
    this.loggedInUserName=dataFromServer.result[0].firstName+" "+dataFromServer.result[0].lastName;
    console.log(this.loggedInUserName);
  });


}

logOut()
{
  localStorage.clear();
  this.router.navigateByUrl('/landingpage');

}

 }
