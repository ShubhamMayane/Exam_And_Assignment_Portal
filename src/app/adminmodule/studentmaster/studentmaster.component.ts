import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SendEmailService } from 'src/app/send-email.service';

@Component({
  selector: 'app-studentmaster',
  templateUrl: './studentmaster.component.html',
  styleUrls: ['./studentmaster.component.css']
})
export class StudentmasterComponent implements OnInit
{

   //add student form object
   addStudentForm:FormGroup;
   updateStudentForm:FormGroup;
 
 
   selectedId:any;
 
   //dummy data
   studentDetails:any=[];
   
   //for "course" select box in modal box
   courseDetails:any[]=[];
 
   //for "batch" select box in modal box
   batchDetails:any=[];
 
   //for "status" select box in modal box
   
   status:string[]=["Active","InActive"];
 
   userId:any;
 
   
 
   constructor(public http :HttpClient,public sobj:SendEmailService)
   {
     //creating a form Object of add student form
     this.addStudentForm=new FormGroup({
 
       'firstname':new FormControl(null,Validators.required),
       'lastname':new FormControl(null,[Validators.required]),
       'emailid':new FormControl(null,[Validators.required,Validators.email]),
       'contactnumber':new FormControl(null,[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]),
       'batch':new FormControl(null,Validators.required),
       'course':new FormControl(null,Validators.required),
       'status':new FormControl(null,Validators.required)
     });
 
     this.updateStudentForm=new FormGroup({
       
       'updatedfirstname':new FormControl(null,Validators.required),
       'updatedlastname':new FormControl(null,[Validators.required]),
       'updatedemailid':new FormControl(null,[Validators.required,Validators.email]),
       'updatedcontactnumber':new FormControl(null,[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]),
       'updatedbatch':new FormControl(null,Validators.required),
       'updatedcourse':new FormControl(null,Validators.required),
       'updatedstatus':new FormControl(null,Validators.required)
 
     })
   }
 
 
 
     //get student api call
     ngOnInit(): void {

            this.http.get("http://localhost:3000/admin/getAllCourse").subscribe((data:any)=>{
              console.log(data.allCourses);
              this.courseDetails=data.allCourses;
              
            });

          //   this.http.get("http://localhost:3000/admin/getAllBatch").subscribe((data:any)=>{
          //     console.log("sakshi")
          //   console.log(data);
          //   console.log(data.allBatches);
          //    this.batchDetails=data.allBatches;
          // });

            this.http.get("http://localhost:3000/admin/getAllStudent").subscribe((data:any)=>{

          
              console.log('25/10')
              console.log(data)
              console.log("all students data");
              console.log(data.allStudentRecords);
        

              this.studentDetails=data.allStudentRecords;
              console.log(this.studentDetails);
          
              
          
          });
      

 
   }

