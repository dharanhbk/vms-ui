import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { BookingRequest } from '../model/answer';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  getBookingDetailsUrl:string;
  getQuestions:string;
  getAllEntity:string;
  saveBooking:string;

  constructor(
    private http: HttpClient
  ) {
    this.getBookingDetailsUrl="http://localhost:8080/booking/v1.0/getBookingDetailsByEntityCode";
    this.getQuestions="http://localhost:8080/booking/v1.0/getQuestionsByEntityCode";
    this.getAllEntity="http://localhost:8080/booking/v1.0/getAllEntityList";
    this.saveBooking="http://localhost:8080/booking/v1.0/saveBookingDetails";
   }

  getBookingDetailsByEntityCode(entityCode:string){
    return this.http.get(`${this.getBookingDetailsUrl}/${entityCode}`)
  }

  getQuestionsByEntityCode(entityCode:string){
    return this.http.get(`${this.getQuestions}/${entityCode}`)
  }

  getAllEntityList(){
    return this.http.get(`${this.getAllEntity}`)
  }

  saveBookingDetails(bookingReq:BookingRequest){
    return this.http.post(`${this.saveBooking}`,bookingReq);
  }
}
