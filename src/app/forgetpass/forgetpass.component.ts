import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SendEmailService } from '../send-email.service';



@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css']
})
export class ForgetpassComponent  implements OnInit{
  userForm: FormGroup;


  constructor(public sobj:SendEmailService)
   {
    this.userForm=new FormGroup({
      'useremailid':new FormControl(null,Validators.required),
    
     });
  }

  ngOnInit() {
   
  }

  submit() {
    let userDetails = this.userForm.value;
    console.log('Email saved:',userDetails);

    let email=this.userForm.value.useremailid;

    console.log(email);

    this.sobj.forgetPassword(email);

    this.userForm.reset();

    
  }
}
