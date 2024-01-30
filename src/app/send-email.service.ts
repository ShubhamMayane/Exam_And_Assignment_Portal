import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {

  constructor(public http:HttpClient) { }

  async sendMailOfLoginCredentials(name:any,username:any,password:any,emailid:any)
  { 
        console.log("inside sendMailOfLoginCredentials()");
        console.log(name);
        console.log(username);
        console.log(password);
        console.log(emailid);

      let emailData= {
          to_name: name,
          username: username,
          password: password,
          to_emailid: emailid,
        };

        emailjs.init("9t7czFOwyJdsrKnoa");

        await emailjs.send("service_3cxl46p","template_qqt40je",emailData)
        .then((response) => {
          console.log("Email sent successfully");
          console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
          console.log("Unable to sent");
          console.log('FAILED...', err);
        });


 }

//  forgot password code
/* ithe mi backend la post request send karnar aahe,hi post request 
kartna mi email id pathvnar aahe so server
application madhala request handler kay karel ki ya email id related 
data "logipoolusers" navachya collection madhun mala send
karel as a response mhanun
 jyamadhe username aani password asel aani he emailid
aani password mi user la mail karel*/
async forgetPassword(emailId:any)
{ 
    
    console.log("inside Forgot password");
    //first get all user details of entered email 
    let userDetails = {
      emailid:emailId
    };

      //post api call
      //Here we are requesting server application to check user with this email id is exist or not
      this.http.post("http://localhost:3000/user/getUserDetailsById",userDetails).subscribe(async(resultData: any) => {
      console.log(resultData);

      if(resultData.status==true) //mhanje ya email id cha user ha logicpool user madhe milala aaplyala
      {
        console.log(resultData.userData);

        let username=resultData.userData.emailId;
        let password=resultData.userData.password;
  
        console.log(username +" "+ password);
  
       
  
        //now we have got the username and password to entered mail id
        //send email code start :
  
        //   let emailData= {
        //   to_name: "user",
        //   username: username,
        //   password: password,
        //   to_emailid: emailId,
        // };
  
        // emailjs.init("9t7czFOwyJdsrKnoa");
  
        // await emailjs.send("service_3cxl46p","template_qqt40je",emailData)
        // .then((response) => {
        //   console.log("Email sent successfully");
        //   alert("Email sent successfully, Check Your Gmail");
        //   console.log('SUCCESS!', response.status, response.text);
        // }, (err) => {
        //   console.log("Unable to sent");
        //   console.log('FAILED...', err);
        // });

         //send email code End :

         alert("Please ");


      }

      else if(resultData.status==false)//yacha artha ya email cha user ha logipooluser collecetion madhe sapadala nahi
      {

        alert("Invalid Email Please Enter Valid email Id");

      }

        
  });



      
  


}



}
