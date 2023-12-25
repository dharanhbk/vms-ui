import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { QueAnsRequest } from '../model/Booking';

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
    this.getBookingDetailsUrl="http://localhost:8080/booking/v1.0/getDriverDetailsByEntityCode";
    this.getQuestions="http://localhost:8080/booking/v1.0/getQuestionsByEntityCode";
    this.getAllEntity="http://localhost:8080/booking/v1.0/getAllEntityList";
    this.saveBooking="http://localhost:8080/booking/v1.0/saveDriverDetails";
   }

  getDriverDetailsByEntityCode(entityCode:string){
    return this.http.get(`${this.getBookingDetailsUrl}/${entityCode}`)
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
