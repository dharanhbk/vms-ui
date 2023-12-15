import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking-service.service';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss'],
})
export class CommonTableComponent implements OnInit {
  cols!: { field: string; header: string; }[];
  products!: any[];
  headers!: any[];
  flag: boolean = false;
  first = 0;
  rows = 10;
  idx=0;

  tableData!: any[][];

  constructor(private _bookingService: BookingService) { }

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
    this.tableData = res['data']
    this.headers = this.tableData[0];
    this.tableData = this.tableData.slice(1, this.tableData.length);
    const n = this.tableData.length;
    // this.idx = Array.from(Array(n).keys());
    this.flag = true;
    console.log(this.tableData + " " + this.headers);
  }

  ngOnInit() {
    this.getBookingDetails();
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

}
