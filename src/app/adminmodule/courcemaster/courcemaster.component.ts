import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-courcemaster',
  templateUrl: './courcemaster.component.html',
  styleUrls: ['./courcemaster.component.css']
})
export class CourcemasterComponent implements OnInit {


  addCourseForm:FormGroup;
  updateCourseForm:FormGroup;
  courses:any=[];

  bodydata:any;
  show: boolean= false;
  selectedId:any="";
  selectedIdedit:any=""
   constructor(private router: Router, private http: HttpClient,
    private authService:AuthService)
   {
    //add course form
    this.addCourseForm=new FormGroup({

      'coursename':new FormControl(null,Validators.required),
      'courseduration':new FormControl(null,[Validators.required,Validators.pattern("^[0-9]*$"),Validators.maxLength(1)])
    });

    //update copurse form
    this.updateCourseForm=new FormGroup({

      'updatedcoursename':new FormControl(null,Validators.required),
      'updatedcourseduration':new FormControl(null,[Validators.required,Validators.pattern("^[0-9]*$"),Validators.maxLength(1)])
    });

   
   }

   ngOnInit(): void {
    this.http.get("http://localhost:3000/admin/getAllCourse").subscribe((data:any)=>{
      console.log(data.allCourses);
       this.courses=data.allCourses;
    });
   }
   
   getCourses()
   {  
    this.http.get("http://localhost:3000/admin/getAllCourse").subscribe((data:any)=>{
      console.log(data.allCourses);
       this.courses=data.allCourses;
    });

   }
   

   deleteCources( id: any)
   {
    console.log(id)

    this.selectedId=id;
    
   }
   conformDeleteCource()
   {

    console.log(this.selectedId);
    this.http.delete(`http://localhost:3000/admin/deleteCourse/${this.selectedId}`).subscribe((data:any)=>{
      console.log("From Backend" + data.message);
      this.getCourses();  
    });
    
    this.selectedId="";
  
   }

   addCourse()
  { 

    console.log("inisde add course");

    if(this.addCourseForm.valid==true)
    {
      var bodydata ={
        courseName:this.addCourseForm.value.coursename,
        courseDuration:this.addCourseForm.value.courseduration
      };

      console.log(bodydata);
      this.http.post("http://localhost:3000/admin/addCourse", bodydata).subscribe(  (resultData: any) => {
            console.log(resultData);
            console.log(resultData.message);
            console.log(resultData.status);
            this.getCourses();
    
          });

        
          document.getElementById("Add-Form-close-btn")?.click();
        

         this.addCourseForm.reset();
    }
    else {

      alert("Please Fill All Course Details..")


    }
       
        
      
  }


  //update related code

  onUpdateCourse(data:any)
  {
    console.log("inside onUpdateCourse")
    console.log(data);
    
    this.updateCourseForm.controls['updatedcoursename'].setValue(data.courseName);
    this.updateCourseForm.controls['updatedcourseduration'].setValue(data.courseDuration);
    
    this.selectedId=data._id;

  }

  updateCourse()
  {
    console.log("inside update course function");


    if(this.updateCourseForm.valid==true)
    {
      let bodydata :any={
        courseName:this.updateCourseForm.value.updatedcoursename,
        courseDuration:this.updateCourseForm.value.updatedcourseduration
      };
  
      console.log(bodydata);
      console.log(this.selectedId)
  
      // update api Call
      this.http.put<any>( `http://localhost:3000/admin/updateCourse/${this.selectedId}`,bodydata).subscribe((data:any)=>{
        console.log("From Backend" + data.message);
        this.getCourses();
      });
  
      
        document.getElementById("Edit-Form-close-btn")?.click();
        this.selectedId="";
        this.updateCourseForm.reset();
    }else
    {
      alert("Please Fill All valid Course Details..")
    }
   
    }


}
