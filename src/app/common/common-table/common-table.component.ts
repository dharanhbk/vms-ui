import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss'],
})
export class CommonTableComponent  implements OnInit {
  cols!: { field: string; header: string; }[];
  products!: any[];

  constructor() { }

  ngOnInit() {
    this.cols = [
      { header: 'Cutomer Name', field: 'customerName' },
      { header: 'User Status', field: 'status' },
      { header: 'Payment Status', field: 'paymentStatus' },
      { header: 'Amount', field: 'amount' },
      { header: 'Action', field: '#'}
  ];
  this.products=[{
    id: '1000',
    customerName: 'Test cutomer',
    amount: '$650',
    status: 'Active',
    paymentStatus: true
},
{
  id: '1001',
  customerName: 'Test cutomer',
  amount: '$650',
  status: 'Active',
  paymentStatus: true
}]
  }

}
