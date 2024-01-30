import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-batchmasters',
  templateUrl: './batchmasters.component.html',
  styleUrls: ['./batchmasters.component.css']
})
export class BatchmastersComponent {
  //dummy data
  //for render in table
  batchDetails:any=[]

  //for render course names in modal box select box as its options
  courseDetails:any=[];


  //creating a form object of add batch form
  addBatchForm:FormGroup;

  //creating a form object of add batch form
  updateBatchForm:FormGroup;


  //to store temparory id
  selectedId:string="";

  
  constructor(public http:HttpClient)
  { 
    //addBatchForm object creation
    this.addBatchForm=new FormGroup({
      'batchname':new FormControl(null,Validators.required),
      'coursename':new FormControl(null,Validators.required),
      'startdate':new FormControl(null,Validators.required),
      'enddate':new FormControl(null,Validators.required)
    
    });

    //updateBatchForm object creation
    this.updateBatchForm=new FormGroup({
      'updatedbatchname':new FormControl(null,Validators.required),
      'updatedcoursename':new FormControl(null,Validators.required),
      'updatedstartdate':new FormControl(null,Validators.required),
      'updatedenddate':new FormControl(null,Validators.required)
    })
  }


  ngOnInit(): void {

    //for course select box
    this.http.get("http://localhost:3000/admin/getAllCourse").subscribe((data:any)=>{
    console.log("hello") ;
    console.log(data.allCourses);
       this.courseDetails=data.allCourses;
       console.log(this.courseDetails);
    });

    this.http.get("http://localhost:3000/admin/getAllBatch").subscribe((data:any)=>{
      console.log(data.allAvailableBatches);
       this.batchDetails=data.allAvailableBatches;
    });
  }

  

  //to render table data
  getAllBatches()
  {   

    //get batch api call

    console.log("Inside getAllBatches");
   
    this.http.get("http://localhost:3000/admin/getAllBatch").subscribe((data:any)=>{
      console.log(data);
      console.log(data.allAvailableBatches);
       this.batchDetails=data.allAvailableBatches;
       
    });
  }

  addBatch()
  {


    if(this.addBatchForm.valid==true)
    {

      console.log(this.addBatchForm);
      console.log(this.addBatchForm.value);
  
  
      let bodydata={
    
        courseName:this.addBatchForm.value.coursename,
        batchName:this.addBatchForm.value.batchname,
        startDate:this.addBatchForm.value.startdate,
        endDate:this.addBatchForm.value.enddate
      }
      console.log(typeof(bodydata.startDate));//string
      //to compare start-date and end-date logic ---start

      const date1=new Date(bodydata.startDate);
      const date2=new Date(bodydata.endDate);
      
      if(date1 > date2)
      { 
        //it means start date is greater than end date so input is invalid

        alert("Start Date is greater than end Date Please Select accurate dates");
        return;
      }
      else
      {
          //dates are selected Properly so do follwing thing
        
          
          // console.log(bodydata);
          this.http.post("http://localhost:3000/admin/addBatch", bodydata).subscribe(  (resultData: any) => {
            console.log(resultData);
            console.log(resultData.message);
            console.log(resultData.status);
            this.getAllBatches();
              
              
            });
            
            //to close add batch form modla box
            document.getElementById("add-batch-form-close-btn")?.click();
          //to reset the value of form.
          this.addBatchForm.reset();
      }


       //to compare start-date and end-date logic ---end




    }
    else
    {

      alert("Please Fill All valid batch Details");

    }
   

  }

  //update code

  onUpdateBatch(data:any)
  { 
    console.log(data);
    
    
    
    this.updateBatchForm.controls['updatedbatchname'].setValue(data.batchName);
    this.updateBatchForm.controls['updatedcoursename'].setValue(data.courseName);
    this.updateBatchForm.controls['updatedstartdate'].setValue(data.startDate);
    this.updateBatchForm.controls['updatedenddate'].setValue(data.endDate);
    

    this.selectedId=data._id;
    
  }

  updateBatch()
  {
    console.log("inside update Student");

    if(this.updateBatchForm.valid==true)
    {
      console.log(this.updateBatchForm);
      console.log(this.updateBatchForm.value);
  
      let bodydata={
      
        batchName:this.updateBatchForm.value.updatedbatchname,
        courseName:this.updateBatchForm.value.updatedcoursename,
        startDate:this.updateBatchForm.value.updatedstartdate,
        endDate:this.updateBatchForm.value.updatedenddate
  
      }
      
      //comparing start date and end date validation

      const date1=new Date(bodydata.startDate);
      const date2=new Date(bodydata.endDate);

      if(date1>date2)
      {
        //it means startdate is greater than end date so this input is invalid
        alert("Start Date is greater than end Date Please Select accurate dates");
        return;


      }
      else{

        console.log(bodydata);
  
        //update api call
        this.http.put<any>( `http://localhost:3000/admin/updateBatch/${this.selectedId}`,bodydata).subscribe((data:any)=>{
          console.log("From Backend" + data.message);
          this.getAllBatches();
      });
    
         ////to close update batch form modla box
         document.getElementById("update-batch-form-close-btn")?.click();
         
        //to reset the value of form(i.e reset all text fileds of form)
        this.updateBatchForm.reset();


      }
    }
    else
    {
      alert("Please Fill All valid batch Details");
    }
   
    

     
  }

  //delete logic

  onDeleteBatch(id:any)
  { 
    this.selectedId=id;
    console.log(this.selectedId);
  }

  deleteBatch()
  { 
    
    console.log("inside deleteBatch()");
    console.log(this.selectedId);
    
    //delete api call
    this.http.delete(`http://localhost:3000/admin/deleteBatch/${this.selectedId}`).subscribe((data:any)=>{
      console.log("From Backend" + data.message);
      this.getAllBatches();
    });

 
    this.selectedId="";

  }

}
