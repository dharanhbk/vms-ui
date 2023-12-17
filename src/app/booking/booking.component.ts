import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { RuTableComponent } from '../reusable/ru-table/ru-table.component';
import { BookingService } from '../services/booking-service.service';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [RuTableComponent],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent implements OnInit{

  pTableData!:any[][];
  pHeaders!:any[];
  pFlag:boolean=false;

  constructor(private _bookingService: BookingService, private messageService: MessageService) { }
  ngOnInit(){
    this.getBookingDetails();
  }

  getBookingDetails() {
    this._bookingService.getBookingDetailsByEntityCode('1').subscribe({
      next: (res: any) => {
        console.log(res)
        this.mapBookingData(res)
      }, error: (err: any) => {
        console.log(err)
      }
    })
  }

  mapBookingData(res: any) {
    this.pTableData = res['data']
    this.pHeaders = this.pTableData[0];
    this.pTableData = this.pTableData.slice(1, this.pTableData.length);
    const n = this.pTableData.length;
    this.pFlag = true;
  }

}

