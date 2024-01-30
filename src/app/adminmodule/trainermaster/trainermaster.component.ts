import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SendEmailService } from 'src/app/send-email.service';

@Component({
  selector: 'app-trainermaster',
  templateUrl: './trainermaster.component.html',
  styleUrls: ['./trainermaster.component.css']
})
export class TrainermasterComponent {
  trainerDetails:any=[
  //  {_id:"22",firstName:"Rajshri",lastName:"Agre",emailId:"rajshri@gmail.com",contactNumber:"9021370328",status:"Active"}
  ]

  //creating addTrainer Form object
   addTrainerForm:FormGroup;
   //creating updateTrainer Form object
   updateTrainerForm:FormGroup;


   //for updation and delete operation
   selectedId:string="";
  
   userId:any;
   status:string[]=["Active","InActive"];


  constructor(public http: HttpClient,public sobj:SendEmailService)
  {

    //add Trainer Form Object creation start-----
    this.addTrainerForm= new FormGroup({
      "firstname":new FormControl(null,Validators.required),
      "lastname":new FormControl(null,Validators.required),
      "emailid":new FormControl(null,[Validators.required,Validators.email]),
      "contactnumber":new FormControl(null,[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]),
      "status":new FormControl(null,Validators.required),
    })
   //add Trainer Form Object Creation end-----


   //add Trainer Form Object creation start-----
   this.updateTrainerForm= new FormGroup({
    "updatedfirstname":new FormControl(null,Validators.required),
    "updatedlastname":new FormControl(null,Validators.required),
    "updatedemailid":new FormControl(null,[Validators.required,Validators.email]),
    "updatedcontactnumber":new FormControl(null,[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]),
    "updatedstatus":new FormControl(null,Validators.required),
  })
 //add Trainer Form Object Creation end-----
  
  }
  //get student api call
  ngOnInit(): void {
   

    this.http.get("http://localhost:3000/admin/getAllTrainer").subscribe((data:any)=>{
      console.log('25/10')
      console.log(data)
      console.log("all Trainers data");
    
     this.trainerDetails=data.allTrainerRecords;
     console.log(this.trainerDetails);
  
  });
}

getAllTrainer()
   {
      //get student api call
      this.http.get("http://localhost:3000/admin/getAllTrainer").subscribe((data:any)=>{
        console.log('25/10')
        console.log(data)
      // console.log(data.allStudentRecords);
       this.trainerDetails=data.allTrainerRecords;
      //  console.log(this.studentDetails);
    });
   }
//add trainer start ----------------------
  addTrainer()
  {   
    // console.log(this.addTrainerForm);
    // console.log(this.addTrainerForm.value);

    if(this.addTrainerForm.valid==true)
    {
          let statusToInsert:boolean=false;

          if(this.addTrainerForm.value.status == this.status[0])//i.e if(this.addStudentForm.value.status == Active)
          {
            statusToInsert=true;
          }
          else if(this.addTrainerForm.value.status == this.status[1])//i,e else if(this.addStudentForm.value.status == InActive)
          {
            statusToInsert=false;
      
          }
          let dataToInsert:any={
      
            firstName:this.addTrainerForm.value.firstname,
            lastName:this.addTrainerForm.value.lastname,
            emailId:this.addTrainerForm.value.emailid,
            contactNumber:this.addTrainerForm.value.contactnumber,  
            status:statusToInsert,
            // role:"Trainer"
        }
        console.log(dataToInsert.status);
        console.log("MEAN");
        console.log(dataToInsert);
      
        //post api call start
      
          this.http.post("http://localhost:3000/admin/addTrainer", dataToInsert).subscribe((resultData: any) => {
          console.log(resultData);
          console.log(resultData.message);
          console.log(resultData.status);
      
          //logic to send email of login details to student-start
      
              //first name is password hence we are sending password as a first name
              // emailid is username hence we are sending emailid as a username
              
              
              //this.sobj.sendMailOfLoginCredentials(dataToInsert.firstName,dataToInsert.emailId,dataToInsert.firstName,dataToInsert.emailId);
      
          //logic to send email of login details to student-end
                  
      
          this.getAllTrainer();
      
        });
      
        document.getElementById("add_Form_Close_Btn")?.click();
        //post api call end
      
        this.addTrainerForm.reset();   
    
    }else
    {
      alert("Please Fill All Valid Trainer Details");
    }
   
  }

//add trainer end ----------------------






//update trainer code start

  onUpdateTrainer(data:any)
  {
    console.log(data);

    this.updateTrainerForm.controls["updatedfirstname"].setValue(data.firstName);
    this.updateTrainerForm.controls["updatedlastname"].setValue(data.lastName);
    this.updateTrainerForm.controls["updatedemailid"].setValue(data.emailId);
    this.updateTrainerForm.controls["updatedcontactnumber"].setValue(data.contactNumber);
    this.updateTrainerForm.controls["updatedstatus"].setValue(data.status);

    this.selectedId=data._id;
    this.userId=data.userID;
    
     if(data.status==true)
    {
      this.updateTrainerForm.controls['updatedstatus'].setValue(this.status[0]);
    }
    else if(data.status==false)
    {
      this.updateTrainerForm.controls['updatedstatus'].setValue(this.status[1]);
    }
     

  }



  updateTrainer()
  { 


    if(this.updateTrainerForm.valid==true)
    {
         // console.log(this.updateTrainerForm.value);
              let statusToUpdate:boolean=false;

              if(this.updateTrainerForm.value.updatedstatus == this.status[0])//i.e if(this.addStudentForm.value.status == Active)
              {
                statusToUpdate=true;
              }
              else if(this.updateTrainerForm.value.updatedstatus == this.status[1])//i,e else if(this.addStudentForm.value.status == InActive)
              {
                statusToUpdate=false;

              }

              let updatedDataToInsert:any={

                firstName:this.updateTrainerForm.value.updatedfirstname,
                lastName:this.updateTrainerForm.value.updatedlastname,
                emailId:this.updateTrainerForm.value.updatedemailid,
                contactNumber:this.updateTrainerForm.value.updatedcontactnumber,  
                status:statusToUpdate,
                // role:"Trainer"
                userId:this.userId
            }
            console.log("xhgsdj");
            console.log(updatedDataToInsert);


            //update api call start

          // update api Call
          this.http.put<any>( `http://localhost:3000/admin/updateTrainer/${this.selectedId}`,updatedDataToInsert).subscribe((data:any)=>{
            console.log("From Backend" + data.message);

            this.getAllTrainer();
          });

            //update api call end




            //to close modal box
            document.getElementById("update_Form_Close_Btn")?.click();

            //to rest update traine form
            this.updateTrainerForm.reset();

            this.selectedId="";
    }
    else
    {
      alert("Please Fill All Valid Trainer Details");
    }
   


  }


  //update trainer code end

  //update trainer code end
  onDeleteTrainer(id:any)
  { 
    this.selectedId=id;
    console.log("inside onDeleteTrainer():"+this.selectedId);
    
  }

  deleteTrainer()
  { 
    console.log("inside delete trainer():"+this.selectedId);

    //delete api call

    console.log(this.selectedId);
    //delete api call
    this.http.delete(`http://localhost:3000/admin/deleteTrainer/${this.selectedId}`).subscribe((data:any)=>{
     console.log("From Backend" + data.message);
     
     this.getAllTrainer();
     this.selectedId="";
   
   });


    //to close modal
    document.getElementById("delete-modal-close-btn")?.click();

  }

}
