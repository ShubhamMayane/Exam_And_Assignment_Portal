import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-trainer-profile',
  templateUrl: './trainer-profile.component.html',
  styleUrls: ['./trainer-profile.component.css']
})
export class TrainerProfileComponent {

  profile:any={};

  

  changepassForm:FormGroup;
  message:string='';
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.profile.firstname = localStorage.getItem('firstName');
    this.profile.lastname = localStorage.getItem('lastName');
    this.profile.emailid = localStorage.getItem('emailId');
    // this.profile.phone = '975223****';
    // this.profile.gender = 'Male';
    this.profile.course = localStorage.getItem('courseName')
    // this.profile.address = 'Logipool Infotech, 2nd floor, Office no. 201, 24 Wall Street Building, Warje, Pune, Maharashtra 411058';
    this.profile.status = 'Active';
    // this.profile.changepassword = '********';
    // this.profile.currentpassword = '12345'
    console.log(this.profile);


    
    this.changepassForm = this.fb.group({
      emailId: ['', [Validators.required]],
      password: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
      
    })
    

    this.changepassForm=new FormGroup({
      'emailid':new FormControl(null),
      'password':new FormControl(null),
      'newpassword':new FormControl(null),
      'confirmpassword':new FormControl(null)
    })
    
  }

  changePassword() {
    // if (this.changepassForm.invalid) {
    //   this.message = 'Please fill in all the required fields.';
    //   return;
    // }

    // if((this.profile.currentpassword == this.changepassForm.value.password) && (this.changepassForm.value.newpassword)==(this.changepassForm.value.confirmpassword))
    // {
    //   alert(this.message = 'Password Changed Successfully!');
      
    //   console.log(this.changepassForm.value.emailid);
    //   console.log(this.changepassForm.value.password);
    //   console.log(this.changepassForm.value.newpassword);
    //   console.log(this.changepassForm.value.confirmpassword);
    //   this.changepassForm.reset();

      
    // }
    // else{
    //   alert(this.message = 'Password Not Changed!!');
      
    //   console.log(this.changepassForm.value.emailid);
    //   console.log(this.changepassForm.value.password);
    //   console.log(this.changepassForm.value.newpassword);
    //   console.log(this.changepassForm.value.confirmpassword);
    //   this.changepassForm.reset();
    // }

    var bodydata={
      password:this.changepassForm.value.confirmpassword,
    }
    console.log("rajshri")
      console.log(bodydata)
    console.log(bodydata);
        this.http.patch("http://localhost:3000/user/changePassword/"+localStorage.getItem('token'), bodydata).subscribe(  (resultData: any) => {
              console.log(resultData);
              console.log(resultData.message);
              console.log(resultData.status);
              
      
            });

          
            document.getElementById("Add-Form-close-btn")?.click();

  }

 

  
  



  OnChangepassword()
  {
    this.changepassForm.controls['emailid'].setValue(this.profile.emailid);
    
  }
}
