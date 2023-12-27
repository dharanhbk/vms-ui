import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService, SelectItem } from 'primeng/api';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SpeedDialModule } from 'primeng/speeddial';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { Entity } from '../../model/entity';
import { QuestionnaireAnswer } from '../../model/QuestionnaireAnswer';
import { EntityService } from '../../services/entity-service.service';

@Component({
  selector: 'app-entity',
  standalone:true,
  imports: [TableModule,
    ButtonModule,
    SpeedDialModule,
    ToastModule,
    FormsModule,
    CommonModule,
    AutoCompleteModule,
    InputTextModule,
    RadioButtonModule,
    DropdownModule,
    EditorModule,
    InputTextareaModule
  ],  
  templateUrl: './entity.component.html',
  styleUrl: './entity.component.scss'
})
export class EntityComponent implements OnInit{

  products!:QuestionnaireAnswer[];
  bookingProducts!: QuestionnaireAnswer[];
  vehicleProducts!: QuestionnaireAnswer[];
  driverProducts!: QuestionnaireAnswer[];

  entity:Entity=new Entity();

  dataTypes!: SelectItem[];

    clonedProducts: { [s: number]: QuestionnaireAnswer } = {};

    constructor(private entityService: EntityService, private messageService: MessageService) {}

    ngOnInit() {
      this.getEntityDetails();

        this.dataTypes = [
            { label: 'Text', value: 'text' },
            { label: 'Number', value: 'number' },
            { label: 'Email', value: 'email' },
            { label: 'Check Box', value:'checkbox'},
            { label: 'Dropdown', value:'dropdown'}
        ];
    }

    getEntityDetails() {
      this.entityService.getEntityDetails('1').subscribe({
        next: (res: any) => {
          console.log(res)
          this.mapBookingData(res)
        }, error: (err: any) => {
          console.log(err)
        }
      })
    }

    saveEntityDetails() {
      console.log(this.entity);
      this.entityService.saveEntityDetails(this.entity).subscribe({
        next: (res: any) => {
          console.log(res)
          this.mapBookingData(res)
        }, error: (err: any) => {
          console.log(err)
        }
      })
    }
  
    mapBookingData(res: any) {
      this.entity = res;
      this.products = this.entity.questions.sort((a:any,b:any):any=>b.questionId-a.questionId);
      this.bookingProducts=this.products.filter(p => p.questionCategory==='BOOKING');
      this.vehicleProducts=this.products.filter(p => p.questionCategory==='VEHICLE');
      this.driverProducts=this.products.filter(p => p.questionCategory==='DRIVER');
    }


    addQuestion(type:string){
      if(this.products == undefined)
        this.products = new Array<QuestionnaireAnswer>();
      var ques = new QuestionnaireAnswer();
      const idArr = this.products.map(p=>p.questionId);
      ques.questionId = idArr.length==0?1:Math.max(...idArr)+1;
      ques.questionDataType='text';
      ques.questionCategory=type;
      this.products.push(ques);
      if(type==='BOOKING'){
        this.bookingProducts.push(ques);
        this.bookingProducts.sort((a:any,b:any):any=>b.questionId-a.questionId)
      }
      else if(type='VEHICLE'){
        this.vehicleProducts.push(ques);
        this.vehicleProducts.sort((a:any,b:any):any=>b.questionId-a.questionId)
      }
      else if(type='DRIVER'){
        this.driverProducts.push(ques);
        this.driverProducts.sort((a:any,b:any):any=>b.questionId-a.questionId)
      }
      // this.products.sort((a:any,b:any):any=>b.questionId-a.questionId)
      console.log(this.products);
    }

    onRowEditInit(question: QuestionnaireAnswer) {
        this.clonedProducts[question.questionId as number] = { ...question };
    }

    onRowEditSave(question: QuestionnaireAnswer) {
        if (question.questionCode !=null) {
            this.saveEntityDetails();
            delete this.clonedProducts[question.questionId as number];
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product is updated' });
        } else {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid Price' });
        }
    }

    onRowEditCancel(question: QuestionnaireAnswer, index: number) {
        this.products[index] = this.clonedProducts[question.questionId as number];
        delete this.clonedProducts[question.questionId as number];
    }

}
