import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent 
{
  
  public Trainers:any=[];
  public totalTrainers:any=[];
  constructor(private http:HttpClient)
  {

  }
  ngOnInit(): void{
    console.log(localStorage.getItem('token'))
    
    // //get batchtrainermodule api call
    // this.http.get("http://localhost:3000/student/getStudent/"+localStorage.getItem('token')).subscribe((data:any)=>{

    // console.log("Tushar")
    //  console.log(data.result[0].courseName)
    //  localStorage.setItem('courseName',data.result[0].courseName);
    //  localStorage.setItem('batchName',data.result[0].batchName);
    // //  console.log(data[0]);
    // //  console.log(data[0].result);

    // //  this.userDetails=data.batches;
    //  });

     this.http.get("http://localhost:3000/student/getTrainers/"+localStorage.getItem('courseName')+"/"+localStorage.getItem('batchName')).subscribe((data:any)=>{

     console.log(data)
    //  this.userDetails=data.batches;
    this.Trainers=data.result;
    console.log(this.Trainers);



  //   for(let i=0;i<this.Trainers.length;i++)
  //  {
  //   console.log(this.Trainers[i].firstName+' '+this.Trainers[i].lastName);
  //   this.totalTrainers.push(this.Trainers[i].firstName+' '+this.Trainers[i].lastName);
  //  }
  //  console.log("students")
  //  console.log(this.totalTrainers);
     });
    }

}
