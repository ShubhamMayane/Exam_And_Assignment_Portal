import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-batchtrainermodule',
  templateUrl: './batchtrainermodule.component.html',
  styleUrls: ['./batchtrainermodule.component.css']
})
export class BatchtrainermoduleComponent {

  //add batch-trainer-module form object
  addBatchTrainerModuleForm:FormGroup;
  updateBatchTrainerModuleForm:FormGroup;

  selectedId:any;

  
  //batch-Trainer-Module-Details data
  batchTrainerModuleDetails:any=[];

  //for "batch" select box in modal box
  batchDetails:any=[];
  selectedBatchName:string="";
  selectedUpdatedBatchName:string="";

  //for "course" select box in modal box
  courseDetails:any=[];

  //for "module" select box in modal box
  moduleDetails:any=[];

  //for "trainer" select box in modal box
  trainerDetails:any=[];

  trainerFullNames:any=[];

  startDate:any="";
  endDate:any="";

  selectedCourse:any="";
  constructor(public http:HttpClient)
  {
    //creating a form Object of add batch-trainer-module form
    this.addBatchTrainerModuleForm=new FormGroup({

      'batchname':new FormControl(null,Validators.required),
      'coursename':new FormControl(null,Validators.required),
      'modulename':new FormControl(null,Validators.required),
      'trainername':new FormControl(null,Validators.required),
      'startdate':new FormControl(null,Validators.required),
      'enddate':new FormControl(null,Validators.required)
    });

    this.updateBatchTrainerModuleForm=new FormGroup({

      'updatedbatchname':new FormControl(null,Validators.required),
      'updatedcoursename': new FormControl(null,Validators.required),
      'updatedmodulename':new FormControl(null,Validators.required),
      'updatedtrainerfullname': new FormControl(null,Validators.required),
      'updatedstartdate': new FormControl(null,Validators.required),
      'updatedenddate': new FormControl(null,Validators.required)

    })
  }

  ngOnInit(): void{
      //to render batchTrainerData in table
     //get batchtrainermodule api call
     this.http.get("http://localhost:3000/admin/getAllBatchTrainerModule").subscribe((data:any)=>{
      console.log('25/10')
      console.log(data);
      this.batchTrainerModuleDetails=data.details;
  });

    //following code is to load basic data in addBatchTrainer modal box
  this.http.get("http://localhost:3000/admin/getAllCourse").subscribe((data:any)=>{
    console.log(data.allCourses);
     this.courseDetails=data.allCourses;
  });

  

  this.http.get("http://localhost:3000/admin/getAllTrainer").subscribe((data:any)=>{
    console.log('25/10')
    console.log(data)
    console.log("all Trainers data");
  
   this.trainerDetails=data.allTrainerRecords;
   console.log(this.trainerDetails);
   
   for(let i=0;i<this.trainerDetails.length;i++)
   {
    console.log(this.trainerDetails[i].firstName+' '+this.trainerDetails[i].lastName);
    this.trainerFullNames.push(this.trainerDetails[i].firstName+' '+this.trainerDetails[i].lastName);
   }
   console.log(this.trainerFullNames);

});



  }

  //function to load data in table 
  getAllBatchTrainerModule()
  {
     //get batchtrainermodule api call
      
      this.http.get("http://localhost:3000/admin/getAllBatchTrainerModule").subscribe((data:any)=>{
        console.log('25/10')
        console.log(data);
        this.batchTrainerModuleDetails=data.details;
    });
  }


  //function to load batches and modules according to selected coursename in select box
  loadBatchesAndModulesInSelectBox(data:any)
  {
    console.log("inside loadBatchesAndModulesInSelectBox()");
    //logic to load batch names in batches Select box
    this.batchDetails=[];
    let selectedCourseName=data.target.value; //get selected courseName form course select box
    console.log(selectedCourseName);
    this.http.get("http://localhost:3000/admin/getBatch/"+selectedCourseName).subscribe((data:any)=>{

     console.log(data)
     this.batchDetails=data.batches;
     });

     //logic to load module names in module select box
     this.moduleDetails=[];
    console.log(selectedCourseName);
     let url="http://localhost:3000/admin/getModule/"+selectedCourseName;

   this.http.get(url).subscribe((data:any)=>{
     // console.log('25/10')
     console.log(data)
     this.moduleDetails=data.module;
   });


  }
  //set start and end date in modal box form after selecting batchname --start
  //for add batchModal
 //to get a specific batch details accoridng to id
  getBatchDetailsById_1(data:any)
  {
    
    //let selectedBatchById=this.addBatchTrainerModuleForm.value.batchname;
    let selectedBatchById=data.target.value;
    console.log(selectedBatchById)

    let batchFromDb;
    
    this.http.get("http://localhost:3000/admin/getBatchById/"+selectedBatchById).subscribe((data:any)=>
    {
      
      console.log(data.batch[0]);//selected batch id's json object
      batchFromDb=data.batch[0];
      
      this.selectedBatchName=data.batch[0].batchName;//to insert in db becuase when we select batch in select box we are getting id of batch not a name of batch
      this.addBatchTrainerModuleForm.controls['startdate'].setValue(batchFromDb.startDate);
      this.addBatchTrainerModuleForm.controls['enddate'].setValue(batchFromDb.endDate);
      

    });

  }


