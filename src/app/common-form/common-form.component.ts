import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking-service.service';
// import { QuestionnaireAnswer } from './model';

@Component({
  selector: 'app-common-form',
  templateUrl: './common-form.component.html',
  styleUrls: ['./common-form.component.scss']
})
export class CommonFormComponent implements OnInit{

  value!:number;
  data!:QuestionnaireAnswer[];

  constructor(private _bookingService:BookingService){}

  ngOnInit(){
    this.getQuestionByEntityCode();
  }

  getQuestionByEntityCode(){
    this._bookingService.getQuestionsByEntityCode('1').subscribe({
      next: (res: any) => {
        console.log(res)
        this.mapBookingData(res)
      }, error: (err: any) => {
        console.log(err)
      }
    })
  }

  mapBookingData(res: any) {
    this.data = res['data'];
    console.log(this.data);
  }
}

export class QuestionnaireAnswer{
  answer!:string;
  questionText!:string;
  questionCode!:string;
  questionDataType!:string;
  possibleAnswers!:string[];
  parentQuestionCode!:string;
  isMainMandatory!:boolean;
  fkEntityCode!:string;
  isActiveInd!:boolean;
  columnOrderId!:number;
  questionCategory!:string;
  questionVersion!:number;
  questionType!:string;
  
}
