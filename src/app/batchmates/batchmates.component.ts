import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-batchmates',
  templateUrl: './batchmates.component.html',
  styleUrls: ['./batchmates.component.css']
})
export class BatchmatesComponent 
{

  public Batchmates:any=[];
  public totalStudent:any=[];
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

     this.http.get("http://localhost:3000/student/getBatchmates/"+localStorage.getItem('courseName')+"/"+localStorage.getItem('batchName')).subscribe((data:any)=>{

     console.log(data)
    //  this.userDetails=data.batches;
    this.Batchmates=data.result;
    console.log(this.Batchmates);



    for(let i=0;i<this.Batchmates.length;i++)
   {
    console.log(this.Batchmates[i].firstName+' '+this.Batchmates[i].lastName);
    this.totalStudent.push(this.Batchmates[i].firstName+' '+this.Batchmates[i].lastName);
   }
   console.log("students")
   console.log(this.totalStudent);
     });
    }
 
}
