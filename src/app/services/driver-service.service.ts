import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { QueAnsRequest } from '../model/Booking';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  getBookingDetailsUrl:string;
  getQuestions:string;
  getAllEntity:string;
  saveBooking:string;

  constructor(
    private http: HttpClient
  ) {
    this.getBookingDetailsUrl=environment.resource_url+"/booking/v1.0/getDriverDetailsByEntityCode";
    this.getQuestions=environment.resource_url+"/booking/v1.0/getQuestionsByEntityCode";
    this.getAllEntity=environment.resource_url+"/booking/v1.0/getAllEntityList";
    this.saveBooking=environment.resource_url+"/booking/v1.0/saveDriverDetails";
    
   }

  getDriverDetailsByEntityCode(entityCode:string,pageNo:number=0,fetchSize:number=5){
    return this.http.get(`${this.getBookingDetailsUrl}/${entityCode}?pageNo=${pageNo}&fetchSize=${fetchSize}`)
  }

  getQuestionsByEntityCode(entityCode:string){
    return this.http.get(`${this.getQuestions}/${entityCode}?questionCategory=DRIVER`)
  }

  getAllEntityList(){
    return this.http.get(`${this.getAllEntity}`)
  }

  saveDriverDetails(bookingReq:QueAnsRequest){
    return this.http.post(`${this.saveBooking}`,bookingReq);
  }
}
