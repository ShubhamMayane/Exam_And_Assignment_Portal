import { Component,OnInit } from '@angular/core';
import { SyllabusService } from '../syllabus.service';

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.css']
})
export class SyllabusComponent implements OnInit
 {

  public syllabus: any=[];
  constructor(public lobj:SyllabusService){

  }

  ngOnInit()
  {
    this.lobj.getJsonData().subscribe(data=>this.syllabus=data);
  }
}
