import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { QueAnsRequest } from 'src/app/model/Booking';
import { RuTableComponent } from '../../reusable/ru-table/ru-table.component';
import { BookingService } from '../../services/booking-service.service';
import { EntityService } from 'src/app/services/entity-service.service';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [RuTableComponent],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent implements OnInit{

  @ViewChild(RuTableComponent) rutableComponent!:RuTableComponent;
  
  // pSpeedDial:boolean=false;
  booking!:QueAnsRequest;
  pTableData!:any[][];
  pHeaders!:any[];
  pFlag:boolean=false;
  entities:any[]=[];
  totalRecords: any;
  pageNo: number=0;
  fetchRecords: number=5;
  selectedEntityCode: any;

  constructor(private _bookingService: BookingService, private messageService: MessageService,
    private entityService:EntityService) { }
  ngOnInit(){
    this.getEntities();
  }

  getEntities() {
    this.entityService.getAllEntityCards().subscribe({
      next: (res: any) => {
        console.log(res)
        this.mapData(res);
        this.selectedEntityCode = res!.data[0]!.entityCode;
        this.getBookingDetails(res!.data[0]!.entityCode);
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
  

  getSpeedDialAction(data:{opt:string,bookingId:number}){
    if(data.opt === 'EDIT'){
      this._bookingService.getBookingDetailById(data.bookingId).subscribe({
        next: (res: any) => {
          console.log(res)
          this.mapBookData(res);
          this.rutableComponent.queAns = this.booking.quesAnswers;
        }, error: (err: any) => {
          console.log(err)
        }
      });
    }
  }

  mapBookData(res:any){
    this.booking=res['data'];
  }

  getBookingDetails(entityCode:string) {
    this._bookingService.getBookingDetailsByEntityCode(entityCode,this.pageNo,this.fetchRecords).subscribe({
      next: (res: any) => {
        console.log(res)
        this.mapBookingData(res)
      }, error: (err: any) => {
        console.log(err)
      }
    })
  }
  headerDropdownSelected(event:any){
    console.log(event)
    this.pageNo=0;
    this.fetchRecords=5;
    this.selectedEntityCode = event['value'];
    this.getBookingDetails(event['value'])
  }
  onPageChange(event:any){
    console.log(event)
    this.pageNo=event['first'] / event['rows']
    this.fetchRecords=event['rows']
    this.getBookingDetails(this.selectedEntityCode)
  }

  mapBookingData(res: any) {
    this.pTableData = res['data']
    this.pHeaders = this.pTableData[0];
    this.pTableData = this.pTableData.slice(1, this.pTableData.length);
    const n = this.pTableData.length;
    this.pFlag = true;
    this.totalRecords=res['totalCount'];
  }

}

