import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Answer, QueAnsRequest } from '../../model/Booking';
import { QuestionnaireAnswer } from '../../model/QuestionnaireAnswer';
import { BookingService } from '../../services/booking-service.service';
// import { QuestionnaireAnswer } from './model';

@Component({
  selector: 'app-common-form',
  templateUrl: './common-form.component.html',
  styleUrls: ['./common-form.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class CommonFormComponent implements OnInit {

  // value!: number;
  data!: QuestionnaireAnswer[];
  loading: boolean = false;
  position: string = 'center';
  optionsMap=new Map();

  constructor(private _bookingService: BookingService,
    private confirmationService: ConfirmationService, 
    private messageService: MessageService) { }

  ngOnInit() {
    this.getQuestionByEntityCode();
  }

  getQuestionByEntityCode() {
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
    this.data.forEach((element) => {
      if(element.questionDataType==='dropdown'){
        let options:any[]=[];
        element!.possibleAnswers.split("|").forEach((e:any)=>options.push({label:e,value:e}));
        this.optionsMap.set(element['questionId'],options)
      }
    });
    console.log(this.data);
  }

  submit() {
    console.log("inside submit")
    let bookingReq = new QueAnsRequest();
    bookingReq.fkEntityCode = this.data[0].fkEntityCode;
    
    this.data.forEach(ans => {
      let answer = new Answer();
      answer.questionCode = ans.questionCode;
      answer.questionText = ans.questionText;
      answer.parentQuestionCode = ans.parentQuestionCode;
      answer.answer = ans.answer;
      bookingReq.quesAnswers.push(answer);
    });
    this._bookingService.saveBookingDetails(bookingReq).subscribe({
      next: (res: any) => {
        console.log(res);
        this.loading = false;
        // this.mapBookingData(res)
      }, error: (err: any) => {
        console.log(err);
        this.loading = false;
      }
    });

  }

  load() {
    this.loading = true;
    console.log(this.data);
    this.submit();
    // setTimeout(() => {
    //   this.loading = false
    // }, 2000);
  }

  confirmPosition(position: string) {
    this.position = position;
console.log("testing log");
    this.confirmationService.confirm({
        message: 'Are you sure you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-info-circle',
        acceptIcon:"none",
        rejectIcon:"none",
        rejectButtonStyleClass:"p-button-text",
        accept: () => {
            this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Request submitted' });
            this.load();
        },
        reject: () => {
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'Process incomplete', life: 3000 });
        },
        key: 'positionDialog'
    });
  }
  getdropdownOptions(id:any){
    console.log(this.optionsMap)
    return this.optionsMap.get(id)
  }
}

// export class QuestionnaireAnswer {
//   answer!: string;
//   questionText!: string;
//   questionCode!: string;
//   questionDataType!: string;
//   possibleAnswers!: string[];
//   parentQuestionCode!: string;
//   isMainMandatory!: boolean;
//   fkEntityCode!: string;
//   isActiveInd!: boolean;
//   columnOrderId!: number;
//   questionCategory!: string;
//   questionVersion!: number;
//   questionType!: string;

// }