   //for update batchTrainerModal
 //to get a specific batch details accoridng to id
 getBatchDetailsById_2(data:any)
 {
   
   let selectedBatchById=data.target.value;
   console.log(selectedBatchById)

   let batchFromDb;
   
   this.http.get("http://localhost:3000/admin/getBatchById/"+selectedBatchById).subscribe((data:any)=>
   {
     
     console.log(data.batch[0]);//selected batch id's json object
     batchFromDb=data.batch[0];
     
     this.selectedUpdatedBatchName=data.batch[0].batchName;//to insert in db becuase when we select batch in select box we are getting id of batch not a name of batch
     this.updateBatchTrainerModuleForm.controls['updatedstartdate'].setValue(batchFromDb.startDate);
     this.updateBatchTrainerModuleForm.controls['updatedenddate'].setValue(batchFromDb.endDate);
     

   });

 }


  //set start and end date in modal box form after selecting batchname --end
  
    


  //add batchtrainermodule logic
  addBatchTrainerModule()
  {
    console.log("inside addBatchTrainerModule()");

      //if form is valid then post data in database
      console.log(this.addBatchTrainerModuleForm);
      console.log(this.addBatchTrainerModuleForm.value);

      //post data logic
      let dataToInput={
      
        'batchName':this.selectedBatchName,
        'courseName':this.addBatchTrainerModuleForm.value.coursename,
        'moduleName':this.addBatchTrainerModuleForm.value.modulename,
        'trainerFullName':this.addBatchTrainerModuleForm.value.trainername,
        'startDate':this.addBatchTrainerModuleForm.value.startdate,
        'endDate':this.addBatchTrainerModuleForm.value.enddate
      }

      //post api call
    console.log(dataToInput);
      this.http.post("http://localhost:3000/admin/addBatchTrainerModule", dataToInput).subscribe((resultData: any) => {
            console.log(resultData);
            console.log(resultData.message);
            console.log(resultData.status);
            this.getAllBatchTrainerModule();
    
          });
     


      //to close modal
      let closeButton=document.getElementById("add_Form_Close_Btn");
      closeButton?.click();

    //to reset the value of form(i.e reset all text fileds of form)
    this.addBatchTrainerModuleForm.reset();
  }

  //update batchtrainermodule logic


  onUpdate(dataFromRow:any)
  {
    console.log("Inside OnUpdate")
    console.log(dataFromRow);
    // console.log(data.batchName);
    // console.log(data.courseName);
    // console.log(data.moduleName);
    // console.log(data.trainerName);

    this.updateBatchTrainerModuleForm.controls['updatedcoursename'].setValue(dataFromRow.courseName);
        //we have to fill batchhDetails and moduleDetails again to render data in select box
       //logic to load batch names in batches Select box
       let courseData={
         target:{
           value:dataFromRow.courseName
          }
       }


    
       this.loadBatchesAndModulesInSelectBox(courseData);

       //this.updateBatchTrainerModuleForm.get('updatedbatchname')?.setValue("6549489f60ab1e217bd6c931");
        
       console.log(this.updateBatchTrainerModuleForm.controls['updatedbatchname']);

       //to get batch details by batchaname to set its id to updatebatchname select box

    this.http.get("http://localhost:3000/admin/getBatchByBatchName/"+dataFromRow.batchName).subscribe((data:any)=>
   {
      console.log(" Output :batch details by batch name");
      console.log(data);
      let batchId=data.batch[0]._id;
      this.updateBatchTrainerModuleForm.controls['updatedbatchname'].setValue(batchId);
  
   });

  
    this.updateBatchTrainerModuleForm.controls['updatedmodulename'].setValue(dataFromRow.moduleName);
    this.updateBatchTrainerModuleForm.controls['updatedtrainerfullname'].setValue(dataFromRow.trainerFullName);
    this.updateBatchTrainerModuleForm.controls['updatedstartdate'].setValue(dataFromRow.startDate);
    this.updateBatchTrainerModuleForm.controls['updatedenddate'].setValue(dataFromRow.endDate);


    this.selectedId=dataFromRow._id;

  }

  updateBatchTrainerModule()
  {
    console.log("inside Updated Batch Trainer Module");
    console.log(this.updateBatchTrainerModuleForm);
    console.log(this.updateBatchTrainerModuleForm.value);

    //update api call

    let bodydata :any={
      batchName:this.selectedUpdatedBatchName,
      courseName:this.updateBatchTrainerModuleForm.value.updatedcoursename,
      moduleName:this.updateBatchTrainerModuleForm.value.updatedmodulename,
      trainerFullName:this.updateBatchTrainerModuleForm.value.updatedtrainerfullname,
      startDate:this.updateBatchTrainerModuleForm.value.updatedstartdate,
      endDate:this.updateBatchTrainerModuleForm.value.updatedenddate,
    };
    console.log(bodydata);

    // update api Call
    this.http.put<any>( `http://localhost:3000/admin/updateBatchTrainerModule/${this.selectedId}`,bodydata).subscribe((data:any)=>{
      console.log("From Backend" + data.message);
      this.getAllBatchTrainerModule();
  });


    this.updateBatchTrainerModuleForm.reset();
  }

  //delete related code
  onDeleteBatchTrainerModule( id: any)
  {
    console.log(id);


    this.selectedId=id;
  }

  deleteBatchTrainerModule()
  {
    console.log(this.selectedId);
    //delete api call
    this.http.delete(`http://localhost:3000/admin/deleteBatchTrainerModule/${this.selectedId}`).subscribe((data:any)=>{
      console.log("From Backend" + data.message);
      this.getAllBatchTrainerModule();
  });


 
    this.selectedId="";
  }
}
