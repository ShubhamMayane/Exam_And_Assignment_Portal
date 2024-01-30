import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  loggedInUserId:any;
  loggedInUserName:any;
 
  constructor(public hobj:HttpClient,public router:Router){

    console.log(localStorage.getItem('userid'));
  
    this.loggedInUserId=localStorage.getItem('userid');
 
 
    this.hobj.get("http://localhost:3000/admin/getAdminDetails").subscribe((dataFromServer:any)=>{
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
