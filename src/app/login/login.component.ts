import { Component } from '@angular/core';
import { FormGroup,FormControl, FormBuilder,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import { LocalService } from './local.service';


import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  

  userRole:any="";
  userId:any="";

  userDetails:any=[]
  loginForm:FormGroup;


   constructor(private router: Router, private http: HttpClient,
    private authService:AuthService,public fb: FormBuilder)
   {

    this. loginForm = this.fb.group({
      "email": ['', [Validators.required,Validators.email]],
      "password": ['', Validators.required]
  
     });
     
   }

   

   
 OnSubmit()
 {  

  console.log(this.loginForm);

  if(this.loginForm.valid==true)
  {

    console.log(this.loginForm.value);
  
  let bodydata ={
    emailId:this.loginForm.value.email,
    password:this.loginForm.value.password
  };


  this.http.post("http://localhost:3000/user/login", bodydata).subscribe(  (resultData: any) => {
    
  console.log(resultData);
  
    if(resultData.status==false)
    {
      alert("Incorrect user Details please enter valid details..");
      this.loginForm.reset();
    }
    else
    { 
          // console.log(resultData.message);
        // console.log(resultData.status);
        // console.log(resultData.user);
        this.userRole=resultData.user[0].Role;
        this.userId=resultData.user[0]._id;

        console.log(this.userId);

        console.log("-----------------------------");

        //store id in local storage
        localStorage.setItem('userid',this.userId);

        console.log("successfull");
        console.log(localStorage.getItem('userid'));

      


        if (this.userRole=="Trainer") 
        {
          this.authService.isLoggedIn = true;
          this.router.navigateByUrl('/trainerhome');

        } 

      else if(this.userRole=="Student")
        {

          this.router.navigateByUrl('/studenthome');
        }
        
        else if(this.userRole=="Admin")
        {

          this.router.navigateByUrl('/home');
        }
      
      
        }
      
      
    });



  }
  else{
    alert("Please fill all Form with valid data");
  }

  


}

}