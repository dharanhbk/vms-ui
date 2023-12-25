import { ChangeDetectorRef, Component } from '@angular/core';
import { QueAnsRequest } from 'src/app/model/Booking';
import { QuestionnaireAnswer } from 'src/app/model/QuestionnaireAnswer';
import { RuFormComponent } from 'src/app/reusable/ru-form/ru-form.component';
import { DriverService } from 'src/app/services/driver-service.service';

@Component({
  selector: 'app-driver-form',
  standalone: true,
  imports: [RuFormComponent],
  templateUrl: './driver-form.component.html',
  styleUrl: './driver-form.component.scss'
})
export class DriverFormComponent {

  pValue!: number;
  pData!: QuestionnaireAnswer[];
  pLoading: boolean = false;
  pOptionsMap=new Map();


  constructor(private _service: DriverService,private changeDetectorRef:ChangeDetectorRef){}

  ngOnInit(){
    this.getQuestionByEntityCode();
  }

  getQuestionByEntityCode() {
    this._service.getQuestionsByEntityCode('1').subscribe({
      next: (res: any) => {
        this.mapBookingData(res)
      }, error: (err: any) => {
        console.log(err)
      }
    })
  }

  mapBookingData(res: any) {
    this.pData = res['data'];
    this.pData.forEach((element) => {
      if(element.questionDataType==='dropdown'){
        let options:any[]=[];
        element!.possibleAnswers.split("|").forEach((e:any)=>options.push({label:e,value:e}));
        this.pOptionsMap.set(element['questionId'],options)
      }
    });
  }

  getPostData(queAns:QueAnsRequest) {
    this._service.saveDriverDetails(queAns).subscribe({
      next: (res: any) => {
        console.log("inside postdata prent: ",res);
        // this.pLoading = false;
        // this.changeDetectorRef.detectChanges();
      }, error: (err: any) => {
        console.log(err);
        // this.pLoading = false;
      }
    });
  }
}
