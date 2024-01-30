import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainer-navbar',
  templateUrl: './trainer-navbar.component.html',
  styleUrls: ['./trainer-navbar.component.css']
})
export class TrainerNavbarComponent {
  loggedUserId:any;
  loggedInUserName:any;


constructor(public hobj:HttpClient,private router: Router){
  
 console.log(localStorage.getItem('userid'));
  
 this.loggedUserId=localStorage.getItem('userid');

  this.hobj.get("http://localhost:3000/trainer/getTrainerById/"+this.loggedUserId).subscribe((dataFromServer:any)=>{
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
