import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-student-calender',
  templateUrl: './student-calender.component.html',
  styleUrls: ['./student-calender.component.css']
})
export class StudentCalenderComponent {
  addEventForm:FormGroup;

  //to render courseName in  coursename select box in addEventForm
  courseDetails:any=[];

  //to render batchNames in batchName select box in addEventForm
  batchDetails:any=[];

  eventTypes:any=[
    {type:"Hoilday",color:"green"},
    {type:"Class Test",color:"red"},
    {type:"Celebration",color:"yellow"}
]

//to show Event Tags on calendar
  eventsDetails:any[]= [
    // { title: 'event 1', date: '2023-10-31' }, //yyyy/mm/dd
    // { title: 'event 2', date: '2023-11-02' }
  ]


  //calender option
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
  };
  

  constructor(public http:HttpClient)
  {
    this.addEventForm=new FormGroup({
 
      'eventname':new FormControl(null,Validators.required),
      'eventdate':new FormControl(null,[Validators.required]),
      'eventtype':new FormControl(null,[Validators.required]),
      'coursename':new FormControl(null,Validators.required),
      'batchname':new FormControl(null,Validators.required)
    });
  
  }
  onDateClick(res: any) {
    alert('Clicked on date : ' + res.dateStr);
    console.log(res.dateStr);
  }


  ngOnInit()
  { 
      //fetch event details from database

     this.http.get("http://localhost:3000/admin/getAllEvent").subscribe((data:any)=>{
      //console.log(data);
      //console.log(data.details);
      let eventDetailItem:any;
      for(let event of data.details)
      {   
          console.log("inside for loop");
          //console.log(event);
          eventDetailItem=
          {
              title:event.eventName,
              date:event.eventDate,
              color:event.eventType
          }
          console.log(eventDetailItem);
          this.eventsDetails.push(eventDetailItem);
       }

       console.log("------------")
       console.log(this.eventsDetails);

        //to update event in calendar

    setTimeout(() => {
      this.calendarOptions = {
        initialView: 'dayGridMonth',
        events: this.eventsDetails,
        dateClick: this.onDateClick.bind(this),
      };
    }, 500);

 });







     //for render coursenames as a options in  course select box
     this.http.get("http://localhost:3000/admin/getAllCourse").subscribe((data:any)=>{
      console.log("hello") ;
      console.log(data.allCourses);
         this. courseDetails=data.allCourses;

         //console.log(this. courseDetails);
      });
  }


 

  getAllEvents()
  {
      //fetch event details from database

      this.http.get("http://localhost:3000/admin/getAllEvent").subscribe((data:any)=>{
        //console.log(data);
        //console.log(data.details);
        let eventDetailItem:any;
        for(let event of data.details)
        {   
            console.log("inside for loop");
            //console.log(event);
            eventDetailItem=
            {
                title:event.eventName,
                date:event.eventDate,
                color:event.eventType
            }
            console.log(eventDetailItem);
            this.eventsDetails.push(eventDetailItem);
         }
  
         console.log("------------")
         console.log(this.eventsDetails);

          //to update event in calendar
  
          setTimeout(() => {
            this.calendarOptions = {
              initialView: 'dayGridMonth',
              events: this.eventsDetails,
              dateClick: this.onDateClick.bind(this),
            };
          },500);

       
        });
  
  
  
  }

  addEvent()
  {
    console.log(this.addEventForm.value);

    let eventDataToInsert={
      eventName:this.addEventForm.value.eventname,
      eventDate:this.addEventForm.value.eventdate,
      eventType:this.addEventForm.value.eventtype,
      courseName:this.addEventForm.value.coursename,
      batchName:this.addEventForm.value.batchname
    }

    console.log(eventDataToInsert);

    //add event api call start

    this.http.post("http://localhost:3000/admin/addEvent",eventDataToInsert).subscribe(  (resultData: any) => {
      console.log(resultData);
      console.log(resultData.message);
      console.log(resultData.status);
      this.getAllEvents();
      
    });

    //add event api call end

    document.getElementById("add_Form_Close_Btn")?.click();

    this.addEventForm.reset();

  }

  loadBatchesInSelectBox(data:any)
  {

   
    console.log(data.target.value);
    //to clear options in batches select box
    this.batchDetails=[];

    let selectedCourseName=data.target.value; //get selected courseName form course select box
    console.log(selectedCourseName);
    this.http.get("http://localhost:3000/admin/getBatch/"+selectedCourseName).subscribe((data:any)=>{

     console.log(data)
     this.batchDetails=data.batches;

     });

     

  }
}
