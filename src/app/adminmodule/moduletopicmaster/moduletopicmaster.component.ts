import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moduletopicmaster',
  templateUrl: './moduletopicmaster.component.html',
  styleUrls: ['./moduletopicmaster.component.css']
})
export class ModuletopicmasterComponent {

  //add ModuleTopic from object
  addModuleTopicForm:FormGroup;
  updateModuleTopicForm:FormGroup;


  selectedId:any;


  //dummy data
  moduletopicDetails:any=[];
  updatedmoduletopicDetails:any=[];


  //for "course" select box in modal box
  courseDetails:any=[];

  //for "module" select box in modal box
  moduleDetails:any=[];

 
  constructor(public http :HttpClient)
    {
       //Creating a form object of add student form
       this.addModuleTopicForm= new FormGroup({


        'coursename': new FormControl(null,Validators.required),
        'modulename': new FormControl(null,Validators.required),
        'topicname': new FormControl(null,Validators.required)
       });
    

    
    this.updateModuleTopicForm= new FormGroup({


      'updatedcoursename': new FormControl(null,Validators.required),
      'updatedmodulename': new FormControl(null,Validators.required),
      'updatedtopicname': new FormControl(null,Validators.required)
    })

                                                                  
}

ngOnInit(): void {
 
      //get moduletopic api call
      //for course select box
      this.http.get("http://localhost:3000/admin/getAllCourse").subscribe((data:any)=>{
      console.log(data.allCourses);
      console.log("get Course api");
       this.courseDetails=data.allCourses;
       console.log(this.courseDetails);
    });

   

    //for rendering ModuleTopicData in table
    this.http.get("http://localhost:3000/admin/getAllTopic").subscribe((data:any)=>{
      console.log("Module topics data");
      console.log(data);
      this. moduletopicDetails=data.allTopics;
      console.log("Inside Module Topic api ");
      console.log(this.moduletopicDetails);
       
    });

}





getAllModuleTopics()
{
     //get moduletopic api call
     this.http.get("http://localhost:3000/admin/getAllTopic").subscribe((data:any)=>{
      console.log(data);
      this. moduletopicDetails=data.allTopics;
      console.log("rajshri")
      console.log(this. moduletopicDetails)
       
    });
}
//load module name according to course in module select box in add and update moduletopic modals
loadModulesInModuleSelectBox(data:any)
{ 
  //all module name will be rendered only when end user select a coursename in 
   let selectedCourseName=data.target.value;
  console.log(selectedCourseName);
   //for rendering the moduleNames according to courseName selected in select box
   this.http.get("http://localhost:3000/admin/getModule/"+selectedCourseName).subscribe((data:any)=>{
    console.log(data);

    //first empty the array
    this.moduleDetails=[];
    this.moduleDetails=data.module;
    console.log("get ModuleApi ");
    console.log(this.moduleDetails);
     
  });

}




//add ModuleTopic Logic
addModuleTopic()
{
  console.log("inside addModuleTopic()");

  if(this.addModuleTopicForm.valid==true)
  {
     //If form is valid then post form data in database
     console.log(this.addModuleTopicForm);
     console.log(this.addModuleTopicForm.value);
     
 
     //post data logic 
     let dataToInput={
       'courseName':this.addModuleTopicForm.value.coursename,
       'moduleName' :this.addModuleTopicForm.value.modulename,
       'topicName' :this.addModuleTopicForm.value.topicname
     }
 
     console.log(dataToInput);
 
     //post api call
 
     this.http.post("http://localhost:3000/admin/addTopic", dataToInput).subscribe(  (resultData: any) => {
     console.log("Agre");    
     console.log(resultData);
         console.log(resultData.message);
         console.log(resultData.status);
         this.getAllModuleTopics();
         
       });
 
      
  
 
 
     //to close modal
     let closeButton=document.getElementById("add_Form_Close_Btn");
     closeButton?.click();
 
   
     
   //to reset the value of form(if we want to reset all the textfeilds of the form)
   this.addModuleTopicForm.reset();

  }

  else
  {
    alert("Please Fill All Valid Module Topic Details");
  }
  
  
   
}






//update ModuleTopic Logic

onUpdate(data:any)
{
  console.log("inside onUpdate function")
  console.log(data);
  console.log(data.courseName);
  console.log(data.moduleName);
  console.log(data.topicName);
  console.log(data._id)


  this.updateModuleTopicForm.controls['updatedcoursename'].setValue(data.courseName)
  //to load modulename updatedmodulename select box

  //definition of following method
  let courseNameData={
    target:{
      value:data.courseName
    }
  }

  this.loadModulesInModuleSelectBox(courseNameData);
  
  this.updateModuleTopicForm.controls['updatedmodulename'].setValue(data.moduleName)
  this.updateModuleTopicForm.controls['updatedtopicname'].setValue(data.topicName)
  



this.selectedId=data._id;
console.log(this.selectedId);

}


updateModuleTopic()
{
  console.log("Inside Update ModuleTopic");

  if(this.updateModuleTopicForm.valid==true)
  {
      console.log(this.updateModuleTopicForm);
       console.log(this.updateModuleTopicForm.value);

      let bodydata :any={
        courseName:this.updateModuleTopicForm.value.updatedcoursename,
        moduleName:this.updateModuleTopicForm.value.updatedmodulename,
        topicName:this.updateModuleTopicForm.value.updatedtopicname
      };
      console.log(bodydata);

      //update api call
      this.http.put<any>(`http://localhost:3000/admin/updateTopic/${this.selectedId}`,bodydata).subscribe((data:any)=>{
        console.log("From Backend" + data.message);
      
        this.updatedmoduletopicDetails=data.module

        this.getAllModuleTopics();
      })


        this.selectedId="";
      
      this.updateModuleTopicForm.reset();
      document.getElementById("update_Form_Close_Btn")?.click();
    }
  else{

    alert("Please Fill All Valid Module Topic Details");
  }
  
}

//delete realted code
onDeleteModuleTopic( id:any)
{
  console.log(id);

  this.selectedId=id;
}

deleteModuleTopic()
{
  console.log(this.selectedId);
  //delete api call
  
  this.http.delete(`http://localhost:3000/admin/deleteTopic/${this.selectedId}`).subscribe((data:any)=>{
      console.log("From Backend" + data.message);
      this.getAllModuleTopics();
    });


  
  this.selectedId="";
}
}
