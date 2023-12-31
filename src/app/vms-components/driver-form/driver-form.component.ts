import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { QueAnsRequest } from 'src/app/model/Booking';
import { QuestionnaireAnswer } from 'src/app/model/QuestionnaireAnswer';
import { RuFormComponent } from 'src/app/reusable/ru-form/ru-form.component';
import { DriverService } from 'src/app/services/driver-service.service';
import { EntityService } from 'src/app/services/entity-service.service';

@Component({
  selector: 'app-driver-form',
  standalone: true,
  imports: [RuFormComponent, FormsModule, DropdownModule, CommonModule],
  templateUrl: './driver-form.component.html',
  styleUrl: './driver-form.component.scss'
})
export class DriverFormComponent {

  pValue!: number;
  pData!: QuestionnaireAnswer[];
  pLoading: boolean = false;
  pOptionsMap=new Map();
  entities: any=[];
  selectedEntity: any;


  constructor(private _service: DriverService,private changeDetectorRef:ChangeDetectorRef,    private entityService: EntityService){}

  ngOnInit(){
    this.getEntities();
  }
  getEntities() {
    this.entityService.getAllEntityCards().subscribe({
      next: (res: any) => {
        console.log(res)
        this.mapData(res);
        this.getQuestionByEntityCode(res!.data[0]!.entityCode);
      }, error: (err: any) => {
        console.log(err)
      }
    })
  }
  mapData(res: any) {
    res['data'].forEach((element:any) => {
      this.entities.push({label:element.entityName, value: element.entityCode})
    });
    console.log(this.entities)
  }
  headerDropdownChanged(){
    console.log(this.selectedEntity)
    this.getQuestionByEntityCode(this.selectedEntity.value);
  }
  getQuestionByEntityCode(entityCode:any) {
    this._service.getQuestionsByEntityCode(entityCode).subscribe({
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
