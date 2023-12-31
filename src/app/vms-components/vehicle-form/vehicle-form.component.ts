import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { QueAnsRequest } from 'src/app/model/Booking';
import { QuestionnaireAnswer } from 'src/app/model/QuestionnaireAnswer';
import { RuFormComponent } from 'src/app/reusable/ru-form/ru-form.component';
import { EntityService } from 'src/app/services/entity-service.service';
import { VehicleService } from 'src/app/services/vehicle-service.service';

@Component({
  selector: 'app-vehicle-form',
  standalone: true,
  imports: [RuFormComponent, DropdownModule, CommonModule, FormsModule],
  templateUrl: './vehicle-form.component.html',
  styleUrl: './vehicle-form.component.scss'
})
export class VehicleFormComponent {

  pValue!: number;
  pData!: QuestionnaireAnswer[];
  pLoading: boolean = false;
  pOptionsMap=new Map();
  pRadioOptionsMap=new Map();
  pCheckboxOptionsMap=new Map();
  entities: any=[];
  selectedEntity: any;


  constructor(private _service: VehicleService ,private changeDetectorRef:ChangeDetectorRef,
    private entityService: EntityService){}

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
      }else if(element.questionDataType==='radio'){
        let options:any[]=[];
        element!.possibleAnswers.split("|").forEach((e:any)=>options.push({name:e,category:e}));
        this.pRadioOptionsMap.set(element['questionId'],options)
      }else if(element.questionDataType==='checkbox'){
        let options:any[]=[];
        element!.possibleAnswers.split("|").forEach((e:any)=>options.push({name:e,category:e}));
        this.pCheckboxOptionsMap.set(element['questionId'],options)
      }
    });
  }

  getPostData(queAns:QueAnsRequest) {
    queAns.quesAnswers.map(e=>{
      if(Array.isArray(e.answer)){
        e.answer= e.answer.toString();
      }
    })
    this._service.saveVehcileDetails(queAns).subscribe({
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