   loadBatchesSelectBox(data:any)
  {
    //logic to load batch names in batches Select box
    let selectedCourse=data.target.value;
    console.log(selectedCourse);

    //first clean the array
    this.batchDetails=[];
  
    this.http.get("http://localhost:3000/admin/getBatch/"+selectedCourse).subscribe((data:any)=>{

     console.log(data)
     this.batchDetails=data.batches;
     });

 

  }

 
   getAllStudents()
   {  console.log("inside getAllStudent");
      //get student api call
      this.http.get("http://localhost:3000/admin/getAllStudent").subscribe((data:any)=>{
      //   console.log('25/10')
      //   console.log(data)
      console.log(data.allStudentRecords);

      //first empty all array
      // this.studentDetails=[];
      //copy the array to studentDetails
       this.studentDetails=data.allStudentRecords;
       console.log(this.studentDetails);
    });
   }
 
 
   //add student logic
   addStudent()
   {   
     console.log("inside addStudent()");

     if(this.addStudentForm.valid==true)
     {
      let statusToInsert:boolean=false;
     
      //if form is valid then post form data in database
      console.log(this.addStudentForm);
      console.log(this.addStudentForm.value);

      if(this.addStudentForm.value.status == this.status[0])//i.e if(this.addStudentForm.value.status == Active)
      {
         statusToInsert=true;
      }
      else if(this.addStudentForm.value.status == this.status[1])//i,e else if(this.addStudentForm.value.status == InActive)
      {
         statusToInsert=false;

      }

      //post data logic ithe lihayache
      let dataToInput={
        
        'firstName':this.addStudentForm.value.firstname,
        'lastName':this.addStudentForm.value.lastname,
        'emailId':this.addStudentForm.value.emailid,
        'contactNumber':this.addStudentForm.value.contactnumber,
        'batchName':this.addStudentForm.value.batch,
        'courseName':this.addStudentForm.value.course,
        'status':statusToInsert

      }
      
      console.log(dataToInput);
     
      //post api call
      this.http.post("http://localhost:3000/admin/addStudent", dataToInput).subscribe(  (resultData: any) => {
             console.log(resultData);
             console.log(resultData.allStudentRecords)
             console.log(resultData.message);
             console.log(resultData.status);
      
             //logic to send email of login details to student-start

             //first name is password hence we are sending password as a first name
             
             //this.sobj.sendMailOfLoginCredentials(dataToInput.firstName,dataToInput.emailId,dataToInput.firstName,dataToInput.emailId);

             //logic to send email of login details to student-end
           
           this.getAllStudents();


          
           });

           document.getElementById("add_Form_Close_Btn")?.click();
           this.addStudentForm.reset();



     }
     else
     {
      alert("Please Fill All Valid Student Details");
     }

        

   }
 
 
   //update student logic
 
 
   onUpdate(data:any)
   { 
     console.log(data);
     console.log(data.courseName);
     console.log(data.batchName);
 
     
     this.updateStudentForm.controls['updatedfirstname'].setValue(data.firstName);
     this.updateStudentForm.controls['updatedlastname'].setValue(data.lastName);
     this.updateStudentForm.controls['updatedemailid'].setValue(data.emailId)
     this.updateStudentForm.controls['updatedcontactnumber'].setValue(data.contactNumber)
     this.updateStudentForm.controls['updatedcourse'].setValue(data.courseName)

     let courseInfo={
       target:{
         value:data.courseName
       }
     }

     this.loadBatchesSelectBox(courseInfo);

     this.updateStudentForm.controls['updatedbatch'].setValue(data.batchName)
     

     if(data.status==true)
    {
      this.updateStudentForm.controls['updatedstatus'].setValue(this.status[0]);
    }
    else if(data.status==false)
    {
      this.updateStudentForm.controls['updatedstatus'].setValue(this.status[1]);
    }
     
 
     this.selectedId=data._id;
     this.userId=data.userID;
     
   }
 
   updateStudent()
   {
     console.log("inside update Student");

     if(this.updateStudentForm.valid==true)
     {
      console.log(this.updateStudentForm);
      console.log(this.updateStudentForm.value);
       let statusToInsert:boolean=false;
      
      if(this.updateStudentForm.value.updatedstatus == this.status[0])//i.e if(this.addStudentForm.value.status == Active)
      {
         statusToInsert=true;
      }
      else if(this.updateStudentForm.value.updatedstatus == this.status[1])//i,e else if(this.addStudentForm.value.status == InActive)
      {
         statusToInsert=false;
 
      }
 
 
      let bodydata :any={
       firstName:this.updateStudentForm.value.updatedfirstname,
       lastName:this.updateStudentForm.value.updatedlastname,
       emailId:this.updateStudentForm.value.updatedemailid,
       contactNumber:this.updateStudentForm.value.updatedcontactnumber,
       courseName:this.updateStudentForm.value.updatedcourse,
       batchName:this.updateStudentForm.value.updatedbatch,
       status:statusToInsert,
       userId:this.userId,
      }
      console.log("Rajshri Agre")
      console.log(bodydata);
      //update api call
  
     this.http.put<any>(`http://localhost:3000/admin/updateStudent/${this.selectedId}`,bodydata).subscribe((data:any)=>{
     console.log("From Backend" + data.message);
     this.getAllStudents();
 
   });
 
     
      this.updateStudentForm.reset();
      this.selectedId="";
      
      document.getElementById("updateFormCloseBtn")?.click();

     }
     else
     {
      alert("Please Fill All Valid Student Details");
     }
     
   }
 
   //delete related code
   onDeleteStudent( id: any)
   {  
    console.log("inside onDeleteStudent")
    console.log(id);
 
    this.selectedId=id;
    
   }
   deleteStudent()
   {
    console.log("inside deleteStudent()")
    console.log(this.selectedId);
     //delete api call
     this.http.delete(`http://localhost:3000/admin/deleteStudent/${this.selectedId}`).subscribe((data:any)=>{
      console.log("From Backend" + data.message);
      
      this.getAllStudents();
      this.selectedId="";
    
    });
 
 
    
  
   }
 
}
