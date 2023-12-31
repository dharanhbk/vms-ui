import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { Answer, QueAnsRequest } from 'src/app/model/Booking';
import { QuestionnaireAnswer } from 'src/app/model/QuestionnaireAnswer';
import { BookingService } from 'src/app/services/booking-service.service';

@Component({
  selector: 'app-ru-form',
  standalone: true,
  imports: [
    DropdownModule, ButtonModule,ToastModule,
    FormsModule,CommonModule,AutoCompleteModule,InputTextModule,
    ConfirmDialogModule,TooltipModule,CalendarModule,RadioButtonModule
  ],
  templateUrl: './ru-form.component.html',
  styleUrl: './ru-form.component.scss',
  providers:[ConfirmationService, MessageService]
})
export class RuFormComponent implements OnChanges{

  // @Input() value!: number;
  @Input() data!: QuestionnaireAnswer[];
  @Input() loading: boolean = false;
  @Input() optionsMap=new Map();
  position: string = 'center';
  @Output() postQuesAns = new EventEmitter<QueAnsRequest>();

  constructor(private _bookingService: BookingService,
    private confirmationService: ConfirmationService, 
    private messageService: MessageService) { }

  ngOnChanges(changes: SimpleChanges){
    // this.loading = changes['loading']!.currentValue;
    // console.log(changes);
  }


  submit() {
    let req = new QueAnsRequest();
    req.fkEntityCode = this.data[0].fkEntityCode;
    
    this.data.forEach(ans => {
      let answer = new Answer();
      answer.questionCode = ans.questionCode;
      answer.questionText = ans.questionText;
      answer.parentQuestionCode = ans.parentQuestionCode;
      answer.answer = ans.answer;
      req.quesAnswers.push(answer);
    });
    this.postQuesAns.emit(req);
  }

  load() {
    // this.loading = true;
    this.submit();
  }

  confirmPosition(position: string) {
    this.position = position;
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
    return this.optionsMap.get(id)
  }

  generateRadio(values:string){
    const arr = values.split('|');
    const darr = new Array();
    arr.forEach(a=> darr.push({name:a , key:a}));
    return darr;
  }
}
