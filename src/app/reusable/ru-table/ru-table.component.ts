import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, OnInit, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuItem, MessageService } from 'primeng/api';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { SpeedDialModule } from 'primeng/speeddial';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { Answer } from 'src/app/model/Booking';
import { QuestionnaireAnswer } from 'src/app/model/QuestionnaireAnswer';

@Component({
  selector: 'app-ru-table',
  standalone:true,
  imports:[
    TableModule,
    ButtonModule,
    SpeedDialModule,
    ToastModule,
    FormsModule,
    CommonModule,
    AutoCompleteModule,
    InputTextModule,
    DialogModule,
    MessageModule
  ],
  templateUrl: './ru-table.component.html',
  styleUrl: './ru-table.component.scss'
})
export class RuTableComponent implements OnInit {

  @Output() speedDial =new EventEmitter<any>();
  visible: boolean=false;
  queAns!:Answer[];

  @Input() headers!: any[];
  @Input() flag: boolean = false;
  first = 0;
  rows = 10;
  idx = 0;
  sBookId!:number;
  @Input() tableData!: any[][];
  items!: MenuItem[];

  constructor( private messageService: MessageService) { }

  showDialog(opt:string) {
    this.visible=true;
    this.speedDial.emit({opt:opt,bookingId:this.sBookId});
    }
    speedDialCLick(id: any) {
      this.sBookId=id;
    }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  pageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }

  isLastPage(): boolean {
    return this.tableData ? this.first === this.tableData.length - this.rows : true;
  }

  isFirstPage(): boolean {
    return this.tableData ? this.first === 0 : true;
  }



  ngOnInit() {
    this.items = [
      {
        icon: 'pi pi-pencil',
        command: () => {
          // console.log(this.);
          this.showDialog('EDIT');
          this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
        }
      },
      {
        icon: 'pi pi-refresh',
        command: () => {
          this.showDialog('REFRESH');
          this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
        }
      },
      {
        icon: 'pi pi-trash',
        command: () => {
          this.showDialog('DELETE');
          this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
        }
      },
      {
        icon: 'pi pi-upload',
        routerLink: ['/fileupload']
      },
      {
        icon: 'pi pi-external-link',
        target: '_blank',
        url: 'http://angular.io'
      }
    ];
  }

}
