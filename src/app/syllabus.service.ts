import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SyllabusService {

  constructor(private http: HttpClient) {}

  getJsonData() 
  {
      return this.http.get('/assets/syllabusData.json');
  }
}
